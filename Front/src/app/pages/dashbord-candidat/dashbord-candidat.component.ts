import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
//import { DashbordAgenceComponent } from '../dashbord-agence/dashbord-agence.component'; 

@Component({
  selector: 'app-dashbord-candidat',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './dashbord-candidat.component.html',
  styleUrl: './dashbord-candidat.component.scss'
})
export class DashbordCandidatComponent {

}
