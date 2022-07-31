import { PostService } from "./06-dependency-b";
import { JsonDataBaseService, WebApiPostService } from "./06-dependency-c";

// Main
(async () => {
  const webApiPostService = new WebApiPostService();
  const jsonDataBaseService = new JsonDataBaseService();
  const postService = new PostService(webApiPostService);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
