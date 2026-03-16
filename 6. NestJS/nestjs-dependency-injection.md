# Reflection
## How does dependency injection improve maintainability?
Dependency injection improves maintainability by providing modular pieces of logic that can be used across the codebase. Dependency injection also keeps logic more loosely coupled, meaning it is easier to reuse, thus reducing duplication and improving maintainability.

## What is the purpose of the @Injectable() decorator?
The @Injectable() decorator signifies to NestJS the following class is a provider that can be used in the dependency injection system. This way, other classes such as controllers can recieve it in their contructor and use its funcitonality.

## What are the different types of provider scopes, and when would you use each?
The most common provider scope is SINGLETON, meaning that provider will only be instantiated once in the application, then reused. This is the most common scope, as most providers only need to have one instance (ie. database service), and doing so increases performance.

REQUEST creates a new instance each time a request is recieved. This is more usful if you need reqest-specific information, such as for logging.

TRANSIENT creates a new instance each time the provider is injected. This creates the most number of instances compared to other scopes. It can be useful for stateless utilities, or for objects that must never share state, but is signifigantly more expensive than singleton.

## How does NestJS automatically resolve dependencies?
NestJS automatically resolves dependencies through its dependency injection model. When the application starts, NestJS scans the modules in the project and registers all controllers and providers. Using decorators such as @Injectable(), @Controller(), and @Module(), the framework identifies which classes should be managed by the DI system, and can find these as needed. When a @Controller() calls a required dependency, NestJS looks for a matching provider (@Injectable()) that has been registered in the module’s providers array and provides it to the Controller. In this way, NestJS automatically resolves dependencies without developers needing to manually pass Injectables around a project.
