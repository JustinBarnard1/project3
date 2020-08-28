
import { generateId } from "../Utils.js"

export default class Post {
    constructor({ name, title, body, id, comment }) {
        this.name = name
        this.title = title
        this.body = body
        this.id = id || generateId()
        this.comment = comment || []
    }

    get Template() {
        return `<div class="card m-2" style="width: 30vw;">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${this.name}</h6>
    <p class="card-text">${this.body}</p>
    <a href="#" class="card-link text-danger" onclick="app.postsController.deletePost('${this.id}')">Delete Post</a>
  </div>
  <form onsubmit="app.postsController.addComment(event, '${this.id}')">
                <div class="form-group">
                    <textarea class="form-control" id="comment" rows="3" placeholder="Enter your comment..." type="comment"></textarea>
                </div>
                <div class="text-right">
                <button  type="submit" class="btn btn-primary mb-1" >Add Comment</button>
                </div>
                </form>
<div id="comment" class="card card-text">
<ul >${this.CommentTemplate}</ul>
</div>
</div>`
    }


    get CommentTemplate() {
        let template = ""
        this.comment.forEach(c => {
            template += `<span class="d-flex justify-self-end"><a href="#" onclick="app.postsController.removeComment('${this.id}', '${c}')" class="card-link"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-backspace-reverse-fill text-danger" style="font-size: 24pt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 3a2 2 0 0 1 2-2h7.08a2 2 0 0 1 1.519.698l4.843 5.651a1 1 0 0 1 0 1.302L10.6 14.3a2 2 0 0 1-1.52.7H2a2 2 0 0 1-2-2V3zm9.854 2.854a.5.5 0 0 0-.708-.708L7 7.293 4.854 5.146a.5.5 0 1 0-.708.708L6.293 8l-2.147 2.146a.5.5 0 0 0 .708.708L7 8.707l2.146 2.147a.5.5 0 0 0 .708-.708L7.707 8l2.147-2.146z"/>
</svg></a><li class="p-1 bg-primary text-light card my-1">${c}</li></span>`
        })
        return template
    }
}