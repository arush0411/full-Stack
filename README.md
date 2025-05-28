# 🎟️ Event Booking System API

This is a backend RESTful API built with Node.js, Express, and PostgreSQL that allows users to view events, book tickets, and manage their bookings. Admin users can create and manage events.

---

## 🚀 Features

### 👤 User Authentication
- User registration & login
- Role-based access (`user` and `admin`)
- JWT-based authentication

### 📅 Event Management
- Public can view events (even without logging in)
- Admin can create, update, delete events
- Event includes:
  - Title, Description, Date & Time, Location
  - Total Seats, Available Seats

### 🧾 Booking System
- Authenticated users can:
  - Book a ticket (only if seats are available)
  - View their bookings
  - Cancel their bookings

---

## 🗂️ Folder Structure (MVC)

