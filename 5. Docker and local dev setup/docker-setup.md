# Reflection

## What is the difference between docker run and docker-compose up?

docker run asks Docker to start up a single container, while docker-compose up asks Docker Compose to start all containers specified in compose.yaml



## How does Docker Compose help when working with multiple services?

Docker Compose helps to manage multiple containers running concurrently that rely on eachother to opnerate - such as a Postgre database and a webserver. Docker compose makes it easier to work with multiple services by allowing you to start and stop multiple contains with single commands.

## What commands can you use to check logs from a running container?

- docker logs <container_name_or_id> can be used to check logs on a specified running container
- docker logs -f <container_name_or_id> can be used to check logs in realtime for a specified running container
- docker compose logs can be used to view logs on running containers in docker composetttt

## What happens when you restart a container? Does data persist?

If you run a container and create data in it, it will persist after you stop the container. However, if you delete the container and create a new one from the same image, the data will be lost. Storing important data in Volumes is reccommended to ensure it is preserved.
