import Customer from '../model/customerSchema.js'
import Cart from '../model/CartSchema.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const register=async(req,res)=>{
    let first_name=req.body.fname;
    let last_name=req.body.lname;
    let email=req.body.email;
    let password=req.body.password;

    try {
        const edata=await Customer.findOne({email:email})
        if(edata) return res.send("Email is already used")
        const salt_routes=10;
        bcrypt.hash(password,salt_routes,async function(err,hash){
            const data= await Customer.insertMany({
                first_name,
                last_name,
                email,
                password:hash,
            })
            if(data) return res.send('User Addedd')
        })
    } catch (error) {
        return res.send(error.message)
    }
}

const login=async(req,res)=>{
    let email=req.body.email;
    let pwd=req.body.pwd;
    try {
        const data= await Customer.findOne({email:email})
        if(data){
        bcrypt.compare(pwd,data.password,async function(err, result){
            if(result==true){
                const token=jwt.sign({_id:data._id},''+process.env.SECRET)
                // return res.header({'x-auth-token':token}).send('welcome '+data.name)
                // localStorage.setItem(token)
                return res.send(token)
                // return res.send(data)
            }
            return res.send("Please enter correct id and password")
        })
    }
    else{
        return res.send("No user on that email")
    }
    } catch (error) {
       return res.send(error.message)
    }
}
const getme=async(req,res)=>{
    // res.send('hello')
    let _id=req.user._id
    let total=0
    try {
       const data=await Customer.findOne({_id:_id}) 
       if (data) {
        const mycart=await Cart.find({customer:_id})
        mycart[0].products.forEach(item=>{
            total +=item.amount
        })
       

        if(mycart) return res.send({data:data,cart:mycart,total:total})
       }
    } catch (error) {
        return res.send(error.message)
    }

}

export {register,login,getme}