# 🎬 IMDB Mini Project

This is a mini **IMDB clone web application** built using **React.js** and styled with **CSS**. It uses the **OMDB API** to search and fetch movie details. You can add movies to a favorites list and revisit them anytime, even after closing or refreshing the browser!

---

## 📌 Features

### 🏠 Home Page
- A search bar to look for movies using the OMDB API
- Search suggestions appear **as you type**
- Each result includes:
  - Poster
  - Title
  - "More Info" button (navigates to detailed page)
  - "Add to Favorites" ❤️ button

### 🎥 Movie Details Page
- Accessed by clicking "More Info"
- Displays:
  - Movie Poster
  - Title
  - Plot
  - Genre
  - Director
  - Released Date

### 🌟 Favorites Page
- Shows all movies you've added to favorites
- Stores data in `localStorage` so it's **persistent**
- You can **remove** any movie from favorites

---

## ⚙️ Tech Stack

- ⚛️ React.js
- 📦 React Router DOM
- 🧠 React Context API
- 🧩 useState, useEffect, useContext
- 🎨 CSS (custom styles)
- 📡 OMDB API
- 💾 localStorage
- 🚀 Vite for development and build

---

## 📂 Folder Structure

```bash
src/
│
├── components/
│   └── MovieCard.jsx
│
├── context/
│   └── FavoritesContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── MoviePage.jsx
│   └── Favorites.jsx
│
├── App.jsx
├── index.css
└── main.jsx


---

## 📸 Screenshots

> Add your app screenshots here after deployment.

---

## 🧠 Learning Objectives

- Learn how to use **React functional components**.
- Understand and apply **React Hooks**:
  - `useState`
  - `useEffect`
  - `useContext`
- Use **React Router** for multi-page navigation.
- Manage global state using **Context API**.
- Persist data using **localStorage**.
- Fetch data from external APIs (OMDB API).

---

## 🔌 OMDB API

This project uses the OMDB API.

To use it:
1. Go to [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
2. Get your free API key.
3. Replace `YOUR_API_KEY` in the code (in `Home.jsx` and `MoviePage.jsx`) with your actual key.

Example:
```js
fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`)


