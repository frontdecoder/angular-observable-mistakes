import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserDetail } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): Observable<{ name: string; id: number }[]> {
    return of([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Leanne Graham' },
    ]);
  }

  getUserDetail(id: number): Observable<UserDetail> {
    return of({ id, email: `user${id}@example.com` });
  }
}
