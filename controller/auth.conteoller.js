//Register
import userModel from "../models/user.model.js";

import bcrypt from "bcrypt";
import {registerUser,loginUser} from "../service/auth.service.js"

export const register = async (req, res) => {
  try {
    

const newUser =  await registerUser(req.body);


    //to hm chahte hai ki client side pe uska password na jaaye to

    const { password, ...data } = newUser._doc;
    
    res.status(200).json({
      data,
      message: "user has been  registered successfully ",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
      message: "Error occures Registerint User",
    });
  }
};



// *******************************************************************************


export const  login = async(req,res) => {
    try {
    
        const loggedUser = await loginUser(req.body)

        const {password,...data}= loggedUser._doc;
        res.status(200).json({
           data,
            message:"user logged IN successfully"
        })

       
          } catch (error) {
        //   console.log(error);
            res.status(500).json({
              error: error,
              message: "Error occures logging User",
            });
          }

    

}