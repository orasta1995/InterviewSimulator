# 🧠 InterviewSimulator

**AI-Powered Interview Practice Platform** built with **ASP.NET Web API**, **HTML/CSS/JavaScript**, **Gemini API**, and **Google Cloud Run**.

![.NET](https://img.shields.io/badge/.NET%208-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Google Cloud Run](https://img.shields.io/badge/Google%20Cloud%20Run-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Gemini API](https://img.shields.io/badge/Gemini%20API-FFD700?style=for-the-badge&logo=google&logoColor=black)

---

## 🌍 Overview

**InterviewSimulator** is a scalable AI web app that lets users **practice real-time job interviews** with an intelligent virtual interviewer.  
It uses **Google Gemini API** to generate dynamic interview questions, analyze responses, and provide instant AI-driven feedback.

The app is containerized with **Docker** and deployed to **Google Cloud Run** for seamless scalability and reliability.

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | Blazor Web App (.NET 8) |
| **Backend** | ASP.NET Core + SignalR |
| **AI Engine** | Google Gemini API |
| **Architecture** | Clean Architecture (Domain, Application, Infrastructure, UI) |
| **Deployment** | Docker + Google Cloud Run |
| **Database (optional)** | PostgreSQL |

---

## 🚀 Features

✅ Real-time AI interview simulation  
✅ Smart question generation based on job roles  
✅ Instant feedback and response evaluation  
✅ Scalable and serverless deployment on Cloud Run  
✅ Clean architecture for maintainability and testability  

---

## 🧩 System Architecture

User (Browser) → Frontend (HTML/CSS/JS) → ASP.NET Web API → SignalR Hub → Gemini API → Response → User


- The user interacts through the **HTML/CSS/JS frontend**.  
- Requests are sent to **ASP.NET Web API**, which handles logic and communicates with **SignalR Hub** for real-time updates.  
- **Gemini API** generates AI interview questions and evaluates answers.  
- Responses are sent back to the user instantly.  
- The whole system is **containerized with Docker** and deployed on **Google Cloud Run** for scalability and reliability.
  
