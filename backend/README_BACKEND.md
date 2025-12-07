
# Sufyan Portfolio Management System - Backend (Prepared Package)

This archive contains a complete backend scaffold for the Sufyan Portfolio Management System.

## What is included
- Express server (`src/server.js`, `src/app.js`)
- MongoDB connection utility (`src/config/db.js`)
- Models: `Project` and `Message` (`src/models`)
- Routes & Controllers: projects, contact, uploads, auth (`src/routes`, `src/controllers`)
- AWS services helpers: S3 presign & SES (`src/services`)
- Middleware: error handler and admin auth (`src/middleware`)
- `.env.example` showing required environment variables
- `package.json` with scripts

## How to use
1. Extract the zip and run `npm install` in the project root.
2. Create a `.env` file based on `.env.example` (add your AWS and MongoDB credentials).
3. Run `npm run dev` for development or `npm start` for production.

See further AWS guide after extracting the archive in the companion guide file in the project root.
