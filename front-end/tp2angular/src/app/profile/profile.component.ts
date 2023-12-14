// profile.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Adjust the path as needed
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class ProfileComponent implements OnInit {
  user: any;
  showWelcomeMessage: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Assuming you have a method like getLoggedInUser() in your UserService
    this.user = this.userService.getLoggedInUser();
    this.showWelcomeMessage = true;
  }
}
