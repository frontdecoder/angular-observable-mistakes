import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CounterService {
    private countSubject = new BehaviorSubject<number>(0);
    count$ = this.countSubject.asObservable();

    increase() {
        const current = this.countSubject.value;
        this.countSubject.next(current + 1);
    }
}
