# JSONPLACEHOLDER based feed

The app let's user browses generic 'post' feed provided by the API.

Post is a generic POJO containing ids & some metas, i.e.:
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
  
Functional:

1. The user can see visual representation of post objects (squares with postId) in the UI
2. The user may interact with UI by clicking a post and see id of a user who 'posted' the post
  (b) this works bi-directionally, user may click again and see postId again
3. Tooltip provided to preview post metas, when hovering over post with mouse
4. [BONUS BRANCH] toolbar showing statistics gathered from global state (see 'Non-functional')

Non-functional behind-the-scenes:

1. Presentational components showing posts
2. Smart master component (HomeComponent) managing posts state
3. [BONUS BRANCH] service to manage state with rxjs injected to HomeComponent

REFERENCE

API homepage https://jsonplaceholder.typicode.com/

Posts example response https://jsonplaceholder.typicode.com/posts

RUN
1. npm i
2. cmd 'npm start' in terminal


