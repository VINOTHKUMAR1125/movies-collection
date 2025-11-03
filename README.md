# 🎬 Movie Collection App

A React-based web application that displays movie collections using **The Movie Database (TMDB)** API.  
This app showcases movie details such as posters, titles, and release dates — currently featuring the **Star Wars Collection** as an example.

---

## 🚀 Features

- 📡 Fetches movie data dynamically from the TMDB API  
- 🎥 Displays movie posters, titles, and release dates  
- 💎 Responsive and clean UI built with **Material-UI (MUI)**  
- ⚡ Built with **React.js** and **create-react-app**

---

## 🧩 Technologies Used

- **React.js** – Frontend framework  
- **Material-UI (MUI)** – Component styling  
- **Axios** – API requests  
- **TMDB API** – Movie data source  

---

## 🛠️ Installation and Setup

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/VINOTHKUMAR1125/movies-collection.git

2. Navigate to the project directory
cd "movies-collection"

3. Install dependencies
npm install

4. Set your TMDB API key

In src/services/api.js, replace the placeholder with your actual TMDB API key:

const API_KEY = "your_api_key_here";

5. Start the development server
npm start


The app will open at http://localhost:3000
.

🌐 API Reference

This project uses The Movie Database (TMDB) API.
You can create your own API key here:
👉 https://www.themoviedb.org/settings/api

movie-collection/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── MovieList.js
│   │   └── MovieList.css
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── .gitignore
├── package.json
└── README.md

🧠 Example Output

Displays a grid of movies from the Star Wars Collection including:

Star Wars (1977)

The Empire Strikes Back (1980)

Return of the Jedi (1983)

...and more!

🧑‍💻 Author

Vinoth Kumar
https://github.com/VINOTHKUMAR1125/movies-collection






MIT License

Copyright (c) 2025 Vinoth Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



