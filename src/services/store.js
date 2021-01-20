export default class StoreServices {
  constructor({ Store }) {
    this.model = Store;
  }

  async create({
    name, description, picture, userId,
  }) {
    const store = await this.model.create({
      name, description, picture, userId,
    });
    return { store, status: 201 };
  }

  async findByOwner({ userId }) {
    const stores = await this.model.find({ userId }, '_id name, description, picture userId createdAt userId updatedAt', { limit: 10, sort: '-createdAt' });
    return { stores, status: 200 };
  }

  async findOne({ _id }) {
    let data;
    const store = await this.model.findOne({ _id }, '_id name, description, picture userId createdAt updatedAt');
    if (store) data = { store, status: 200 };
    else data = { message: 'Store not found', status: 404 };
    return data;
  }

  async updateOne({
    userId, name, description, _id, picture,
  }) {
    let data;
    const ownsStore = await this.model.findOne({ $and: [{ userId }, { _id }] }, '_id name, description, picture userId createdAt updatedAt');
    if (ownsStore) {
      await this.model.updateOne({ $and: [{ userId }, { _id }] },
        {
          name: name || ownsStore.name,
          description: description || ownsStore.description,
          picture: picture || ownsStore.picture,
        });
      const store = await this.model.findOne({ $and: [{ userId }, { _id }] }, '_id name, description, picture userId createdAt updatedAt');
      data = { store, status: 200 };
    } else data = { message: 'Can only update store you own', status: 400 };
    return data;
  }
}
