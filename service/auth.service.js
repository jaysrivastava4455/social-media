import userModel from "../models/user.model.js";

import bcrypt from "bcrypt";

export const registerUser = async (body) => {
    const hashedpassword = bcrypt.hashSync(body.password, 10);
    const newUser = new userModel({
      username: body.username,
      email: body.email,
      password: hashedpassword,
    });

      await newUser.save();
      return newUser;
};

export const loginUser= async(body)=>{
    const user = await userModel.findOne({
        email:body.email}) ;

    if(!user ) res.status(404).json("user not Found");
    // console.log(body.password);
    // console.log(user.password);

    const passwordcheck = await bcrypt.compare(body.password,user.password);
    if(!passwordcheck) res.status(404).json("Worng password");
    return user;

}