import axios, { AxiosResponse } from "axios";
import { from, Observable } from "rxjs";
import { Post } from "../types/post.interface";
import { APIService } from "../store/service";

class PostService extends APIService {
  getPosts = (): Observable<AxiosResponse<Post[]>> => 
    from(axios.get<Post[]>(`${this.apiUrl}/posts`));

  getPost = (id: number): Observable<AxiosResponse<Post>> => 
    from(axios.get<Post>(`${this.apiUrl}/posts/${id}`));
}

export default new PostService('https://jsonplaceholder.typicode.com/');