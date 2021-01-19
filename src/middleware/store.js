export default class StoreMiddleware {
  constructor(validations, controllers) {
    this.createOne = [...validations.entity.create, controllers.store.createOne];
    this.getAll = controllers.store.findAll;
    this.verifyOne = [...validations.store.id, controllers.store.findOneById];
    this.updateOne = controllers.store.updateOne;
  }
}
