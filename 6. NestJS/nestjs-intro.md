# Reflection
## What are the key differences between NestJS and Express.js?
NestJS and Express.js are both frameworks that use NodeJS to build server-side applications. However, they have different approaches and uses. Express.js is unopinionated and minimal, which leaves most of the decision making up to the developer. This means it is lightweight and flexible, and great for smaller projects or rapid production - but not so suitible for large-scale development. NestJS on the other hand is opinionated and provides structured architecture with concepts such as modules, controllers and services. NestJS's stronger and more rigid approach is achieved by using dependency injection and TypeScript decoraters, which help make the framework appeal to bigger projects where maintainability and scalability are important; particularly to large teams where consistent structure is integral to effective development.

## Why does NestJS use decorators extensively?
NestJS uses decorators extensively, as they help reduce the amount configuration code needed and improves reabaility and maintainability. By using decorators, NestJS ensures the code associated with the request (such as @Get()) is kept close to the logic that handles it, making code more readable. Decorators also support NestJS's focus on modularity and depenedency injection by clearly declaring what each function does - whether it is an @Injectable(), @Controller(), @Module(), etc.

## How does NestJS handle dependency injection?
NestJS handles dependency injection automatically, meaning injectables are automatically created when needed within the contructor of the controller. This improves modularity and maintainability, and reduces the time spent writing code.

## What benefits does modular architecture provide in a large-scale app?
In a large-scale app, NestJS's modular architecture benefits development by being clearly organised with features being seperated and defined in a readable way. This ensures maintainability and creates codebases that are easily maintained by developers, even if a project is big. It also decreases the reliance on code duplication, as NestJS's high modularity means similar logic can be referenced across the program, rather than being duplicated.
