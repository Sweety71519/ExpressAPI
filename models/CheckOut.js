const mongoose = require("mongoose")


const CheckoutSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: [true, "User Id Must Required"]
    },
    orderstatus: {
        type: String,
        default: "Order is Placed"
    },
    paymentmode: {
        type: String,
        default: "COD"
    },
    paymentstatus: {
        type: String,
        default: "Pending"
    },
    rppid: {
        type: String,
        default: ""
    },
    date: {
        type: String,
        default: ""
    },
    subtotal: {
        type: Number,
        required: [true, "Subtotal Must Required"]
    },
    shipping: {
        type: Number,
        required: [true, "Shipping Must Required"]
    },
    total: {
        type: Number,
        required: [true, "Total Must Required"]
    },
    products: [
        {
            productid: {
                type: String
            },
            name: {
                type: String
            },
            color: {
                type: String
            },
            brand: {
                type: String
            },
            size: {
                type: String
            },
            price: {
                type: Number
            },
            qty: {
                type: Number
            },
            total: {
                type: Number
            },
            pic: {
                type: String
            }
        }
    ]
})
const Checkout = new mongoose.model("Checkout", CheckoutSchema)

module.exports = Checkout