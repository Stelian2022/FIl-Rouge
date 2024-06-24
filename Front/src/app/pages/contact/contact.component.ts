import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData: any = {};
  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post('url_de_votre_api', this.formData)
      .subscribe(response => {
        console.log('Réponse du serveur:', response);
        // Réinitialiser le formulaire ou effectuer d'autres actions après la soumission réussie
        this.resetForm();
      }, error => {
        console.error('Erreur lors de l\'envoi du formulaire:', error);
      });

  }
  resetForm() {
    // Réinitialiser les valeurs du formulaire après la soumission réussie
    this.formData = {};
  }
}
