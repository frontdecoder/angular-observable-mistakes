import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mistake1UnsubscribeComponent } from './mistake1-unsubscribe/mistake1-unsubscribe.component';
import { Mistake2NestedSubscribeComponent } from './mistake2-nested-subscribe/mistake2-nested-subscribe.component';

@Component({
  selector: 'app-root',
  imports: [Mistake1UnsubscribeComponent , Mistake2NestedSubscribeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-observable-mistakes';
}
