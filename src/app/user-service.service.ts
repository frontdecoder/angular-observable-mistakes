import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
}
