import { Component, OnInit } from '@angular/core';  
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-detail',
  standalone: true,
  imports: [],
  templateUrl: './admin-detail.component.html',
  styleUrl: './admin-detail.component.scss'
})
export class AdminDetailComponent {
  admins: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(){
    this.userService.getUsers().subscribe((admin:User[]) => {
      this.admins = admin;
    });
  }
  
}