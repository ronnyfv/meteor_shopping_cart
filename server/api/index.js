import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { CartCollection } from '../../shared/collections/CartCollection';

Meteor.methods({
  cartInsert: function(product) {
    check(product, CartCollection.simpleSchema());
    
    CartCollection.insert({
      title: product.title,
      price: product.price,
      inventory: product.inventory,
    });
  },
  cartRemove: function(id) {
    CartCollection.remove({
      _id: id
    });
  },
  cartUpdate: function(id, value) {
    CartCollection.update(
      {_id: id},
      { $set: 
        {
          quantity: value
        }
      }
    );
  },
  cartTotal: function() {
    return CartCollection.aggregate(
      [
        { $project: { "priceByquantity": { $multiply: [ "$price", "$quantity" ] } } },
        { $group: { "_id": "null", "totalPrice": { $sum: "$priceByquantity" } } }
      ]
    );
  }
})