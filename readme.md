# 🌐 Library App

_A modern full-stack-inspired library management frontend featuring a seamless experience for both readers and administrators. Browse books, borrow collections, manage inventory, track loans, and administer the digital library through a clean, responsive interface._

## 🚀 Live Demo

- **Live Demo:** https://personal-project-31-library-app.vercel.app/
- **Repository:** https://github.com/Hary300/Personal-Project-31-Library-App

---

## 📷 Preview

<div align="center">
  <img
    src="./src/assets/live-demo-desktop-mobile.gif"
    alt="Live Demo"
    width="100%"
    style="border-radius: 16px;"
  />
</div>

---

## 🛠 Tech Stack

### Frontend

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

### UI & Styling

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Components-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-Primitives-161618?style=for-the-badge&logo=radixui&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide-Icons-F56565?style=for-the-badge&logo=lucide&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-Icons-E91E63?style=for-the-badge)
![Sonner](https://img.shields.io/badge/Sonner-Toast-000000?style=for-the-badge)

### State Management

![Zustand](https://img.shields.io/badge/Zustand-State_Management-764ABC?style=for-the-badge)

### Data Fetching

![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-HTTP_Client-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### Forms & Validation

![React Hook Form](https://img.shields.io/badge/React_Hook_Form-v7-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-Schema_Validation-3068B7?style=for-the-badge&logo=zod&logoColor=white)

### Table

![TanStack Table](https://img.shields.io/badge/TanStack_Table-v8-FF4154?style=for-the-badge)

### Utilities

![date-fns](https://img.shields.io/badge/date--fns-Date_Utility-770C56?style=for-the-badge)

### Development

![ESLint](https://img.shields.io/badge/ESLint-Code_Quality-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Type_Safe-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

# ✨ Features

### 👤 User Side

- 📚 Browse book collections
- 🔍 Search and filter books
- 📖 View detailed book information
- ❤️ Book recommendations
- 🛒 Borrow cart system
- 📅 Borrow confirmation workflow
- 📜 Loan history
- ⭐ Book rating & reviews
- 👤 User authentication
- 📱 Fully responsive interface

### 🛠 Admin Side

- 📚 Manage book catalog
- ➕ Add new books
- ✏️ Edit book information
- 🗑 Delete books
- 👨‍💼 Manage authors
- 🏷 Manage categories
- 📦 Inventory management
- 📋 Loan management
- 📊 Dashboard overview

### Technical Features

- ⚡ Fast client-side navigation
- 🔄 Server state management with React Query
- 🔒 Type-safe development using TypeScript
- ✅ Schema validation with Zod
- 📝 Form handling with React Hook Form
- 💾 Persistent authentication using Zustand
- 🎨 Modern UI built with shadcn/ui
- ♻️ Reusable component architecture

---

# 📊 API / Backend

This project consumes a REST API for library management.

Main functionalities include:

- Authentication
- Books
- Authors
- Categories
- Borrowing
- Loan Management
- Reviews & Ratings
- User Profile
- Dashboard Statistics

> Backend API is developed separately.

---

# 🏔 Environment Variables

Create a `.env` file in the project root.

```env
VITE_API_BASE_URL=your_api_base_url
```

Example

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

# 📁 Project Structure

```text
src
├── app
├── assets
├── components
│   ├── layouts
│   ├── shared
│   └── ui
├── data
├── features
│   ├── admin
│   │   ├── hooks
│   │   ├── schema
│   │   ├── service
│   │   └── type
│   ├── auth
│   ├── book
│   ├── cart
│   ├── category
│   ├── checkout
│   └── profile
├── lib
├── pages
│   ├── admin
│   ├── auth
│   └── user
├── providers
├── routes
├── styles
├── types
├── utils
└── main.tsx
```

---

# ⚙️ Getting Started

### Clone Repository

```bash
git clone https://github.com/Hary300/Personal-Project-31-Library-App.git
```

### Navigate into the Project

```bash
cd Personal-Project-31-Library-App
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

# 🎯 Highlights

- Modern React 19 + TypeScript architecture
- Feature-rich library management system
- Separate User and Admin interfaces
- Server state management with TanStack React Query
- Persistent global state using Zustand
- Reusable UI components with shadcn/ui
- Responsive design for desktop, tablet, and mobile
- Clean and scalable project structure
- Strong form validation with React Hook Form & Zod
- Optimized developer experience with Vite

---

# 📄 License

This project was created for learning, portfolio, and educational purposes.
