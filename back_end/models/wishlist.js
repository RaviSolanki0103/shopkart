const mongoose =require('mongoose')

const wishlistSchema = new mongoose.Schema({
//    id:{
//         type:String,
//         required:true
//     },
    product_id:{
        type:Number,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
})
const Wishlist =mongoose.model('wishlist',wishlistSchema);

module.exports = Wishlist;