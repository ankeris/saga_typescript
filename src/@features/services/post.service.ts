import axios, { AxiosResponse } from "axios";
import { Post } from "../types/post.interface";
import { APIService } from "../store/service";
import { Nullable } from "../types/store.interface";

class PostService extends APIService {
  getPosts = (limit: Nullable<number> = null): Promise<AxiosResponse<Post[]>> =>
    axios.get<Post[]>(`${this.apiUrl}/posts${this.addLimitStr(limit)}`);

  getPost = (id: number): Promise<AxiosResponse<Post>> =>
    axios.get<Post>(`${this.apiUrl}/posts/${id}`);
}

export default new PostService('https://jsonplaceholder.typicode.com');