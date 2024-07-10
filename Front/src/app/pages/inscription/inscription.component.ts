import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  inscriptionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.inscriptionForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      const formData = this.inscriptionForm.value;
      this.authService.registerUser(formData.email, formData.password).subscribe(
        () => {
          console.log('Inscription réussie !');
        },
        (error: any) => {
          console.error('Erreur lors de l\'inscription : ', error);
        }
      );
    } else {
      console.log('Formulaire invalide. Veuillez remplir tous les champs correctement.');
    }
  }
}
