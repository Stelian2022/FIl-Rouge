import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../models/quiz.model';

@Component({
  standalone: true,
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  imports: [CommonModule, RouterModule]  // Add RouterModule here
})
export class QuizComponent implements OnInit {
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();
  }
}
