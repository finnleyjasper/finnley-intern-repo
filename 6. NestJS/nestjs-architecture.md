# Reflection
## What is the purpose of a module in NestJS?
A module in NestJS should achieve a specific functionality. Modules specific which and how controllers and services are used, and seperates features into logical units. Some common examples might be ProductsModule, to handle requests related to products - such as view, search, delete, etc. - or an OrdersModule to handle placing an order, updating an order, searching for an order, etc.

## How does a controller differ from a provider?
A controller handles incoming requests and calls on a service or provider to perform some logic. A provider is usually marked with @Injectable() and uses NestJS's dependency injection. When NestJS creates a controller, it automatically injects any required providers into the controller’s constructor so they can be used to handle requests.

## Why is dependency injection useful in NestJS?
Dependency injection is useful in NestJS as it cuts out the middle man - you don't need to create the injectable object, then pass it to the service/controller. NestJS's dependency injection will do this for you automatically, which reduces potential debugging and leaves the object and user loosely coupled.

## How does NestJS ensure modularity and separation of concerns?
By seperating functionality into modules, NestJS ensures modularity and separation of concerns. Each module will take care of its own task (such as one for Cofiguration, one for Authorisation, etc.) and further demonstrates separation of concerns by dividing responsibilities into Service, Provider and Controller systems.

### Sample application with a controller and service
As per my previous task, I created a small application in /test-app that demonstrates use of a simple module using a controller and service

![Updated webpage output](updated-proj.png)
