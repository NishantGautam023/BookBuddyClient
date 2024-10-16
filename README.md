
# Book Buddy Client

This is the client version of the **Book Buddy** app. It interacts with the **BookBuddyAPI** to fetch and display book-related data, providing users with a seamless interface for book discovery, sharing, and trading.

## Overview

**Book Buddy** is a web application designed for book enthusiasts to discover, share, and trade their favorite reads. The client-side application is built to deliver a user-friendly experience, allowing users to interact with the backend **BookBuddyAPI** efficiently.

## Features

- View a catalog of books
- Search for books by title, author, or genre 🔜 (Upcoming Feature)
- View detailed information about each book
- User authentication and authorization
- Trade and share books with other users 🔜 (Upcoming Feature)

## Technologies Used

- **React.js**: JavaScript library for building user interfaces
- **Next.js**: React framework for server-side rendering and static site generation
- **Tailwind CSS**: Utility-first CSS framework for styling web applications

## Subprojects Included

The Book Buddy app is divided into three key subprojects, each responsible for different aspects of the system. These subprojects are maintained independently, and they communicate via API calls between the frontend (Dashboard and ClientJS) and the backend (REST API).

### 1. [REST API](https://github.com/NishantGautam023/BookBuddyAPI)

- **Description**: This backend service handles all the business logic and interactions between the client and the database. It includes features like user authentication, data CRUD operations, and API endpoints.
- **Technologies**: Node.js, Express, MongoDB
- **Repository**: [REST API GitHub Repository](https://github.com/NishantGautam023/BookBuddyAPI)

### 2. [Dashboard (Admin Panel)](https://github.com/NishantGautam023/BookBuddyDashboard)

- **Description**: The admin panel allows administrators to manage content, users, and system settings. It’s built with SHADCN and Next.js, offering a modern, responsive interface.
- **Technologies**: Next.js, SHADCN, Tailwind CSS
- **Repository**: [Dashboard GitHub Repository](https://github.com/NishantGautam023/BookBuddyDashboard)

### 3. [ClientJS (Client View)](https://github.com/NishantGautam023/BookBuddyClient)

- **Description**: The client-side front-end allows users to interact with the system. It’s built with React and TanStack to provide a smooth user experience for browsing and trading books.
- **Technologies**: React, TanStack
- **Repository**: [ClientJS GitHub Repository](https://github.com/NishantGautam023/BookBuddyClient)
