# MongoDB Fundamentals – Week 1 Assignment

This project demonstrates the use of MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

---

## 📁 Project Setup

- **Repository:** Cloned from GitHub Classroom
- **Database Used:** `library` (populated with sample book data)
- **Script Used:** `insert_books.js`

---

## ⚙️ Tools & Environment

| Tool            | Version        |
| --------------- | -------------- |
| Node.js         | v18+           |
| MongoDB         | Local or Atlas |
| MongoDB Shell   | mongosh        |
| MongoDB Compass | Optional       |

---

## 🗃️ Sample Data

Sample book data was inserted using the `insert_books.js` script provided in the assignment. The data was successfully loaded into the `books` collection within the `library` database.

---

## 📄 Files Included

- `queries.js`: Contains all MongoDB commands for CRUD, queries, aggregation, and indexing
- `insert_books.js`: Script to populate the database
- `screenshots/books_collection.png`: Visual evidence of the inserted data
- `README.md`: This file

---

## 📊 Screenshot

Below is a screenshot of the `books` collection in MongoDB Compass after inserting sample data:

![Books Collection](./week-1-mongodb-fundamentals-assignment-FridasamKarimi/books_collection.png)

---

## ✅ Tasks Completed

- [x] Setup MongoDB (local or Atlas)
- [x] Ran `insert_books.js` to populate the database
- [x] Performed CRUD operations
- [x] Wrote advanced queries (filtering, projection, sorting)
- [x] Created aggregation pipelines
- [x] Implemented indexing
- [x] Pushed all files to GitHub Classroom repo

---

## 🧠 Author Notes

- All queries were tested using `mongosh` and MongoDB Compass.
- Indexes were created to optimize query performance.
- The aggregation pipelines provide insights such as total books by genre, average price, and more.

---

## 📌 How to Run

1. Install dependencies:
   ```bash
   node -v
   mongosh
   ```
