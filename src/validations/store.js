export default class EntitySchema {
  constructor(checkSchema) {
    this.validateInput = checkSchema({
      name: {
        in: ['body'],
        isLength: {
          errorMessage: 'Store name should be at least 1 character long',
          options: { min: 1 },
        },
        isString: {
          errorMessage: 'Store name must be string data type',
        },
        exists: {
          errorMessage: 'Store name is required',
          options: { checkFalsy: true },
        },
      },
      description: {
        in: ['body'],
        isLength: {
          errorMessage: 'Store should be at least 1 character long',
          options: { min: 1 },
        },
        isString: {
          errorMessage: 'Store must be string data type',
        },
        exists: {
          errorMessage: 'Store is required',
          options: { checkFalsy: true },
        },
      },
    });

    this.validateEntryId = checkSchema({
      id: {
        in: ['params'],
        isMongoId: {
          errorMessage: 'Entity id does not match MongoId format',
        },
      },
    });
  }
}
