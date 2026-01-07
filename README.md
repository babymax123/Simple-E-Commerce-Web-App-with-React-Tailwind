📌 Project Overview

This project is a simple e-commerce web application built using React and Tailwind CSS.
It simulates a small household goods store where users can browse products, add items to a cart, and manage stock dynamically.

The main goal of this project is to practice component-based architecture, state management, and clean UI design using modern frontend tools.

✨ Key Features

Product catalog with categories

Reusable UI components (Card, Badge, Button)

Shopping cart functionality

Dynamic stock management (stock decreases when items are added to cart)

Stock status display (available / out of stock)

Disabled add-to-cart button when stock is empty

Responsive layout using Tailwind CSS

Clean and modular folder structure

🧱 Tech Stack

React (Vite)

JavaScript (ES6+)

Tailwind CSS

HTML5

CSS Utility-First Design

📂 Project Structure
src/
 ├── components/
 │   └── ui/
 │       ├── Card.jsx
 │       ├── Badge.jsx
 │       ├── Input.jsx
 │       └── Row.jsx
 ├── pages/
 │   ├── Shop.jsx
 │   ├── Checkout.jsx
 │   └── Success.jsx
 ├── data/
 │   ├── products.js
 │   └── store.js
 ├── utils/
 │   └── rupiah.js
 ├── App.jsx
 └── main.jsx

🔄 Stock Management Logic

Initial stock is defined in products.js

Stock is stored in React state (stockMap)

When a user adds an item to the cart:

Cart quantity increases

Product stock decreases

When stock reaches zero:

The product is marked as out of stock

The “Add to Cart” button is disabled

This approach ensures consistent data handling between the cart and product inventory.

🎨 UI Design Principles

Reusable Components: UI elements such as Card and Badge are reusable across pages

Separation of Concerns: UI, logic, and data are separated into different folders

Utility-First Styling: Tailwind CSS is used for fast and consistent styling

Minimal & Clean Layout: Designed for clarity and ease of use

🚀 Future Improvements

Integrate a real payment gateway (Midtrans / Xendit)

Add product images

Persist cart and stock data using backend or local storage

Add authentication (admin & user roles)

Improve accessibility (ARIA support)

📚 Learning Outcomes

This project helped me understand:

React component composition

State management without external libraries

UI consistency using reusable components

Basic e-commerce logic (cart & stock synchronization)
