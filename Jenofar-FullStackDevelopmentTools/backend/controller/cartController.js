import Cart from "../model/CartSchema.js";

const insertCart=async(req,res)=>{
    let customer=req.user._id
    let product_id=req.body.product_id
    let price=req.body.price
    let name=req.body.name
    let quantity=req.body.quantity
    let amount=price
    let total=0

    try {
        
        let cart=await Cart.findOne({customer})
        if(cart){
            let itemIndex=cart.products.findIndex(p=>p.product_id==product_id)
            if(itemIndex>-1){
                let productItem=cart.products[itemIndex];
                productItem.quantity=quantity;
                productItem.amount=quantity*price
                cart.products[itemIndex]=productItem;
            }else{
                cart.products.push({product_id,quantity,name,price,amount})
            }
            cart.products.forEach(item=>{
                total +=item.amount
            })
            
            cart=await cart.save();
            console.log(total);
            return res.send(cart +"total"+total)
        }else{
            const newCart=await Cart.create({
                customer,
                products:[{product_id,quantity,name,price,amount}]
            })
            total=amount
            return res.send(newCart+"total"+total)
        }

    } catch (error) {
        return res.send(error.message)
    }
    
}

const deletecart=async(req,res)=>{
    let customer=req.user._id
    let product_id=req.body.product_id

    try {
        let cart=await Cart.updateMany({customer:customer},{
            $pull:{products:{product_id:product_id}}
        },{safe:true,multi:false})

        if(cart) return res.send(cart)
    } catch (error) {
        return res.send(error.message)
    }
}

const clearcart=async(req,res)=>{
    let customer=req.user._id;

    try {
        let cart=await Cart.remove({customer:customer})
        if (cart) return res.send(cart)
    } catch (error) {
        return res.send(error.message)
    }
}

export {insertCart,deletecart,clearcart}