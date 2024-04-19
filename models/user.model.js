import mongoose from "mongoose";
import {Schema} from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        require: true,
    
        min:3
        
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        
    },
    profilePicture:{
        type:String,
        default:"" 
    },
    coverPicture:{
        type:String,
        default:""
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    desc:{
        type:String
    },
    from:{
        type:String
    },
    relationship:{
        type:Number,
        enum:[1,2,3]
    }, 
    followers:{
        type:Array,
        default:[],
    } ,
    followings:{
        type:Array,
        default:[],
    },
})

export default mongoose.model("user",userSchema);