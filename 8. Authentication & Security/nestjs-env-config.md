# Reflection
## How does @nestjs/config help manage environment variables?
@nestjs/config simplifies managing environment variables by loading values from .env files and validating them at startup. This means if there is an issue, the app will fail immidietly rather than later during use. It also makes .env variables accessible through a central ConfigService instead of using process.env throughout the codebase, which is cleaner. Further, it supports switching between different environment configurations (like development and production) by selecting different .env files, helping keep configuration organised, consistent, and less error-prone.

## Why should secrets (e.g., API keys, database passwords) never be stored in source code?
Because codebases are often shared, version-controlled, and sometimes made public, this creates a high risk of accidental exposure of important information. If a secret is committed, it can persist in the repository history even after deletion, making it easy for attackers to access. Keeping secrets out of source code helps protect sensitive data, reduces the risk of unauthorized access, and makes it easier to rotate or update credentials without modifying the code itself.

## How can you validate environment variables before the app starts?
You can validate environment variables before the app starts by checking them during the configuration initialisation phase. In a NestJS app, this is usually done in ConfigModule.forRoot() using either a validation schema (like Joi) or custom validate functions. If validation fails, the application stops booting, ensuring configuration issues are caught early rather than causing runtime errors later.

## How can you separate configuration for different environments (e.g., local vs. production)?
You can separate configuration for different environments by using different .env files for each environment and telling @nestjs/config which one to load when the app starts. This is usually done with the envFilePath option in ConfigModule.forRoot().

# Task
I created a minimal project in env-testing that demonstrates an .env file to manage variables securely, and uses Joi to validate the variables in the configModule.

It demonstrates important concepts such as:

.gitignore ignores the real .env
.env.example documents required variables without storing secrets
src/app.module.ts uses ConfigModule.forRoot(...)
src/config/env.validation.ts validates PORT, APP_NAME, and API_KEY with Joi
src/app.service.ts reads config through ConfigService and avoids exposing the secret value

