# Reflection
## What are the most common security vulnerabilities in a NestJS backend?
The most common security risks in NestJS backends include injection attacks, broken authentication/authorization, improper input validation, sensitive data exposure, insecure dependencies, CORS misconfiguration, DoS attacks, and leaking internal error information. Using NestJS built-in features like guards, pipes, exception filters, and proper configuration helps mitigate most of these risks.

## How does @fastify/helmet improve application security?
@fastify/helmet improves application security by automatically adding a set of HTTP headers that protect a Fastify-based backend from common web vulnerabilities. It helps prevent attacks such as cross-site scripting (XSS), clickjacking, protocol downgrade attacks and more. It does this by setting headers like Content-Security-Policy or X-Frame-Options. By enforcing HTTPS, controlling referrer information, and restricting how browsers interpret content, @fastify/helmet strengthens the security of the application.

## Why is rate limiting important for preventing abuse?
Rate limiting is important for preventing abuse because it controls how many requests a client can make to your API in a given time period, protecting your server from being overwhelmed. Without rate limiting, malicious users or automated scripts could perform denial-of-service attacks, brute-force login attempts, or spam endpoints, potentially causing downtime or degrading performance for legitimate users. By enforcing limits, you can reduce this risk.

## How can sensitive configuration values be protected in a production environment?
Sensitive configuration values (like API keys, passwords, or JWT secrets) should never be hard-coded or stored directly in source code. In a production environment, they can be protected by using environment variables stored outside the codebase, or by using a secret management service. Access to these secrets should be restricted and only the application or authorized personnel should be able to read them. Furthermore, .env files used in development should be excluded from version control with .gitignore to prevent accidental leaks.

# Tasks
## Research
Common security risks in NestJS are as follows:
- SQL/NoSQL Injection: Occurs when untrusted input is passed directly to database queries.

- Cross-Site Scripting (XSS): While mostly a frontend issue, APIs can inadvertently return unsafe HTML or scripts if they serve user-generated content.

- Broken Authentication or Authorization: Weak JWT secret, improper token validation, or missing role-based access control (RBAC) can allow unauthorized access.

- Sensitive Data Exposure: Storing secrets in source code or returning sensitive information in responses.

- Improper Input Validation: Not validating request payloads can allow invalid or malicious data to reach services or databases.

- Insecure Dependencies: Using outdated or vulnerable npm packages.

- CSRF / CORS Misconfiguration: Allowing all origins or failing to configure CORS properly can let attackers make requests from malicious sites.

- Denial of Service (DoS): Accepting large or too many requests can overload the server.

- Improper Error Handling: Returning stack traces or detailed internal errors can expose sensitive information.

### How to securely handle API keys and envrionment variables?
You should store API keys and sensitive config in environment variables or secret managers, and keep .env files out of your repo. Access to this information should be limited, and never exposed in logs or responses (eg. exception error messages). This keeps an application secure while allowing easy configuration across environments.

## @fastify/helmet
In my logging-project application, I implemented @fastify/helmet to help secure the HTTP headers, and implemented request rate limiting with @fastifyrate-limit. This helps to prevent attacks on my application.

The security setup lives in app.setup.ts, where helmet is registered globally for secure HTTP headers, and rate-limit is also registered globally with a default limit of 5 requests per 1 minute.
