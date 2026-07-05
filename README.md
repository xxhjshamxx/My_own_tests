# Microservices E-Commerce Platform
**Graduation Project 2026**

Designed, maintained, and configured by: **Ramzy Ahmed Ramzy Mohamed**

## Project Architecture
This is a production-grade, fully containerized microservices e-commerce platform! It features:
- **Microservices**: Auth, Products, Orders, Payments, Expiration
- **Nginx Reverse Proxy**: Acts as a unified entry point, routing traffic to appropriate microservices and the Next.js frontend
- **Event-Driven Communication**: NATS Streaming as a message broker for async event processing
- **Data Layer**: MongoDB per service for data persistence
- **Container Orchestration (Dev)**: Docker Compose (local dev) & Kubernetes (prod-ready)
- **Observability**: Prometheus & Grafana (monitoring)
- **CI/CD**: Jenkins
- **Self-Healing Client**: React Error Boundary to prevent full-page crashes
- **Data Seeding**: Direct MongoDB inserts for initial test data

## Tech Stack
| Layer | Technology |
|-------|------------|
| Frontend | Next.js, React, Bootstrap |
| Backend | Node.js, Express, TypeScript |
| Databases | MongoDB |
| Messaging | NATS Streaming |
| Containerization | Docker |
| Orchestration | Docker Compose (Local), Kubernetes (Prod) |
| Monitoring | Prometheus, Grafana |
| CI/CD | Jenkins |
| Proxy | Nginx |

## Setup Instructions
1. **Clone the Repo**:
    ```bash
    git clone <repo-url>
    cd my-own-tests
    ```
2. **Start the Docker Compose Stack**:
    ```bash
    docker-compose up -d --build
    ```
3. **Access the Application**: Open http://localhost:8080 in your browser!

## Key Features Implemented
### Self-Healing Error Boundary
We added a React Error Boundary in `client/components/ErrorBoundary.js` that wraps the entire app in `client/pages/_app.js`, ensuring that any uncaught JavaScript errors in components show a user-friendly message instead of a completely blank white screen!

### Data Seeding Approach
For local dev, we seed test data directly to MongoDB using `mongosh` inside the relevant container:
```bash
docker exec my_own_tests-products-mongo-1 mongosh products --eval "db.products.insertOne({title: 'Awesome Test Product', price: 49.99, userId: 'abc123', version: 0})"
```

### Sign Out Handling
The Sign Out route at `/api/users/signout` (in `auth/src/routes/signout.ts`) properly clears the cookie session by setting `req.session = null`.

### 404 Handling
Each microservice has proper NotFoundError handling (thrown by `app.all('*', ...)`) that returns a clean 404 response, and the frontend will display appropriate content.

## DevOps Health Commands
Showcase the system's health with these 5 essential commands:
1. **Check Running Containers**:
    ```bash
    docker ps
    ```
2. **Check Service Health**:
    ```bash
    docker-compose ps
    ```
3. **View All Logs**:
    ```bash
    docker-compose logs -f
    ```
4. **View Client Logs Specifically**:
    ```bash
    docker logs -f my_own_tests-client-1
    ```
5. **Check Individual Service Logs**:
    ```bash
    docker logs my_own_tests-auth-1
    docker logs my_own_tests-products-1
    ```

## Local Dev Environment
The application is fully functional at http://localhost:8080 with hardcoded test products (for stability) and a fully working navbar!
