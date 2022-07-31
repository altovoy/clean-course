import { PostService } from "./06-dependency-b";

// Main
(async () => {
  const postService = new PostService();

  const posts = await postService.getPosts();

  console.log({ posts });
})();
