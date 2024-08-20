import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connection = () => {
    try {
        mongoose.connect(process.env.MONGODBURL, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        console.log('sucessfull connection to db')
    } catch (error) {
        console.error(error)
    }   
}

export {connection}