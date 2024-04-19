import bcrypt from "bcrypt";
import userModel from "../models/user.model.js";

export const updateuser = async (userId, updateData) => {
  if (updateData.password) {
    try {
      updateData.password = await bcrypt.hashSync(updateData.password, 10);
    } catch (err) {
      throw err;
    }
  }
  try {
    const user = await userModel.findByIdAndUpdate(
      userId,
      {
        $set: updateData,
      },
      {
        new: true,
      }
    );
    return user;
  } catch (error) {
    throw error;
  }
};

// *********************************************************************************************************

export const deleteuser = async (userId) => {
  try {
    await userModel.findByIdAndDelete(userId);
    // lets do not return any things in the delete value
  } catch (error) {
    throw error;
  }
};

// **************************************************************************************

export const getuser = async (userId) => {
  try {
    const user = await userModel.findById(userId);
    return user;
  } catch (error) {
    throw error;
  }
};

// ************************************************************************

export const followUser = async (userdata, updateData) => {
  if (userdata.userId === updateData.id) {
    throw new Error("you cannot follow youself");
   
  } else {
    try {
        const user = await userModel.findById(userdata.userId);
        const currentUser = await userModel.findById(updateData.id);
  
        if (!user.followers.includes(userdata.userId)) {
          await user.updateOne({ $push: { followers: updateData.id } });
          await currentUser.updateOne({ $push: { followings: userdata.userId } });
          return { user, currentUser };
        } else {
          throw new Error("you have already folllowed this user");
        }
      } catch (error) {
        throw error;
      }
   
  }
};

// ***********************************************************************************
export const unfollowUser = async (userData, updateData) => {
    if (userData.userId !== updateData.id) {
      try {
        const user = await userModel.findById(userData.userId);
        const currentUser = await userModel.findById(updateData.id);
  
        if (user.followers.includes(updateData.id)) {
          await user.updateOne({ $pull: { followers: updateData.id } },{new:true});
          await currentUser.updateOne({ $pull: { followings: userData.userId } } ,{new:true});
          return { user, currentUser };
        } else {
          throw new Error("You don't follow this user");
        }
      } catch (error) {
        throw error;
      } 
    } else {
      throw new Error("You cannot unfollow yourself");
    }
  };