import mongoose, { SchemaTypes } from "mongoose";
const Schema =mongoose.Schema;
const userSchema = new Schema({
    'email':{type:SchemaTypes.String, required:true , unique:true},
    'password':{types:SchemaTypes.String , required:true , minLength:8 , maxLength:25},
    'name':{types:SchemaTypes.String , required:true},
    'phone':{types:SchemaTypes.String}

});
export const  UserModel=mongoose.model('users', userSchema);
