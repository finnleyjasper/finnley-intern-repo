# Reflection
## How does Auth0 store and manage user roles?
RBAC is a system where access to resources is controlled based on user roles. In Auth0, you define roles, assign permissions to those roles, and then assign roles to users. Auth0 includes the roles/permissions in the user’s JWT token, which the application reads to enforce authorisation decisions.

## What is the purpose of a guard in NestJS?
A guard in NestJS is used to determine whether a request can access a route. It implements the CanActivate interface and can enforce authorization rules, such as role or permission checks, before the request reaches the controller. Guards help centralize access control logic and keep controllers clean.

## How would you restrict access to an API endpoint based on user roles?
To restrict access to an API endpoint based on user roles in NestJS, you can use a RolesGuard along with a custom @Roles() decorator. The guard reads the user’s roles (from the request or JWT) and compares them to the roles required by the route. If the user lacks the necessary role, access is denied.

## What are the security risks of improper authorization, and how can they be mitigated?
Improper authorization can lead to unauthorized data access, privilege escalation, resource tampering, and regulatory violations. To mitigate these risks, you can implement centralised role-based access control and validate permissions on every request. You should include roles/permissions in server-verified tokens, enforce least privilege, and log sensitive actions for auditing.

# Tasks
## Explore how to retrieve user roles from Auth0’s access token
This is done by adding an action in Auth0 that executes after a sign-in that injects "roles" into the information carried by the token, which can be used in an application to check for roles a user has.

## Implement a NestJS guard to enforce role-based authorization
I have implemented a NestJS guard to enforce role-based authorization in my nestjs-auth0-api project, in authorization.guards.ts. This guard checks that the user has the "admin" role, and will only allow them access to the /protected endpoint if they have "admin".

## Protect an API endpoint based on user roles (e.g., allow only admins to access it)
Only those with the "admin" role can access the /protected endpoint.
