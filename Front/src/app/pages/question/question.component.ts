import { Component, Input, OnInit } from '@angular/core';
import { Question, Quiz } from '../../models/quiz.model';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
    const quizId = Number(this.route.snapshot.paramMap.get('id'));
    this.quiz = this.quizService.getQuizzes().find(q => q.id === quizId);
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
    }
  }
}
