export default (Schema) => {
  const schema = new Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    approved: {
      type: Boolean,
      default: false,
    },
  }, { timestamps: true });

  return schema;
};
