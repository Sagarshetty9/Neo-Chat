# NeoChat — Real-Time Chat Application

A real-time chat app built with MERN stack + Socket.io. Features user auth, friend search, and live messaging.

**Live:** [Frontend](https://neo-chat-plum.vercel.app) | [Backend](https://neo-chat-uilq.onrender.com)

## Tech Stack

- **Backend:** Node.js, Express, MongoDB, Socket.io, JWT
- **Frontend:** React, Axios, Socket.io Client, React Router

## Features

- User authentication with JWT + secure cookies
- Search & add friends
- Real-time messaging with delivery status
- Cross-site cookie handling (SameSite: none)

## Setup

**Backend:**
```bash
cd backend && npm install
# Add .env with MONGODB_URI, JWT_SECRET_KEY, FRONTEND_URL
npm run dev
```

**Frontend:**
```bash
cd frontend && npm install
# Add .env.local with VITE_API_URL, VITE_SOCKET_URL
npm run dev
```

## Key Decisions

- Deterministic room IDs for symmetric chat rooms
- Expected errors return responses (400/401/404), unexpected errors thrown to middleware
- SameSite: none for cross-site XHR cookie handling
- Zod validation in middleware, errors handled in components with toast

## Deployment

Backend on Render, frontend on Vercel. Add `vercel.json` for client-side routing.