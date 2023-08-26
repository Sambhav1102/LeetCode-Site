const URL = 'mongodb+srv://sam1234:sam123456@cluster0.l7avja2.mongodb.net/userdb?retryWrites=true&w=majority';
import {SchemaTypes} from "mongoose";
import mongoose from "../connection.js"
import mongoose from "mongoose";
const promise= mongoose.connect(URL);
promise.then(data=> {
    console.log('DB connected...');
}).catch(err=>{
    console.log('Error in getting connected', err);
})
export default mongoose;
