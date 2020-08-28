import Post from "./Models/Posts.js";

let _state = {
  /** @type {Post[]} */
  posts: [
    new Post({ name: "test", title: "test", body: "test", id: "2" })
  ]
};

function loadState() {
  let data = JSON.parse(localStorage.getItem("posts"))
  if (data) {
    data.posts = data.posts.map(p => new Post(p))
    _state = data
  }
}

loadState()

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  saveState() {
    localStorage.setItem("posts", JSON.stringify(_state))
  }


}

const STORE = new Store();
export default STORE;