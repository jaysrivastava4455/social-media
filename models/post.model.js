import mongoose from "mongoose";
import {Schema} from "mongoose";

const postSchema = new Schema({
   userId:{
    type: String,
    required:true
   },
   desc:{
    type:String,
   },
   img:{
    type:String,
   },
   likes:{
    type:Array,
    dafault:[],
   },
},

   {
    timestamps : true, // save the current time of the document created and also when it was updated in form of a Date by turning it true. 
   }
        


);

export default mongoose.model("post",postSchema);