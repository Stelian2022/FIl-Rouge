import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../../../services/agency.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-agencies',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {
  agencies: any[] = [];
newAgency: any;

  constructor(private agencyService: AgencyService) { }

  ngOnInit(): void {
    this.loadAgencies();
  }

  loadAgencies(): void {
    this.agencyService.getAgencies().subscribe(data => {
      this.agencies = data;
    });
  }

  createAgency(agency: any): void {
    this.agencyService.createAgency(agency).subscribe(() => {
      this.loadAgencies();
    });
  }

  updateAgency(id: string, agency: any): void {
    this.agencyService.updateAgency(id, agency).subscribe(() => {
      this.loadAgencies();
    });
  }

  deleteAgency(id: string): void {
    this.agencyService.deleteAgency(id).subscribe(() => {
      this.loadAgencies();
    });
  }
}