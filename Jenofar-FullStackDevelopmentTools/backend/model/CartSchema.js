import mongoose from 'mongoose';

const cartSchema= new mongoose.Schema({
  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Customer',
  },
  products:[
    {
        product_id:{type:Number},
        quantity:{type:Number},
        name:{type:String},
        price:{type:Number},
        amount:{type:Number}
    }
  ],
  Total:{type:Number}
})

var Cart=mongoose.model('Cart',cartSchema)

export default Cart