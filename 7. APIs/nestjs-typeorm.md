# Reflection
## How does @nestjs/typeorm simplify database interactions?
Using TypeORM simplifies database interactions by removing the need to write SQL queries directly in code. Instead, TypeORM handles the SQL under the hood while utilising NestJS's dependency injection system through defining entities and injecting respositories into services.

## What is the difference between an entity and a repository in TypeORM?
An entity refers to the shape of the data - the table and how its rows and collums exist. A respository is like the middleman between the entity and access to it; A repository provides ways to access and interact with the data.

## How does TypeORM handle migrations in a NestJS project?
TypeORM handles migrations by generating and running version-controlled files that describe changes to the database schema. When entities are updated, migrations can be created to reflect those changes and applied using the CLI, ensuring safe and consistent database updates across environments.

## What are the advantages of using PostgreSQL over other databases in a NestJS app?
PostgreSQL offers strong reliability, ACID-compliant transactions, advanced data types, relational integrity, and extensibility, making it a robust choice for NestJS applications that need structured and complex data management.

### Integration demonstration
I updated my news bulliten application to store story information in a Postgres database rather in a local array. I ran a postgres db and my nest application in docker, and confirmed the connection and integration worked correctly by using the web interface of the application to delete a story record in the database, and viewing the database records through the CLI - the DELETE endpoint result was reflected in the output.

**Prior to DELETE endpoint being hit**
[Database content through CLI](table1.png)

**Web interface used to execute DELETE endpoint**
[Database endpoint](delete1.png)

**After DELETE endpoint hit**
[Database content through CLI](table2.png)

