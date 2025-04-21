# ChildCare Connect

## 🏠 Overview

ChildCare Connect is a modern web application designed to help families find professional caregivers for their children. Our platform offers an intuitive interface that simplifies the process of discovering the perfect childcare professional suited to your family's specific needs.

## ✨ Key Features

- **Elegant Home Page** with smooth navigation and striking design
- **Detailed Caregiver Profiles** showcasing skills, experience, and pricing
- **Advanced Filtering System** to find caregivers by name, price, or ratings
- **Personal Bookmarks** for registered users to save favorite caregivers
- **Appointment Scheduler** with intuitive date and time selection
- **Secure Authentication** powered by Firebase
- **Fully Responsive Design** optimized for all devices (320px to 1440px)

## 🛠️ Technologies Used

- **React.js** - For building the user interface
- **JavaScript** - For application logic
- **Redux Toolkit** - For state management
- **Firebase** - For authentication and database
- **React Router** - For navigation
- **React Hook Form & Zod** - For form handling and validation
- **CSS** - For component styling

## 📱 Pages

### Home Page

The landing page welcomes users with an elegant design featuring the platform name, a compelling tagline, and a call-to-action that guides visitors to explore available caregivers. The page features a beautiful layout with a serene color scheme.

### Caregivers Page

Displays a comprehensive collection of caregivers available for hire. Users can:

- Sort alphabetically (A-Z or Z-A)
- Filter by price (less than $10/hr or greater than $10/hr)
- Sort by ratings (popular or new caregivers)
- Add caregivers to bookmarks with a single click

### Bookmarks Page

A personalized space for authenticated users to access their saved caregiver profiles, making it easy to review and contact preferred childcare providers.

## 🔐 Authentication Features

The application includes a fully functional authentication system with:

- User registration through Firebase
- Secure login functionality
- Protected routes and personalized experience
- User profile management

## 📋 Appointment Booking

Schedule appointments with caregivers through an intuitive form that includes:

- Address and contact information
- Child's age details
- Convenient time selection with a custom time picker
- Additional comments section for special requirements

## 🎨 UI/UX Features

- **Elegant Design** - Clean, professional styling in a soothing green theme
- **Modal Windows** - Smooth modals for registration, login, and appointment booking
- **Interactive Elements** - Responsive buttons, expandable cards, and intuitive form inputs
- **User Feedback** - Toast notifications for actions like bookmark management

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/childcare-connect.git
cd childcare-connect
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your Firebase credentials (see `.env.example` for the required variables)

4. Start the development server:

```bash
npm run dev
```

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with care for families seeking quality childcare solutions.
