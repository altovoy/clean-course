import { LocalDataBaseService, PostProvider } from "./06-dependency-c";
export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private postProvider: PostProvider;
  private posts: Post[] = [];

  constructor(db: PostProvider = new LocalDataBaseService()) {
    this.postProvider = db;
  }

  async getPosts() {
    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}
