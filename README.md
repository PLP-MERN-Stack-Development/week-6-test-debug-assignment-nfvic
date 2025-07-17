[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19953234&assignment_repo_type=AssignmentRepo)
# MERN Stack Testing & Debugging Assignment

## Testing Strategy
This project implements a comprehensive testing strategy for a MERN stack application, covering:
- **Unit Testing:** For utility functions and isolated logic (Jest, React Testing Library)
- **Integration Testing:** For API endpoints and database operations (Jest, Supertest, mongodb-memory-server)
- **End-to-End Testing:** (Cypress scaffolded)
- **Debugging:** Logging, error handling, and test-driven development

### Tools Used
- **Jest**: Test runner for both client and server
- **Supertest**: HTTP assertions for API testing
- **mongodb-memory-server**: In-memory MongoDB for isolated backend tests
- **React Testing Library**: For React component tests
- **Cypress**: For E2E test scaffolding

## Backend Test Results
All backend integration and unit tests pass, as shown below:

![Backend Test Results](./test-results-screenshot.png)
<img width="633" height="602" alt="image" src="https://github.com/user-attachments/assets/0676ed19-65a9-4543-81eb-de0471d7de99" />

- **Test Suites:** 2 passed, 2 total
- **Tests:** 16 passed, 16 total
- **Snapshots:** 0 total

## How to Run Tests
1. Install dependencies in both `client` and `server` directories.
2. Run backend tests:
   ```
   cd server
   npm test
   ```
3. Run frontend tests:
   ```
   cd client
   npm test
   ```

## Debugging Techniques
- Used logging and error messages to identify and fix test failures
- Isolated test data for reliable, repeatable results
- Used in-memory database for fast, clean integration tests

---

**Assignment completed and all backend tests passing!** 
