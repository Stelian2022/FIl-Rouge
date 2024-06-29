# Quiz Application for Recruitment Agency
This project was generated with Angular CLI version 17.1.3.

## Project Overview
The recruitment agency's director requires a tool for recruitment agents to administer technical quizzes to candidates, ensuring their skills match client requirements. This tool will audit candidates on various technologies at different complexity levels: Junior, Intermediate, and Exapert.

## Key Features
### Admin Panel:

Add recruitment agents.
Manage the repository of questions and answers.
Generate new quizzes for candidates.
### Recruitment Agent:

Generate quizzes for their candidates.
Send quiz URLs with a unique code to candidates for quiz initiation.
### Quiz Features:

Questions are saved progressively to allow quiz resumption.
Variable number of questions per quiz, with a maximum of 40.
Display of a timer indicating the time spent on the quiz (optional).
Ability to add comments for each question.
### Results Management:

Agents can review quiz results with candidates.
Results include overall correctness and breakdown by question complexity.
No immediate feedback on answers during the quiz.
Differentiation between incorrect answers and unanswered questions due to time constraints.
Results can be presented via email, PDF, or web page.
### Question Management:

Support for multiple correct answers and open-ended questions.
Explanation provided for incorrect answers.
Minimal use of open-ended questions.
Use of radio buttons and checkboxes for responses.
## Development Instructions
### Development Server
Run ng serve for a development server. Navigate to http://localhost:4200/. The application will automatically reload if you change any source files.

### Code Scaffolding
Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

### Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory.

### Running Unit Tests
Run ng test to execute the unit tests via Karma.

### Running End-to-End Tests
Run ng e2e to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further Help
For more help on the Angular CLI use ng help or check out the Angular CLI Overview and Command Reference page.

## Development Guidelines
### Question Complexity Distribution: Ensure quiz generation follows predefined complexity ratios (e.g., Junior: 70%, Intermediate: 20%, Expert: 10%). Use a configuration table or file to avoid hardcoding these values.
### User Interface: Design for use on fixed or portable PCs running Windows. Ensure the application is responsive and accessible.
### Data Persistence: Implement mechanisms to save quiz progress and allow resumption.
### Notification: Notify the responsible agent via email upon quiz completion.
PDF Generation: Ensure quiz results PDF is well-formatted and excludes correct answers.
### Security: Implement appropriate security measures to protect quiz data and user information.
## Usage Restrictions
No backward navigation in the quiz.
Recruitment agents cannot delete submitted quizzes.
Define and limit the number of open-ended questions per quiz.
## Technology Stack
Frontend: Angular 17.1.3
Backend: To be determined (Node.js, .NET, etc.)
Database: To be determined (SQL, NoSQL, etc.)
## Future Enhancements
Integration with additional authentication mechanisms.
Enhanced reporting and analytics for quiz results.
Mobile compatibility for candidates to take quizzes on mobile devices.
This README provides an overview of the application, development instructions, and guidelines to ensure consistent and quality development practices. For detailed implementation and architecture guidelines, refer to the project's documentation.