# 📚 Firebase Storage Books App

A modern **Books Management Web Application** built using **React + Vite** and **Firebase Storage**, allowing users to **add, view, and manage books with image uploads** in a clean and responsive interface.

---

## 🚀 Live Demo
🔗 **Live URL:** https://pr-13-firebase-storage-booksapp.vercel.app/ **

---
## 🖼️ Screenshots

> Add your project screenshots inside a `screenshots` folder and update the paths below


### Add Book
![Add Book](/public/screenshots/1.png)

### Add Book AlertMsg
![Add Book](/public/screenshots/2.png)

### Update Book
![Update Book](/public/screenshots/3.png)

### Delete Book
![Delete Book](/public/screenshots/4.png)

### Firebase Database
![Database](./screenshots/5.png)



---

## 🛠 Tech Stack

- ⚛️ React (Vite)
- 🔥 Firebase Storage
- 🎨 CSS
- 📦 JavaScript (ES6+)
- 🌐 HTML5

---

## ✨ Features

- 📥 Upload book details with image
- 📖 View uploaded books
- ☁️ Firebase Storage integration
- ⚡ Fast Vite build
- 📱 Responsive design

---

## 📂 Project Structure

```
PR-13-Firebase-Storage-BooksApp/
│
├── node_modules/
│
├── public/
│
├── screenshots/
│ ├── Screenshot 2024-01.png
│ ├── Screenshot 2024-02.png
│ ├── Screenshot 2024-03.png
│ └── Screenshot 2024-04.png
│
├── src/
│ ├── assets/
│ │
│ ├── components/
│ │ ├── AddBooks.jsx
│ │ ├── Header.jsx
│ │ └── ViewBooks.jsx
│ │
│ ├── firebase/
│ │ └── config.js
│ │
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
│
├── .env
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── yarn.lock
```

---

## 🔐 Environment Variables

Create a `.env` file:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/firebase-books-app.git
cd pr-13-firebase-storage-booksapp
npm install
npm run dev
```

---

## 🔥 Firebase Setup

1. Create Firebase project
2. Enable **Storage**
3. Copy config keys
4. Paste into `firebase/config.js`
5. Add `.env` variables

