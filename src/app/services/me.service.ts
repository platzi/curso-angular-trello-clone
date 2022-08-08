import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@models/user.model';
import { Board } from '@models/board.model';
import { checkToken } from '@interceptors/token.interceptor';

@Injectable({
  providedIn: 'root',
})
export class MeService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getMeProfile() {
    return this.http.get<User>(`${this.apiUrl}/api/v1/me/profile`, {
      context: checkToken(),
    });
  }

  getMeBoards() {
    return this.http.get<Board[]>(`${this.apiUrl}/api/v1/me/boards`, {
      context: checkToken(),
    });
  }
}
