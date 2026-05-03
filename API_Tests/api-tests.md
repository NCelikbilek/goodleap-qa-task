# API Test Documentation

## Tools & Frameworks
- **Playwright** (API testing via `request` context)
- **TypeScript**

## How to Run

```bash
# Run API tests only
npx playwright test --config=playwright.api.config.ts

# Run with HTML report
npx playwright test --config=playwright.api.config.ts && npx playwright show-report
```

## Target API
Swagger Petstore: https://petstore.swagger.io/v2

## Endpoints Covered

| Method | Endpoint | Scenario |
|--------|----------|----------|
| POST | /pet | Create a new pet |
| GET | /pet/{id} | Retrieve pet by ID |
| PUT | /pet | Update existing pet |
| GET | /pet/findByStatus | Find pets by status |
| DELETE | /pet/{id} | Delete a pet |
| GET | /pet/{id} | Verify 404 after deletion |

## Test Scenarios

### Happy Path
- Create a pet and verify response fields (id, name, status)
- Retrieve pet by ID after creation
- Update pet name and status
- Find pets by status returns a list
- Delete pet and verify 200 response

### Negative Test
- GET deleted pet returns 404

## Design Decisions
- Used `Date.now()` for unique pet IDs to avoid test collisions
- Tests run sequentially (`fullyParallel: false`) to ensure CRUD order
- Separate config file (`playwright.api.config.ts`) to isolate API tests from UI tests
