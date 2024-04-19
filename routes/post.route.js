import express from 'express';
const router = express.Router();
import { createPostController,updatePostController,deletePostController,likeAndDislikeController ,getpostController} from '../controller/post.controller.js';


//create post 
router.post("/create-post",createPostController);
//update post
router.put("/update-post/:id",updatePostController)
// delete post
router.delete("/delete-post/:id",deletePostController)

// LIkes and dislike
router.put("/like-post/:id",likeAndDislikeController)

// fetch the post 
 
router.get("/get-post/:id",getpostController)


export default router;