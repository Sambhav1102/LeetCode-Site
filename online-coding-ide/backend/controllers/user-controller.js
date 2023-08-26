import { request } from "express";
import { UserModel } from "../db/models/user-schema.js";

 export const userController = {
    login(request, response){
        const userInfo = request.body;
        UserModel.findOne{'email':userInfo.email}
      //  response.json({message:'Login'});
    },
    profile(request,response){
        const username = request.params.username;
        console.log('All params', username);
        response.json({message:username + ' Profile'});
    },
    
    async register (request,response){
        const userInfo =request.body;
        userInfo.password=hashing.passwordHash (userInfo.password)
        try{const doc=await UserModel.create(userInfo);
            if(doc && doc._id){
                console.log({message:'registered successfully'});
            }else{
                response.json({message:"problem"})
            }

        }catch(err){
            console.log("error occured");
            response.json({message:"Register successfully"});
        }
        
        
    },
    changePassword(request,response){
        response.json({message:'Password Change'});
    }
 };