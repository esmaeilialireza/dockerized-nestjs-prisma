# NestJS Prisma Dockerized App

This project is a NestJS application that uses Prisma ORM for database management. It demonstrates how to set up a NestJS app, integrate Prisma ORM, run migrations, and dockerize the entire setup to run in a production environment.

## Table of Contents

- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Docker Setup](#docker-setup)
- [Useful Commands](#useful-commands)
- [Contributing](#contributing)
- [License](#license)

## Project Description

This project involves creating a simple NestJS backend service that interacts with a PostgreSQL database using Prisma ORM. It includes instructions for setting up the project, performing database migrations, seeding the database, and running the application using Docker.

## Technologies Used

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Setup Instructions

1. **Clone the Repository**

    ```bash
    git clone https://github.com/esmaeilialireza/dockerized-nestjs-prisma.git
    cd dockerized-nestjs-prisma
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**

    Create a `.env` file in the root of the project and add your database connection string:

    ```plaintext
    DATABASE_URL=postgresql://username:password@localhost:5432/database-name
    ```

## Running the Application

1. **Run Database Migrations**

    ```bash
    npm run db:migrate:dev
    ```

2. **Seed the Database**

    ```bash
    npm run db:seed
    ```

3. **Start the Application**

    ```bash
    npm run start:dev
    ```

    The application should now be running at `http://localhost:3000`.

## Docker Setup

1. **Build and Run Docker Containers**

    ```bash
    docker-compose up -d --build
    ```

    This will build and start the Docker containers for the application and the PostgreSQL database.

2. **Seed the Database in Docker**

    - Find the container ID for the app:

        ```bash
        docker ps
        ```

    - Open a shell in the container:

        ```bash
        docker exec -it <containerId> sh
        ```

    - Run the seed script inside the container:

        ```bash
        node dist/prisma/seed.js
        ```

## Useful Commands

- **Run Migrations**

    ```bash
    npm run db:migrate:dev
    ```
    
- **Generate Prisma Client**

    ```bash
    npx prisma generate
    ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any improvements or bug fixes.
