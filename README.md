# Task App API

## Tech Used
TypeScript, Node.js, Express, MongoDB

## Purpose
This project is a task manager backend built as a learning exercise to understand core backend development concepts, including API design, database integration, authentication, and server-side architecture.

## Key Decisions
-Chose Express for its simplicity and minimal setup, allowing me to focus on building API functionality rather than framework complexity.
-Structured the backend as a REST API to keep endpoints predictable and easy to consume from the frontend.
-Used MongoDB for its flexible schema, which fits well with evolving task data.
-Designed a simple relationship between users and tasks using referenced user IDs.
-Built CRUD endpoints for tasks (create, read, update, delete).
-Used JWT-based authentication to secure routes and keep the backend stateless.
-Protected task routes so users can only access their own data.
- Used TypeScript for better maintainability

## What Could Be Improved
-Add task categories/tags and filtering
-Introduce better validation and error handling
-Add real-time updates for task changes
