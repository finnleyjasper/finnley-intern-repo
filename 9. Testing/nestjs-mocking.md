# Reflection
## Why is mocking important in unit tests?
Mocking is important in unit tests because it allows you to isolate the specific piece of code you want to test from its dependencies, ensuring that tests are focused, fast, and predictable.

## How do you mock a NestJS provider (e.g., a service in a controller test)?
In NestJS, you can mock a provider (like a service used by a controller) by replacing it with a fake object in the test module using useValue or useFactory. This allows you to control its behavior and outputs without calling the real service.

## What are the benefits of mocking the database instead of using a real one?
Mocking the database makes tests faster because there’s no need to perform slow read/write operations on an actual database. It also makes tests more reliable, since they aren’t affected by network issues, database state, etc., and it allows you to simulate edge cases and error conditions easily. Additionally, it simplifies test setup and teardown, removing the need to seed, reset, or clean up a real database, which reduces complexity and maintenance overhead.

## How do you decide what to mock vs. what to test directly?
Mock anything that is external to the logic you are testing or could make the test slow, flaky, or hard to reproduce. Test directly the code that belongs to the unit.

# Tasks
## Research how to mock dependencies using jest.mock() and NestJS’s @nestjs/testing utilities
This has been done across the milestone, as seen in my nestjs-auth0-api project.

## Mock a service inside a controller test
I added a test to app.controller.spec.ts that injects a mocked service into a controller and assets that the response is as expected, and that the service was called once.

## Mock a database repository (TypeORM Repository) in a service test
I mocked a database repository in my nest-auth0-api project, with the MessageEntity object being the data that's pulled from the "database". In messages.service.spec.ts i added a service unit test that mocks the repository with jest.fn() methods and injects it using useValue. I then test methods find(), fineOneBy(), save() and the null/not found case.

Below is an updated screenshot of testing output:
![Output](test6.png)

## Explore when to use jest.spyOn() vs jest.fn() in mocks
jest.fn() and jest.spyOn() are both used for mocking in Jest, but they serve different purposes. jest.fn() is used to create a completely new mock function from scratch, which is useful when you are injecting a fake dependency or replacing a function entirely in a unit test. In contrast, jest.spyOn() is used to observe or temporarily override an existing method on an object or class, allowing you to track calls, arguments, and optionally change the return value while keeping the original implementation intact. Essentially, jest.fn() is ideal for standalone mocks or injected services, whereas jest.spyOn() is best for monitoring or partially mocking existing methods without fully replacing them.
