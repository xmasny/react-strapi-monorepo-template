# React Strapi Monorepo Template

This repository is a comprehensive template designed to establish a monorepo structure using both React for frontend development and Strapi for backend development. The project follows well-defined conventions and best practices to make the development experience seamless and unified.

---

## Features

- **apps/web:** A React-based frontend application built with Vite and leveraging HeroUI for UI components.
- **apps/strapi:** A Strapi-based backend, ready to be configured and deployed for content management.

---

## Getting Started

### Web Frontend:
The frontend application is located under `apps/web`.
1. Navigate to `apps/web`.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the development server:
    ```bash
    npm run dev
    ```
4. Open [http://localhost:3000](http://localhost:3000) to view the application.

---

### Strapi Backend:
The backend application is located under `apps/strapi`.
1. Navigate to `apps/strapi`.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the Strapi server:
    ```bash
    npm run develop
    ```
4. Access Strapi Admin Panel at [http://localhost:1337](http://localhost:1337).

---

## Deployment

### Web Application:
Use platforms like Vercel or Netlify to deploy the React frontend.

### Backend:
Refer to the [Strapi deployment documentation](https://docs.strapi.io/dev-docs/deployment) for detailed instructions.

## License

This repository is licensed under the [MIT license](https://github.com/xmasny/react-strapi-monorepo-template/blob/main/LICENSE).