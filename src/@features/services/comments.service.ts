import axios, { AxiosResponse } from "axios";
import { from, Observable } from "rxjs";
import { Comment } from '../types/comment.interface';
import { APIService } from "../store/service";

class CommentService extends APIService {
  getComments = (): Observable<AxiosResponse<Comment[]>> => 
    from(axios.get<Comment[]>(`${this.apiUrl}/comments`));

  getPostComments = (postId: number): Observable<AxiosResponse<Comment[]>> => 
    from(axios.get<Comment[]>(`${this.apiUrl}/comments?postId=${postId}`));

  deleteComment = (id: number): Observable<AxiosResponse<Comment>> => 
    from(axios.delete<Comment>(`${this.apiUrl}/comments/${id}`));
}

export default new CommentService('https://jsonplaceholder.typicode.com/');