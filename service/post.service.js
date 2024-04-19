import postModel from "../models/post.model.js";

export const createPost = async(body)=>{
    try {
        const newPost = new postModel(body);
        await newPost.save();
        return newPost;
        
    } catch (error) {
        throw error;
    
    }
}

// *************************************************************


export const updatePost = async (params, body) => {
    try {
        const updatedPost = await postModel.findById(params.id);
        if (!updatedPost) {
            throw new Error("Post not found");
        }
        
        // Check if the user is authorized to update the post
        if (updatedPost.userId === body.userId) {
            // Use findByIdAndUpdate to update the post
            const updated = await postModel.findByIdAndUpdate(
                params.id, // ID of the post to update
                { $set: body }, // New data to set
                { new: true } // Return the updated post
            );
            return updated;
        } else {
            throw new Error("You can only update your own post");
        }
    } catch (error) {
        throw error;
    }
};

// *****************************************************

export const deletePost = async (params,body) => {
    try {
        const deletedPost = await postModel.findById(params.id);
        if (!deletedPost) { 
            throw new Error("Post not found");
        }
        
        // Check if the user is authorized to update the post
        if (deletedPost.userId === body.userId) {
            // Use findByIdAndUpdate to update the post
            const deleted = await postModel.deleteOne({_id:params.id});
            return deletedPost;
        } else {
            throw new Error("You can only delete your own post");
        }
    } catch (error) {
        throw error;
    }
};

// *************************************************************************like and dislike 

export const likeAndDislike = async (params,body) => {
    try {
        const post = await postModel.findById(params.id);

        if (!post.likes.includes(body.userId)) {
            await post.updateOne({$push : {likes : body.userId}});
            
        } else {
            await post.updateOne({$pull:{likes:body.userId}});
            
        }
        return post;
    } catch (error) {
        throw error;
    }
};

// ****************************************************************

export const getpost = async (params) => {
    try {
        const post = await postModel.findById(params.id);
        return post;
    } catch (error) {
        throw error;
    }
};
// ***************************************************************************


