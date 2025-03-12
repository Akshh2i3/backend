# 🚀 Full Stack User Registration System

A **modern, minimalist** full-stack user registration system built with **React, Redux, Node.js, Express, MongoDB, and Tailwind CSS**. This system allows users to **register, view, and delete accounts** with a responsive and visually appealing UI.

---

## 🛠 Tech Stack Used

### **Backend (Server)**
- **Node.js** (Latest Version)
- **Express.js** (RESTful API)
- **MongoDB & Mongoose** (Database)
- **Dotenv** (Configuration & Security)

---

## ⚡ Setup & Installation

### **🔹 Prerequisites**
Ensure you have the following installed:  
✔ [Node.js](https://nodejs.org/) (LTS Version)  
✔ [MongoDB](https://www.mongodb.com/) (Local or [MongoDB Atlas](https://www.mongodb.com/atlas))

---

### **🔹 1. Backend Setup**
```sh
git clone https://github.com/akshh2i3/backend.git
cd backend
npm install
```

Start the backend server:
  ```sh
  npm run start
  ```

---


## Endpoints

### 1. Get Gender Options
**Endpoint:**
```
GET /genders
```
**Response:**
```json
["Male", "Female", "Other"]
```
**Status Codes:**
- 200 OK - Successfully retrieved gender options
- 500 Internal Server Error - Server error occurred

---

### 2. Get All Users
**Endpoint:**
```
GET /
```
**Response:**
```json
[
    {
        "_id": "user_id",
        "name": "John Doe",
        "age": 25,
        "dateOfBirth": "1998-01-01",
        "gender": "Male",
        "about": "Software Engineer"
    }
]
```
**Status Codes:**
- 200 OK - Successfully retrieved users
- 500 Internal Server Error - Server error occurred

---

### 3. Get a User by ID
**Endpoint:**
```
GET /:id
```
**Request Parameters:**
- `id` (string) - User ID

**Response:**
```json
{
    "_id": "user_id",
    "name": "John Doe",
    "age": 25,
    "dateOfBirth": "1998-01-01",
    "gender": "Male",
    "about": "Software Engineer"
}
```
**Status Codes:**
- 200 OK - Successfully retrieved user
- 404 Not Found - User not found
- 500 Internal Server Error - Server error occurred

---

### 4. Create a User
**Endpoint:**
```
POST /
```
**Request Body:**
```json
{
    "name": "John Doe",
    "age": 25,
    "dateOfBirth": "1998-01-01",
    "password": "securepassword1",
    "gender": "Male",
    "about": "Software Engineer"
}
```
**Response:**
```json
{
    "_id": "user_id",
    "name": "John Doe",
    "age": 25,
    "dateOfBirth": "1998-01-01",
    "gender": "Male",
    "about": "Software Engineer"
}
```
**Status Codes:**
- 201 Created - User successfully created
- 400 Bad Request - Missing required fields or validation error
- 500 Internal Server Error - Server error occurred

---

### 5. Update a User
**Endpoint:**
```
PUT /:id
```
**Request Parameters:**
- `id` (string) - User ID

**Request Body:** (Optional fields)
```json
{
    "name": "John Doe",
    "age": 26,
    "dateOfBirth": "1997-01-01",
    "gender": "Male",
    "about": "Senior Software Engineer"
}
```
**Response:**
```json
{
    "_id": "user_id",
    "name": "John Doe",
    "age": 26,
    "dateOfBirth": "1997-01-01",
    "gender": "Male",
    "about": "Senior Software Engineer"
}
```
**Status Codes:**
- 200 OK - User successfully updated
- 400 Bad Request - Validation error
- 404 Not Found - User not found
- 500 Internal Server Error - Server error occurred

---

### 6. Delete a User
**Endpoint:**
```
DELETE /:id
```
**Request Parameters:**
- `id` (string) - User ID

**Response:**
```json
{
    "message": "User removed"
}
```
**Status Codes:**
- 200 OK - User successfully deleted
- 404 Not Found - User not found
- 500 Internal Server Error - Server error occurred
---

**🚀 Built with ❤️ by Akshay Sethiya**

If you encounter any issues, feel free to open an **issue** on GitHub.  

---