# Goodleap QA Automation

This project contains automated UI and API tests built with Playwright and TypeScript.

For UI testing, I tested the Swag Labs e-commerce application (https://www.saucedemo.com) covering the most critical user flows. For API testing, I tested the Petstore Pet endpoints (https://petstore.swagger.io/v2).

I followed BDD principles with Gherkin feature files and a Page Object Model structure to keep the code clean, readable, and easy to maintain.

---

## Project Structure

```
goodleap-qa-task/
├── API_Tests/
│   ├── features/           # API Gherkin scenarios
│   ├── steps/              # API step definitions
│   └── api-tests.md        # API test documentation
├── UI_Tests/
│   ├── features/           # UI Gherkin scenarios (login, cart, checkout, logout)
│   ├── pages/              # Page Object classes
│   └── steps/              # Step definitions
├── .gitignore
├── flows.txt               # Test scenarios overview
├── package.json
├── playwright.config.ts
└── README.md
```

---

## Getting Started

```bash
npm install
npx playwright install
```

---

## Running the Tests

```bash
# Run everything
npm test

# UI tests only
npm run test:ui

# API tests only
npm run test:api

# Single browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# Open HTML report
npm run report
```

---

## What's Covered

**UI — Swag Labs (https://www.saucedemo.com)**
- Login: valid user, locked out user, performance glitch user
- Cart: add item, remove item, cart persists after navigation
- Checkout: complete flow, empty form validation
- Logout: successful logout, can't access inventory after logout

**API — Petstore (https://petstore.swagger.io/v2)**
- Create, retrieve, update, delete a pet
- Find pets by status
- Confirm 404 after deletion

---

## CI/CD

> **Note:** CI/CD integration was not part of the original requirements. I added it on my own initiative to demonstrate a complete automation workflow.

This project includes a Jenkins pipeline that:
- Pulls the latest code from GitHub
- Installs dependencies and Playwright browsers
- Runs UI and API tests automatically
- Sends an email report with the build result

The pipeline is configured to run daily at 9:00 AM.

---

## Tech Stack

- Playwright + TypeScript
- playwright-bdd (Gherkin/BDD)
- Page Object Model
- Cross-browser: Chromium, Firefox, Webkit
- Jenkins (CI/CD)

---

Developed by Nazli Celikbilek
