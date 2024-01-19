# BookVerse

This full-stack web application enables users to manage a collection of books, offering features like listing, adding, and deleting books.

## Technologies

- **Front-End:**

  - React.js with Next.js
  - Tailwind CSS
  - Shadcn Radix UI Component libraries

- **Back-End:**
  - Next.js API route handlers
  - MySQL via PlanetScale
  - Prisma as ORM, schema made with it

## Project Overview

### Front-End

- Components for book listing, addition, and deletion.
- Responsive design for various devices.

### Back-End

- Next.js API route handlers managing RESTful API requests.
- MySQL integration for data storage.
- CRUD operations for book data.
- Covers edge cases like incomplete book information and deleting nonexistent books.

## Deployment

- Front-end deployed on Vercel.
- Database hosted on PlanetScale.
- Considered security and data validation during deployment.
- URL - https://bookverse-roshan.vercel.app

## Design Decisions

### Front-End

- **React.js with Next.js:** Next.js for server-side rendering, providing better performance and SEO.
- **Tailwind CSS:** Utilized for rapid styling, providing a clean and responsive design.
- **Shadcn Radix UI Libraries:** Incorporated various Shadcn Radix UI libraries for enhanced UI components and user interaction.

### Back-End

- **Next.js:** Selected Next.js for building a robust and scalable back-end server.
- **MySQL Integration:** Integrated MySQL for efficient and relational data storage.

### Challenges Faced

- **Database Selection:** Choosing the right database for the project was crucial. Decided on MySQL for its relational capabilities.
- **Deployment Configuration:** Configuring deployment on Vercel and integrating the database on PlanetScale required careful consideration.

### Additional Features

- **Deployment on Vercel:** Deployed the front-end on Vercel for easy accessibility.
- **Database Hosting on PlanetScale:** Hosted the database on PlanetScale for efficient data management.

## Images

- **Main page in Vercel:**
  ![Screenshot of the main page in Vercel](/images/MainPage_in_vercel.png)

- **Second page with add book after the last book, which makes it easier to add book after going through all books:**
  ![Screenshot of the second page in Vercel](/images/MainPage_in_vercel_2.png)

- **MySQL Workbench:**
  ![Screenshot of MySQL Workbench](/images/SQL_workbench.png)
