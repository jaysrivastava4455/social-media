import { updateuser, deleteuser, getuser,followUser,unfollowUser } from "../service/user.service.js";

export const updateUserController = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    
      try {
        const user = await updateuser(req.params.id, req.body);
        res.status(200).json({
          user,
          message: "Account has been updaate Successfully ",
        });
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
}
else{
    res.status(500).json("you can only udate only your account ");
}
};

// *******************************************************************************************

export const deleteUserController = async (req, res) => {

    if (req.body.userId === req.params.id || req.body.isAdmin) {
   
            try {
                await deleteuser(req.params.id);
                res.status(200).json({
                  message: "Account has been deleted Successfully ",
                });
              } catch (error) {
                console.log(error);
                res.status(500).json({
                  error: error,
                  message: "error Ocurred Deleting the user",
                });
              }
            
        
    }  else{
        res.status(500).json("you can only delete only your account ");
    } 

  
};

// ****************************************************************************************

export const getUserController = async (req, res) => {
  try {
    const user = await getuser(req.params.id);
    const { password, ...data } = user._doc;

    res.status(200).json({
      data,
      message: "Account has been found Successfully ",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
      message: "error Ocurred finding the user",
    });
  }
};

// ************************************************************

export const followUserController = async (req, res) => {
    try { 
     const data =await followUser(req.body,req.params);
  
      res.status(200).json({
        data,
        message: "Account has been found Successfully ",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: error,
      
      });
    }
  };
//   *****************************************************************************


export const unfollowUserController = async (req, res) => {
    try { 
     const data =await unfollowUser(req.body,req.params);
  
      res.status(200).json({
        data,
        message: "Account has been found Successfully ",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: error,
      
      });
    }
  };
  