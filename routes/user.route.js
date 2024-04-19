import express from 'express'
import { updateUserController,deleteUserController,getUserController ,followUserController,unfollowUserController} from '../controller/user.controller.js';
const router = express.Router();




//update User
router.put("/:id",updateUserController);
//delete user
router.delete("/:id",deleteUserController);
//get user
router.get("/:id",getUserController);

//follower user
router.put("/follow/:id",followUserController)
 
// unfollowuser
router.put("/unfollow/:id",unfollowUserController);

export default router;