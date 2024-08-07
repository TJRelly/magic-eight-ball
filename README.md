# [Magic Eight Ball](https://magic-eight-ball-iota.vercel.app/)

## Project: Interactive Magic Eight Ball Simulation

### Description:
I developed an interactive simulation of the classic Magic Eight Ball toy using React. The application features a sleek black ball that initially displays the prompt, "Think of a Question." Upon clicking the ball, it dynamically selects a random answer from a predefined set of responses and updates the ball's color to match the sentiment of the answer.

### Key Features:
- **Dynamic User Interaction:** The ball changes its message and color based on user interaction, providing a visually engaging experience.
- **State Management:** Utilized React's state management to handle the dynamic updates of the message and color.
- **Component-based Architecture:** Built with a modular approach, including two main components:
  - **App Component:** A simple wrapper that renders the EightBall component.
  - **EightBall Component:** Manages the core functionality, taking an array of answer objects as a prop, each containing a message and a corresponding color.

### Technical Highlights:
- Implemented randomized answer selection to enhance user engagement.
- Employed conditional rendering to update the ball's appearance seamlessly.
- Designed the component to be reusable and easily configurable with different sets of answers.

This project demonstrates my ability to create interactive, state-driven applications with a clean and maintainable codebase, showcasing my proficiency in React and front-end development.

### Running a React App from GitHub

1. **Clone the Repository:**
   ```
   git clone <repository_url>
   cd <repository_name>
   ```

2. **Install Dependencies:**
    ```
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server:**
    ```
    npm start
    # or
    yarn start
    ```

4. **View the App:**
    Open your web browser and go to http://localhost:3000 (or another specified port if mentioned).
