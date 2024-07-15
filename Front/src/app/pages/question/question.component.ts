import { Component, Input, OnInit } from '@angular/core';
import { Question, Quiz } from '../../models/quiz.model';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class QuestionComponent implements OnInit {
  quiz: Quiz | undefined;
  currentQuestionIndex = 0;
  selectedOptions: any;
  timeLeft: number = 1200; // 20分
  minutes: string = '20';
  seconds: string = '00';  intervalId: any;
  isVisible: boolean = true;
  toggleLabel = 'Masquer la minuterie';

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router: Router, 
  ) { }

  ngOnInit(): void {
    const quizId = Number(this.route.snapshot.paramMap.get('id'));
    this.quiz = this.quizService.getQuizzes().find(q => q.id === quizId);
    this.startTimer();
    this.updateToggleLabel();
  }

  submitAnswer(question: Question, answer: string) {
    question.selectedAnswer = answer;
  }

  addComment(question: Question, comment: string) {
    question.comment = comment;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.quiz!.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  completeQuiz() {
    if (this.quiz) {
      this.quiz.isCompleted = true;
      this.quizService.saveQuiz(this.quiz);
      this.router.navigate(['/quiz-completion']);
    }
  }

  startTimer(): void {
    this.intervalId = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.minutes = Math.floor(this.timeLeft / 60).toString().padStart(2, '0');
        this.seconds = (this.timeLeft % 60).toString().padStart(2, '0');
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  updateToggleLabel() {
    this.toggleLabel = this.isVisible ? 'Masquer la minuterie' : 'Afficher la minuterie';
  }
}
