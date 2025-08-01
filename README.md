# E-Learning Portal

A modern, full-stack web platform for submitting, managing, and accessing academic materials (PDFs, images, and more). The project is built with a **React + Tailwind CSS frontend** and a **Spring Boot + MongoDB backend** using GridFS for secure, scalable file storage.

---

## ✨ Key Features

- **Secure file upload:** Submit PDFs and images with metadata (title, subject, description)
- **Download support:** Instantly download any uploaded file
- **Real-time listing:** View all available content as soon as it's uploaded
- **Metadata management:** Track subject, title, and description for each file
- **Responsive UI:** Clean, mobile-friendly design with Tailwind CSS
- **Student/instructor dashboards:** For tracking uploads and reviewing content
- **RESTful APIs:** For easy frontend-backend integration

---

## 🛠️ Tech Stack

- **Frontend:** ReactJS, Tailwind CSS, Axios
- **Backend:** Spring Boot (Java), Spring Data MongoDB, GridFS
- **Database:** MongoDB

---

## 📁 Project Structure

```
E-Learning/
├── e-learningFrontend/    # ReactJS + Tailwind CSS frontend
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── Api.js
│   │   └── ...
│   └── ...
├── elearningBackend/      # Spring Boot backend
│   ├── src/
│   │   ├── main/java/com/yourorg/elearning/
│   │   │   ├── controller/
│   │   │   ├── model/
│   │   │   ├── service/
│   │   │   └── ElearningBackendApplication.java
│   │   └── resources/application.properties
│   └── pom.xml
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** and **npm** (for frontend)
- **Java 17+** and **Maven** (for backend)
- **MongoDB** running locally or in the cloud

### 1. Clone the Repository

```bash
git clone https://github.com/sudip1415/E-Learning.git
cd E-Learning
```

### 2. Set Up the Backend

```bash
cd elearningBackend
# Configure MongoDB in src/main/resources/application.properties
# Example:
# spring.data.mongodb.uri=mongodb://localhost:27017/elearning
mvn clean install
mvn spring-boot:run
```
By default, backend runs at `http://localhost:8080`.

### 3. Set Up the Frontend

```bash
cd ../e-learningFrontend
npm install
# If needed, update API endpoints in src/Api.js to match your backend address
npm start
```
Frontend runs at `http://localhost:3000`.

---

## 📝 Usage

- **Upload Files:** Go to *Upload* page, fill out the form, and submit PDFs or images.
- **View/Download Files:** Go to *View Content* to see all uploads and download any file.
- **About:** Read about platform goals and tech on the *About* page.

---

## 🌐 API Overview

- **POST /content/upload** — Upload a new file (multipart/form-data)
- **GET /content/all** — List all content with metadata
- **GET /content/download/{fileId or fileName}** — Download a file by ID or name

*See backend source for detailed endpoints and request/response formats.*

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Create a pull request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Developer Note

- Focused on modularity, scalability, and great user experience.
- The backend (Spring Boot) and frontend (React) are loosely coupled—feel free to swap technologies as needed.
- GridFS enables efficient storage and retrieval of large files.
- For production, enhance security (auth, file validation) and deployment (Docker, CI/CD).

---

*For any questions or suggestions, please open an issue or contact the maintainer.*
