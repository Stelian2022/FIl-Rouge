import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-admin-detail',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class AdminDetailComponent {
  admins: User[] = [];
  selectedAdmin: any;

  constructor(private userService: UserService) {}
  onSubmit() {
    // Add your form submission logic here
    console.log('Form submitted', this.selectedAdmin);
  }
  editProfile(admin: any) {
    this.selectedAdmin = admin;
  }
  cancelEdit() {
    this.selectedAdmin = null;
  }
  ngOnInit(){
    this.userService.getUsers().subscribe((admin:User[]) => {
      this.admins = admin;
    });
  }

}