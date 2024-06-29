export interface Question {
    id: number;
    text: string;
    options: string[];
    answer: string;
    selectedAnswer?: string;
    comment?: string;
  }
  
  export interface Quiz {
    id: number;
    title: string;
    questions: Question[];
    isCompleted: boolean;
  }
  