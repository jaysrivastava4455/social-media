import { createPost,updatePost,deletePost,likeAndDislike,getpost } from "../service/post.service.js"

export const createPostController = async(req,res)=>{
    try {
        const newPost = await createPost(req.body);
        res.status(200).json({
            newPost,
            message:"post  has been created succefully "
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"post creation failed",
            error:error
        });
        
    }
}

// *****************************************************************
export const updatePostController = async(req,res)=>{
    try {
        const changedpost = await updatePost(req.params,req.body);
        
        res.status(200).json({
            changedpost,
            message:"post  has been updated succefully "
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"post updation  failed",
            error:error
        });
        
    }
}
// *********************************************************************************

export const deletePostController = async(req,res)=>{
    try {
        const deletedpost = await deletePost(req.params,req.body);
        
        res.status(200).json({
            deletedpost,
            message:"post  has been deleted succefully "
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"post deletetion  failed",
            error:error
        });
        
    }
}
// *****************************************************************************

export const likeAndDislikeController = async(req,res)=>{
    try {
        const post = await likeAndDislike(req.params,req.body);
        
        res.status(200).json({
            post,
            message:"post  has been actioned succefully "
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"post action failed",
            error:error
        });
        
    }
};

// ******************************************************************

export const getpostController = async(req,res)=>{
    try {
        const post = await getpost(req.params);
        
        res.status(200).json({
            post,
            message:"post  has been fetched succefully "
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"post fecth  failed",
            error:error
        });
        
    }
};