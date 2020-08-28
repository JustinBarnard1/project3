import STORE from "../store.js";
import Post from "../Models/Posts.js";

//Public
class PostsService {
    deletePost(id) {
        let postIndex = STORE.State.posts.findIndex(p => p.id == id)
        if (postIndex === -1) {
            console.error("invalid id")
            return
        }
        STORE.State.posts.splice(postIndex, 1)
    }


    createPost(newPost) {
        let post = new Post(newPost)
        STORE.State.posts.push(post)
    }

    createComment(newComment, id) {
        let post = STORE.State.posts.find(p => p.id == id)
        post.comment.push(newComment)
    }

    removeComment(id, comment) {
        let post = STORE.State.posts.find(p => p.id == id)
        let commentIndex = post.comment.findIndex(c => c == comment)
        post.comment.splice(commentIndex, 1)
    }

}



const Posts_SERVICE = new PostsService();
export default Posts_SERVICE;
