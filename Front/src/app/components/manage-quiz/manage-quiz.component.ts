import { Component } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-manage-quiz',
  templateUrl: './manage-quiz.component.html',
  styleUrls: ['./manage-quiz.component.css']
})
export class ManageQuizComponent {
  constructor(private quizService: QuizService, private emailService: EmailService) {}

  sendQuiz() {
    const quiz = this.quizService.getQuizzes()[0]; // assume we are sending the first quiz
    const candidateEmail = 'candidate@example.com'; // replace with actual candidate email

    this.emailService.sendQuiz(quiz, candidateEmail).subscribe(response => {
      alert('Quiz sent successfully!');
    }, error => {
      console.error('Error sending quiz', error);
    });
  }
}
