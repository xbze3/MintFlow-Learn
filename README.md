# 📚 MintFlow-Learn

**MintFlow-Learn** is a web-based flashcard learning application designed to help users revise and reinforce key concepts through interactive, deck-based flashcards. The platform currently includes **preloaded decks focused on university-level Computer Science topics**, making it suitable for tertiary students, beginner programmers, and anyone revising core computing concepts.

The application is built using the MERN stack and is fully containerized with Docker and Docker Compose, allowing for fast, consistent, and hassle-free deployment.

---

## Features

-   **Preloaded Flashcard Decks (University-Level CS)**

    -   Includes default decks covering core Computer Science topics such as:

        -   Input Devices
        -   Output Devices
        -   Storage Devices
        -   Computer Networks
        -   Internet and the Web
        -   Data Representation
        -   Other foundational university-level computing concepts

-   **Deck-Based Learning**

    -   Users can select a flashcard deck based on a specific topic or concept.

-   **Interactive Flashcards**

    -   Click through cards within a deck
    -   Each card displays a **question**
    -   Click on a card to **flip it** and reveal the **answer**

-   **Fast & Responsive UI**

    -   Built with React for smooth navigation and interaction.

-   **Dockerized Setup**
    -   Docker and Docker Compose integration
    -   Quick and consistent environment setup across machines

---

## Tech Stack

**Frontend**

-   React
-   JavaScript

**Backend**

-   Node.js
-   Express.js
-   MongoDB

**DevOps**

-   Docker
-   Docker Compose

---

## Project Structure (High-Level)

```
MintFlow-Learn/
│
├── mintflow/           # React frontend
├── mintflow-backend/   # Express + Node backend
├── db/                 # MongoDB Preloaded Flashcard Data
├── docker-compose.yml
└── README.md
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

-   Docker
-   Docker Compose

---

### Running the Application with Docker

1. Clone the repository:

    ```bash
    git clone https://github.com/xbze3/MintFlow-Learn.git
    ```

2. Navigate into the project directory:

    ```bash
    cd MintFlow-Learn
    ```

3. Start the application:

    ```bash
    docker-compose up --build
    ```

4. Access the application in your browser:
    ```
    http://localhost:5173
    ```

---

## How It Works

1. The user searched then selects a **flashcard deck** from the available topics.
2. Each deck contains multiple flashcards related to **university-level Computer Science concepts**.
3. Cards display a **question** on the front.
4. Clicking the card **flips it** to reveal the **answer**.
5. Users can move forward through the deck at their own pace.

---

## Use Cases

-   University-level Computer Science revision
-   Support for ICT and computing courses
-   Self-paced learning and concept reinforcement
-   Quick refreshers before exams or assessments

---

## Future Enhancements

-   User-created flashcard decks
-   Authentication and user profiles
-   Progress tracking and analytics
-   Timed quizzes and assessments
-   Mobile responsiveness improvements

---

## License

This project is licensed under the **MIT License**.  
See the LICENSE file for details.
