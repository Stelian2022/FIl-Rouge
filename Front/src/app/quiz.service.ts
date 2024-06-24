import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private quizzes: Quiz[] = [];
  
  constructor() {
    this.loadQuizzes();
  }

  private loadQuizzes() {
    const savedQuizzes = localStorage.getItem('quizzes');
    if (savedQuizzes) {
      this.quizzes = JSON.parse(savedQuizzes);
    } else {
      this.quizzes = [
        {
          id: 1,
          title: 'Quiz 01/40',
          questions: [
            { 
              id: 1, 
              text: 'What does HTML stand for?', 
              options: ['Hyper Text Markup Language', 'High Tech Management Language'], 
              answer: 'Hyper Text Markup Language' 
            },
            { 
              id: 2, 
              text: 'Which of the following is a programming language?', 
              options: ['HTML', 'Python'], 
              answer: 'Python' 
            },
            { 
              id: 3, 
              text: 'What is CSS used for?', 
              options: ['Styling web pages', 'Creating databases'], 
              answer: 'Styling web pages' 
            },
            { 
              id: 4, 
              text: 'What does CPU stand for?', 
              options: ['Central Processing Unit', 'Computer Personal Unit'], 
              answer: 'Central Processing Unit' 
            },
            { 
              id: 5, 
              text: 'Which programming language is used for building Android applications?', 
              options: ['Java', 'Swift'], 
              answer: 'Java' 
            },
            { 
              id: 6, 
              text: 'What does SQL stand for?', 
              options: ['Structured Query Language', 'Standard Query Language'], 
              answer: 'Structured Query Language' 
            },
            { 
              id: 7, 
              text: 'Which of the following is not a JavaScript framework?', 
              options: ['React', 'Django'], 
              answer: 'Django' 
            },
            { 
              id: 8, 
              text: 'What is the capital of India?', 
              options: ['New Delhi', 'Mumbai'], 
              answer: 'New Delhi' 
            },
            { 
              id: 9, 
              text: 'What is the main purpose of a database?', 
              options: ['Store and manage data', 'Play games'], 
              answer: 'Store and manage data' 
            },
            { 
              id: 10, 
              text: 'Which of the following is a frontend framework?', 
              options: ['Angular', 'Node.js'], 
              answer: 'Angular' 
            },
            { 
              id: 11, 
              text: 'What does API stand for?', 
              options: ['Application Programming Interface', 'Automated Program Integration'], 
              answer: 'Application Programming Interface' 
            },
            { 
              id: 12, 
              text: 'Which programming language is commonly used for machine learning?', 
              options: ['Java', 'Python'], 
              answer: 'Python' 
            },
            { 
              id: 13, 
              text: 'What is the capital of France?', 
              options: ['Paris', 'London'], 
              answer: 'Paris' 
            },
            { 
              id: 14, 
              text: 'What does URL stand for?', 
              options: ['Uniform Resource Locator', 'Unified Resource Link'], 
              answer: 'Uniform Resource Locator' 
            },
            { 
              id: 15, 
              text: 'What is the chemical symbol for water?', 
              options: ['H2O', 'HO'], 
              answer: 'H2O' 
            },
            { 
              id: 16, 
              text: 'Which planet is known as the "Red Planet"?', 
              options: ['Mars', 'Venus'], 
              answer: 'Mars' 
            },
            { 
              id: 17, 
              text: 'What is the largest ocean on Earth?', 
              options: ['Pacific Ocean', 'Atlantic Ocean'], 
              answer: 'Pacific Ocean' 
            },
            { 
              id: 18, 
              text: 'What is the boiling point of water in degrees Celsius?', 
              options: ['100°C', '0°C'], 
              answer: '100°C' 
            },
            { 
              id: 19, 
              text: 'Which of the following is not a programming language?', 
              options: ['HTML', 'CSS'], 
              answer: 'HTML' 
            },
            { 
              id: 20, 
              text: 'What is the largest planet in our solar system?', 
              options: ['Jupiter', 'Mars'], 
              answer: 'Jupiter' 
            },
            { 
              id: 21, 
              text: 'What is the chemical symbol for oxygen?', 
              options: ['O', 'O2'], 
              answer: 'O' 
            },
            { 
              id: 22, 
              text: 'What is the capital of Japan?', 
              options: ['Tokyo', 'Beijing'], 
              answer: 'Tokyo' 
            },
            { 
              id: 23, 
              text: 'Which programming language is commonly used for web development?', 
              options: ['JavaScript', 'Python'], 
              answer: 'JavaScript' 
            },
            { 
              id: 24, 
              text: 'What is the chemical symbol for carbon?', 
              options: ['C', 'CO2'], 
              answer: 'C' 
            },
            { 
              id: 25, 
              text: 'What is the largest continent by land area?', 
              options: ['Asia', 'Africa'], 
              answer: 'Asia' 
            },
            { 
              id: 26, 
              text: 'Which planet is known as the "Blue Planet"?', 
              options: ['Earth', 'Mars'], 
              answer: 'Earth' 
            }
          ],
          isCompleted: false
        }
      ];
    }
  }

  getQuizzes(): Quiz[] {
    return this.quizzes;
  }

  saveQuiz(quiz: Quiz) {
    const index = this.quizzes.findIndex(q => q.id === quiz.id);
    if (index !== -1) {
      this.quizzes[index] = quiz;
    } else {
      this.quizzes.push(quiz);
    }
    localStorage.setItem('quizzes', JSON.stringify(this.quizzes));
  }
}
