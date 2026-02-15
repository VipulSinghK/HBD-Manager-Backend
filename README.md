# HBD Manager — Automated Wishes Management System

HBD Manager is a full-stack automated wishes platform that allows organizations, managers, or teams to send birthday greetings and other custom wishes without manual effort. The system intelligently schedules and delivers personalized messages to employees or users at the right time.

The goal of this project is to remove the friction of remembering important dates while maintaining a personal touch through automated communication.

---

## Overview

HBD Manager acts as a centralized reminder and message delivery system. Managers can add employee details, store important dates, and configure automated greetings. A background scheduler continuously monitors upcoming events and triggers personalized wishes automatically.

The system is built with scalability, maintainability, and real-world production architecture in mind.

---

## Features

###  Automated Birthday Wishes

* Automatically sends birthday messages
* Customizable templates
* Personalized greetings

### Custom Occasion Support

* Work anniversaries
* Festival wishes
* Promotion congratulations
* Custom reminders

### Secure Authentication

* JWT-based login system
* Protected routes
* Role-based access readiness

### Smart Scheduling System

* Background job scheduling
* Reliable time-based triggers
* Daily event scanning

### Employee Management

* Add/edit/delete employee records
* Store important dates
* Centralized dashboard

### Email Integration

* Automated message dispatch
* Template-ready structure
* Scalable notification system

### Extensible Architecture

* Easy to plug additional features
* Microservice-ready backend design
* Modular folder structure

---

## Tech Stack

### Frontend

* React.js
* Modern component architecture
* API-driven UI rendering

### Backend

* Node.js
* Express.js REST APIs
* Scheduler for background automation

### Database

* PostgreSQL relational storage
* Structured employee/event records

### Authentication

* JWT (JSON Web Tokens)
* Session security

### Automation Layer

* Scheduler service for event triggers
* Time-based message execution

---

## System Architecture

```
React Frontend
        ↓
REST API (Node/Express)
        ↓
PostgreSQL Database
        ↓
Scheduler Engine → Automated Wishes Dispatch
```

The scheduler continuously checks stored dates and triggers appropriate workflows without manual intervention.

---

## Installation

### 1. Clone Repository

```
git clone https://github.com/your-username/hbd-manager.git
cd hbd-manager
```

### 2. Backend Setup

```
cd server
npm install
```

Create `.env` file:

```
PORT=5000
DATABASE_URL=your_postgres_connection
JWT_SECRET=your_secret
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

Run backend:

```
npm start
```

---

### 3. Frontend Setup

```
cd client
npm install
npm start
```

---

## Configuration

* Setup PostgreSQL database
* Configure email credentials
* Adjust scheduler timing if required

---

## Project Structure

```
HBD Manager
│
├── client/           → React frontend
├── server/
│   ├── routes/       → API endpoints
│   ├── controllers/  → Business logic
│   ├── scheduler/    → Automated job handler
│   ├── middleware/   → Auth & security
│   └── db/           → Database connection
│
└── README.md
```

---

## 🔮 Future Enhancements

* Admin dashboard analytics
* Multi-channel notifications (SMS/Push)
* Message template builder
* AI-generated personalized wishes
* Team/group celebration mode
* Calendar integrations
* Event reminders dashboard
* Bulk employee import/export
* Notification retry system
* Cloud deployment pipeline

---

## Use Cases

* Corporate HR automation
* Startup employee engagement
* Team celebration reminders
* Educational institutions
* Community organizations

---

## Testing Ideas

* Scheduler trigger validation
* Email delivery testing
* JWT auth flow testing
* Database integrity checks

---

## Contribution

Contributions are welcome!

Steps:

1. Fork repository
2. Create feature branch
3. Commit changes
4. Open pull request

---

## License

MIT License — feel free to use and modify.

---

## Learning Outcomes

This project demonstrates:

* Full-stack architecture design
* Background job scheduling
* Authentication workflows
* Database modeling
* Automation systems
* Scalable backend design

---

## Acknowledgment

Built as a practical automation tool to streamline workplace celebrations and reminders while practicing production-ready full-stack engineering.

---

## Support

If you like this project:

* Star the repository
* Share feedback
* Suggest features

---

---- HBD Manager
