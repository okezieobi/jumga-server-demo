/* eslint-disable no-underscore-dangle */
export default class StoreController {
  constructor({ entity }, handleServiceOutput) {
    this.service = entity;
    this.createOne = this.createOne.bind(this);
    this.findAll = this.findAll.bind(this);
    this.updateOne = this.updateOne.bind(this);
    this.findOneById = this.findOneById.bind(this);
    this.handleServiceOutput = handleServiceOutput;
  }

  createOne({ body, file: { path } }, res, next) {
    this.service.create({ ...body, picture: path, userId: res.locals.userId })
      .then((data) => this.handleServiceOutput(data, res, next)).catch(next);
  }

  findAll(req, res, next) {
    this.service.findByOwner(res.locals)
      .then((data) => this.handleServiceOutput(data, res, next)).catch(next);
  }

  findOneById({ params: { id } }, res, next) {
    this.service.findOne({ userId: res.locals.userId, _id: id })
      .then((data) => this.handleServiceOutput(data, res, next)).catch(next);
  }

  updateOne({ body, file: { path } }, res, next) {
    this.service.updateOne({
      ...body,
      picture: path,
      userId: res.locals.userId,
      _id: res.locals.data.entity._id,
    }).then((data) => this.handleServiceOutput(data, res, next)).catch(next);
  }
}
