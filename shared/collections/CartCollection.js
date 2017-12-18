import { Mongo } from 'meteor/mongo';

const CartCollection = new Mongo.Collection('cart');

const CartSchema = new SimpleSchema({
  _id: {
    type: String,
    optional: false,
  },
  id: {
    type: Number,
    optional: true,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
    decimal: true,
  },
  inventory: {
    type: Number,
  },
  quantity: {
    type: Number,
    defaultValue: 1,
    optional: true
  },
  department: {
    type: String,
    optional: true,
  },
});

CartCollection.attachSchema(CartSchema);

export { CartCollection };