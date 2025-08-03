import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { UserDetail } from '../model';
import { map, Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mistake2-nested-subscribe',
  imports: [CommonModule],
  templateUrl: './mistake2-nested-subscribe.component.html',
  styleUrl: './mistake2-nested-subscribe.component.scss'
})
export class Mistake2NestedSubscribeComponent implements OnInit {
  userDetail: UserDetail | null = null;

  userDetail$: Observable<UserDetail>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // wrong and messy way
    this.userService.getUser().subscribe(users => {
      const firstUserId = users[0]?.id;
      if (firstUserId) {
        this.userService.getUserDetail(firstUserId).subscribe(detail => {
          this.userDetail = detail;
        });
      }
    });


    //better way
    this.userDetail$ = this.userService.getUser().pipe(
      map(users => users[0]?.id),
      switchMap(id => this.userService.getUserDetail(id!))
    );

  }
}
