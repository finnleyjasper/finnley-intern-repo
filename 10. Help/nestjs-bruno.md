# Reflection
## How does Bruno help with API testing compared to Postman or cURL?
Bruno helps with API testing by combining the simplicity of command-line tools like cURL with some of the structure of GUI tools like Postman, while keeping everything local and file-based.

Unlike Postman, which stores collections in the cloud or a proprietary format, Bruno saves API requests as plain text files in your project. This makes them easy to version control with Git, review in pull requests, and share across a team without relying on external services. Compared to cURL, Bruno is more user-friendly because it provides a clean interface and organized request collections, so you don’t have to manually write long command-line requests.

Bruno also supports features like environment variables, scripting, and request chaining, similar to Postman, but without requiring an account or syncing data online. This makes it especially useful for developers who want lightweight, secure, and developer-friendly API testing that integrates well with their existing workflow.

## How do you send an authenticated request in Bruno?
To send an authenticated request in Bruno, you attach credentials (usually a Bearer token) via the Headers or Auth tab, allowing the API to verify your identity before processing the request.

## What are the advantages of organizing API requests in collections?
Organizing API requests in collections provides several advantages by improving structure, efficiency, and collaboration. Collections group related endpoints (e.g., users, authentication, orders) together, making it easier to navigate and manage large APIs. They allow you to reuse common configurations like headers, authentication tokens, and environment variables across multiple requests, reducing duplication and errors. Collections also support workflows such as chaining requests and testing sequences, which is useful for debugging and development. Additionally, when stored in tools like Bruno or Postman, they can be shared and version-controlled, helping teams collaborate more effectively and maintain consistency across environments.

## How would you structure a Bruno collection for a NestJS backend project?
To structure a Bruno collection for a NestJS backend, you should mirror how your API is organised by grouping requests by feature/module and keeping authentication and environments reusable.

# Tasks
## A simple public NestJS API endpoint

## Passing headers and authentication tokens in Bruno
