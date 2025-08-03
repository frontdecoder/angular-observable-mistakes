import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../model';
import { UserService } from '../user-service.service';
import { CommonModule } from '@angular/common';
import { Observable, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-mistake1-unsubscribe',
  imports: [CommonModule],
  templateUrl: './mistake1-unsubscribe.component.html',
  styleUrl: './mistake1-unsubscribe.component.scss'
})
export class Mistake1UnsubscribeComponent implements OnInit, OnDestroy {
  users: User[] | null = null;

  users$: Observable<User[]>;

  destroy$ = new Subject<void>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // wrong way
    this.userService.getUser().subscribe(user => {
      this.users = user;
    });

    //most common ways
    this.users$ = this.userService.getUser();

    this.getUserList();
  }


  getUserList() {
    this.userService.getUser()
      .pipe(
        takeUntil(this.destroy$),
        take(1)
      )
      .subscribe({
        next: (v: User[]) => {
          this.users = v;
        }
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
