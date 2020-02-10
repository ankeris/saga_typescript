import { Nullable } from "../types/store.interface";

export class APIService {
  public apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  addLimitStr(limit: Nullable<number>): string {
    return limit ? `?_limit=${limit}` : '';
  }

  addStartStr(startNumber: Nullable<number>): string {
    return startNumber ? `&_start=${startNumber}` : '';
  }
}