const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
    {
    ISBN: {
        type: String,
    },
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
    sold: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
    },
    description: {
        type: String,
    },
    category: {
        type: ObjectId,
        ref: "category"
    },
    images: {
        type: Array,
    },
},
    { timestamps: true }
);
module.exports = Product = mongoose.model("product",ProductSchema)
