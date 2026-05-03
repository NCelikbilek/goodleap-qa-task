import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

let petId: number;
let response: any;

Given('a pet with name {string} and status {string}', async ({}, name: string, status: string) => {
  petId = Date.now();
});

Given('the pet has been created', async ({ request }) => {
  response = await request.post('https://petstore.swagger.io/v2/pet', {
    data: {
      id: petId,
      name: 'Buddy',
      status: 'available',
      category: { id: 1, name: 'Dogs' },
      photoUrls: ['https://example.com/buddy.jpg'],
    },
  });
});

Given('the pet has been deleted', async ({ request }) => {
  await request.delete(`https://petstore.swagger.io/v2/pet/${petId}`);
});

When('the user sends a POST request to create the pet', async ({ request }) => {
  response = await request.post('https://petstore.swagger.io/v2/pet', {
    data: {
      id: petId,
      name: 'Buddy',
      status: 'available',
      category: { id: 1, name: 'Dogs' },
      photoUrls: ['https://example.com/buddy.jpg'],
    },
  });
});

When('the user sends a GET request to retrieve the pet', async ({ request }) => {
  response = await request.get(`https://petstore.swagger.io/v2/pet/${petId}`);
});

When('the user updates the pet name to {string} and status to {string}', async ({ request }, name: string, status: string) => {
  response = await request.put('https://petstore.swagger.io/v2/pet', {
    data: {
      id: petId,
      name,
      status,
      category: { id: 1, name: 'Dogs' },
      photoUrls: ['https://example.com/buddy.jpg'],
    },
  });
});

When('the user searches for pets with status {string}', async ({ request }, status: string) => {
  response = await request.get('https://petstore.swagger.io/v2/pet/findByStatus', {
    params: { status },
  });
});

When('the user sends a DELETE request for the pet', async ({ request }) => {
  response = await request.delete(`https://petstore.swagger.io/v2/pet/${petId}`);
});

Then('the response status should be {int}', async ({}, status: number) => {
  expect(response.status()).toBe(status);
});

Then('the response should contain name {string} and status {string}', async ({}, name: string, status: string) => {
  const body = await response.json();
  expect(body.name).toBe(name);
  expect(body.status).toBe(status);
});

Then('the response should return a list of pets', async ({}) => {
  const body = await response.json();
  expect(Array.isArray(body)).toBeTruthy();
  expect(body.length).toBeGreaterThan(0);
});
