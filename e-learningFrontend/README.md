# E-Learning Portal Frontend

This is the **ReactJS + Tailwind CSS** frontend for the E-Learning Portal—a modern platform for uploading, viewing, and downloading academic resources such as PDFs and images. It integrates seamlessly with the Spring Boot backend and MongoDB for secure, scalable file storage and retrieval.

---

## ✨ Features

- **Upload files:** Submit PDFs and images with metadata (title, subject, description)
- **View and download:** Instantly browse and download any uploaded file
- **Responsive UI:** Built with Tailwind CSS for a smooth experience on any device
- **Intuitive navigation:** Clean navbar and footer for easy access to all sections
- **Real-time updates:** See new content as soon as it's uploaded

---

## 🛠️ Tech Stack

- **Frontend:** ReactJS, Tailwind CSS, Axios
- **API Integration:** RESTful APIs to the backend (Spring Boot)
- **State Management:** React hooks and context

---

## 📁 Project Structure (Example)

```
e-learningFrontend/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Content.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── UploadContent.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── Api.js
│   └── index.js
└── ...
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- Backend server running (see backend setup)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sudip1415/E-Learning.git
   cd E-Learning/e-learningFrontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure API endpoints:**
   - Edit `src/Api.js` to set the backend API URL as needed.

4. **Start the development server:**
   ```bash
   npm start
   ```
   The app will run at http://localhost:3000.

---

## 📝 Usage

- **Upload Content:** Go to the *Upload* page to submit new files.
- **View/Download Content:** Browse and download files from the *View Content* page.
- **About:** Learn about the platform on the *About* page.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a pull request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Developer Notes

- Focused on modularity, reusability, and user experience.
- Easily adaptable for other educational or content-sharing use-cases.
- For backend and deployment, see the main project README.

---
