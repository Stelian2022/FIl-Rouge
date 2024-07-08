import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashbord-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashbord-admin.component.html',
  styleUrl: './dashbord-admin.component.scss'
})
export class DashbordAdminComponent implements OnInit {
  admins: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.admins = this.userService.list();
  }
}
