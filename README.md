# Torino Tours — Travel Booking Web Application

Torino Tours is a responsive travel booking front-end application built with **Next.js and React**. It provides a user interface for exploring tours, managing user profiles, making reservations, and viewing booking and transaction information.

The project demonstrates modern front-end development practices, reusable UI patterns, form validation, API communication, and client-side interactions.

## 🔗 Project Links

- **GitHub Repository:** https://github.com/zahraasadi3239/torino-page
- **Live Demo:** Add your deployed project URL here, if available.

## ✨ Features

### 🔐 Authentication and User Profile

- **OTP Authentication:** User login interface based on one-time password verification.
- **Protected Routes:** Restricts access to designated pages based on authentication status.
- **Profile Setup:** Allows users to complete their profile information.
- **Profile Management:** Supports editing and updating profile details.

### 🧳 Tour Booking

- **Tour Search:** Search for tours using origin, destination, and travel date ranges.
- **Tour Reservations:** Allows authenticated users to reserve tours with available capacity.
- **Cart Interaction:** Adds selected tours to the cart as part of the reservation flow.
- **My Tours:** Displays previously booked tours and their statuses.
- **Transaction History:** Presents transaction information organized by date and time.

### 🖥️ User Experience

- Responsive layouts for different screen sizes
- Form validation and user feedback
- Loading indicators during supported asynchronous operations
- Toast notifications for application feedback
- Jalali calendar and Persian date formatting support

## 🛠️ Technologies Used

- **Next.js 13.5** — React framework using the App Router
- **React 18** — UI development
- **JavaScript** — Application logic
- **CSS / SCSS** — Styling and layout

## 📚 Libraries and Tools

| Library | Purpose |
|---|---|
| React Query | Server-state management and data fetching |
| Axios | HTTP requests and API communication |
| React Hook Form | Form state management |
| React18 Input OTP | OTP input interface |
| Zaman | Jalali calendar and date-picker functionality |
| Jalaali-js | Jalali date conversion |
| Yup | Form validation |
| React Toastify | Toast notifications |
| React Loader Spinner | Loading indicators |

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Access to the required backend service for features that depend on it

### 1. Clone the repository

```bash
git clone https://github.com/zahraasadi3239/torino-page.git
```

### 2. Navigate to the project directory

```bash
cd torino-page
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Important:** This repository contains the front-end application. Features that require authentication, tour data, reservations, or transaction information may depend on a separately configured backend service. Configure the required API settings according to the project's existing configuration before testing those features.

## 🏗️ Project Highlights

This project demonstrates practical experience with:

- Developing a multi-page application using Next.js App Router
- Organizing UI components and application routes
- Managing server state and communicating with APIs
- Handling forms and validating user input
- Implementing authentication-related user flows
- Working with Persian dates and Jalali calendar functionality
- Building interfaces for a travel booking workflow

## 🔮 Future Improvements

Potential improvements include:

- Expanding automated test coverage
- Improving accessibility and keyboard navigation
- Enhancing loading, error, and empty states
- Further optimizing performance and responsive behavior

## 👩‍💻 Author

**Zahra Asadi**

Junior Front-End Developer focused on building responsive, user-friendly web applications with JavaScript, React, and Next.js.

- **GitHub:** https://github.com/zahraasadi3239
- **Email:** zahra6052a@gmail.com

## 📄 License

This project is licensed under the MIT License, provided the repository includes the corresponding `LICENSE` file.
