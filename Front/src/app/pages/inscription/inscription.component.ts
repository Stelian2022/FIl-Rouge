import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service'; // Service pour gérer l'authentification
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  username!: string;
  email!: string;
  password!: string;
  inscriptionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.inscriptionForm = this.formBuilder.group({
      username : ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      // Ajoutez d'autres champs requis pour l'inscription
    });
  }

/*  onSubmit() {
    if (this.inscriptionForm.valid) {
      const formData = this.inscriptionForm.value;
      // Appelez votre service d'authentification pour traiter l'inscription
      this.authService.registerUser(formData).subscribe(
        () => {
          console.log('Inscription réussie !');
          // Redirigez l'utilisateur vers une page de confirmation ou de connexion
        },
        (error: any) => {
          console.error('Erreur lors de l\'inscription : ', error);
          // Gérez l'erreur et informez l'utilisateur
        }
    
      );
    } else {
      console.log('Formulaire invalide. Veuillez remplir tous les champs correctement.');
    }
  }*/ 
}

