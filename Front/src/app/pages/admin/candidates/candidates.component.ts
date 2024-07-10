import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidates',
  standalone: true, 
  imports: [FormsModule, NgFor],
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent {
  candidates: { id: number, name: string }[] = []; // Assurez-vous que candidates est correctement initialisé
  newCandidate: { name: string } = { name: '' }; // Assurez-vous que newCandidate est correctement initialisé

  createCandidate() {
    const newId = this.candidates.length > 0 ? this.candidates[this.candidates.length - 1].id + 1 : 1;
    this.candidates.push({ id: newId, name: this.newCandidate.name });
    this.newCandidate.name = '';
  }

  updateCandidate(id: number, candidate: { name: string }) {
    // Logique de mise à jour du candidat
  }

  deleteCandidate(id: number) {
    this.candidates = this.candidates.filter(candidate => candidate.id !== id);
  }
}
