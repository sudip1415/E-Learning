# E-Learning Portal Backend

This is the **Spring Boot (Java)** backend for the E-Learning Portal, responsible for handling all file operations and content management. It provides secure RESTful APIs for uploading, storing, retrieving, and downloading academic resources such as PDFs and images. All files and metadata are stored in **MongoDB** using **GridFS** for scalable and efficient storage.

---

## ✨ Features

- **File Upload:** Accepts and stores PDFs, images, and other allowed file types with metadata (title, subject, description)
- **File Download:** Securely serves files to users by request
- **Content Listing:** Provides metadata for all uploaded files
- **MongoDB GridFS:** Enables fast, reliable storage and retrieval (even for large files)
- **CORS Support:** Seamless integration with the React frontend
- **RESTful Endpoints:** Clean API for frontend-backend communication

---

## 🛠️ Tech Stack

- **Backend:** Spring Boot (Java), Spring Data MongoDB
- **Database:** MongoDB (with GridFS for file storage)
- **Other:** Maven, Java 17+, CORS configuration

---

## 📁 Project Structure (Example)

```
elearningBackend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── yourorg/
│   │   │           └── elearning/
│   │   │               ├── controller/
│   │   │               ├── model/
│   │   │               ├── service/
│   │   │               └── ElearningBackendApplication.java
│   │   └── resources/
│   │       └── application.properties
└── pom.xml
```
*Update package names as per your setup.*

---

## 🚀 Getting Started

### Prerequisites

- Java 17+ installed
- Maven installed
- MongoDB running (local or remote)

### Installation & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sudip1415/E-Learning.git
   cd E-Learning/elearningBackend
   ```

2. **Configure MongoDB connection:**
   - Edit `src/main/resources/application.properties`:
     ```
     spring.data.mongodb.uri=mongodb://localhost:27017/elearning
     ```
   - Adjust the URI for your MongoDB instance as needed.

3. **Build and run the application:**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
   The backend will run at `http://localhost:8080` by default.

---

## 🌐 API Endpoints (Typical)

- **POST /content/upload** — Upload a new file (multipart/form-data)
- **GET /content/all** — List all uploaded content with metadata
- **GET /content/download/{fileId or fileName}** — Download a file by ID or name

*See source code for exact endpoint paths and formats.*

---

## 🔐 Security & Configuration

- CORS enabled for frontend integration (edit as needed)
- Validate file types and sizes for production
- Handle sensitive data securely

---

## 👨‍💻 Developer Notes

- Modular structure for easy feature expansion
- Align API endpoints with frontend expectations (`Api.js`)
- GridFS ensures efficient large file handling

---

## 📜 License

This project is licensed under the MIT License.

---

*For frontend setup, see the `e-learningFrontend` directory and its README.*
