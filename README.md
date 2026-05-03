# Goodleap Playwright Automation

This project contains automated tests for the Swag Labs e-commerce app and the Petstore API.

I built it using Playwright with TypeScript, following BDD principles with Gherkin feature files and a Page Object Model structure. The goal was to cover the most critical user flows while keeping the code clean and easy to maintain.

---

## Project Structure

```
goodleap-playwright/
├── UI_Tests/
│   ├── features/       # Gherkin scenarios (login, cart, checkout, logout)
│   ├── pages/          # Page Object classes
│   └── steps/          # Step definitions
├── API_Tests/
│   ├── features/       # API scenarios (pet endpoints)
│   └── steps/          # API step definitions
├── playwright.config.ts
└── package.json
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

**UI — Swag Labs**
- Login: valid user, locked out user, performance glitch user
- Cart: add item, remove item, cart persists after navigation
- Checkout: complete flow, empty form validation
- Logout: successful logout, can't access inventory after logout

**API — Petstore /pet endpoints**
- Create, retrieve, update, delete a pet
- Find pets by status
- Confirm 404 after deletion

---

## Tech Stack

- Playwright + TypeScript
- playwright-bdd (Gherkin/BDD)
- Page Object Model
- Cross-browser: Chromium, Firefox, Webkit

---
Developed by Nazli Celikbilek
