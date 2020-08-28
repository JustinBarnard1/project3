import PostsService from "../Services/PostsService.js";
import STORE from "../store.js"


//Private
function _drawPosts() {
  let template = ""
  STORE.State.posts.forEach(p => template += p.Template)
  document.getElementById("postsBody").innerHTML = template
  STORE.saveState()
}






//Public
export default class PostsController {
  constructor() {
    _drawPosts()
  }

  createPost(event) {
    event.preventDefault();
    let form = event.target
    let newPost = {
      name: form.name.value,
      title: form.title.value,
      body: form.body.value
    }
    PostsService.createPost(newPost)
    form.reset()
    _drawPosts()
  }

  deletePost(id) {
    PostsService.deletePost(id)
    _drawPosts()
  }

  addComment(event, id) {
    event.preventDefault()
    let form = event.target
    let newComment = form.comment.value
    PostsService.createComment(newComment, id)
    form.reset()
    _drawPosts()
  }

  removeComment(id, comment) {
    PostsService.removeComment(id, comment)
    _drawPosts()
  }

}