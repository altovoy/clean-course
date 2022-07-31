import { Post } from "./06-dependency-b";
import localPosts from "../data/local-database.json";
import { HttpClient } from "./03-open-close-c";
export interface PostProvider {
  getPosts(): Promise<Post[]>;
}

export class LocalDataBaseService implements PostProvider {
  constructor() {}

  async getPosts(): Promise<Post[]> {
    return [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
      },
    ];
  }
}

export class JsonDataBaseService implements PostProvider {
  constructor() {}

  async getPosts(): Promise<Post[]> {
    return localPosts;
  }
}

export class WebApiPostService implements PostProvider {
  htppClient: HttpClient = new HttpClient();
  async getPosts(): Promise<Post[]> {
    const { data } = await this.htppClient.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  }
}
