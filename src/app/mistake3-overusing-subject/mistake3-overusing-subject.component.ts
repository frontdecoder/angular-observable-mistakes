import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-mistake3-overusing-subject',
  imports: [CommonModule],
  templateUrl: './mistake3-overusing-subject.component.html',
  styleUrl: './mistake3-overusing-subject.component.scss'
})
export class Mistake3OverusingSubjectComponent {

  // private count$ = new Subject<number>();
  // count = 0;

  // constructor() {
  //   this.count$.subscribe(value => {
  //     this.count = value;
  //   });
  // }

  // increase() {
  //   this.count$.next(this.count + 1);
  // }


constructor(public counter: CounterService) {}

  // increase() {
  //   this.counter.increase();
  // }



  // 
   count = signal(0);
     increase() {
    this.count.update(v => v + 1);
  }
   

}
