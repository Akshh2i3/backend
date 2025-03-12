# REST API Documentation

## Base URL
```
http://locahost:5000/
```

## User Schema
```json
{
    "name": "string (min 2 characters, required)",
    "age": "number (0-120, required)",
    "dateOfBirth": "date (valid date, required)",
    "password": "string (min 10 characters, must contain at least one letter and one number, required)",
    "gender": "string (Male, Female, Other, required)",
    "about": "string (max 5000 characters, optional)",
    "timestamps": "createdAt, updatedAt"
}
```

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