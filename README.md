# 📚 Database Exam Prep — Ôn thi trắc nghiệm Cơ sở dữ liệu

A web application for practicing multiple-choice questions on **Database** (Cơ sở dữ liệu). Built with vanilla HTML, CSS, and JavaScript — no frameworks required.

---

## ✨ Features

- 🗂️ Browse a large question bank covering core database concepts
- ✅ Interactive multiple-choice quiz with instant feedback
- 📊 Score tracking and progress summary
- 🔀 Randomized question order for better practice
- 💡 Detailed explanations for each answer
- 🌙 Modern, responsive UI

---

## 🗂️ Project Structure

```
db/
├── index.html              # Main entry point
├── style.css               # Application styles
├── app.js                  # Core quiz logic
├── questions.json          # Question bank (JSON)
├── add_explanations.js     # Script to enrich questions with explanations
├── ans.txt                 # Raw answer data
├── questions_export.txt    # Exported questions (plain text)
└── test.js                 # Test / utility script
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- (Optional) A local web server for best experience — e.g. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code

### Run Locally

1. Clone or download this repository.
2. Open `index.html` directly in your browser, **or** start a local server:

   ```bash
   # Using Node.js http-server
   npx http-server . -p 3000
   ```

3. Navigate to `http://localhost:3000` in your browser.

---

## 📖 Usage

1. The app loads questions from `questions.json` automatically.
2. Select an answer for each question.
3. Submit to see your score and review explanations.

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| HTML5 | Structure & markup |
| CSS3 | Styling & animations |
| JavaScript (ES6+) | Quiz logic & interactivity |
| JSON | Question data storage |

---

## 📝 License

This project is for **educational purposes** only.
