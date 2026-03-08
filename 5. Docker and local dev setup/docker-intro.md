### How does Docker differ from a virtual machine?
A docker differs from a virtual machine in that it is much more lightweight, as it only contains what is absolutely necessary to run the application. For example, a docker won't have things like a file explorer or music player that you wouldn't need to run the application. Conversely, a virtual machine has a full operating system, which can be much more resource intensive if this operating system and additional software isn't needed to run the application.

Additionally, a docker shares the host machine's kernel, while a virtual machine has its own kernel. This means that a docker can start up much faster than a virtual machine, as it doesn't need to boot up an entire operating system - however the docker cannot run a different operating system than the host machine.

### Why is containerization useful for a backend like Focus Bear’s?
Containerization is particularly useful for a backend like Focus Bear's as it allows lots of developers working remotely to have the same developemnt environment. Focus Bear's diverse and largely remote team means that this is particularly important.

### How do containers help with dependency management?
Containers solve dependency management issues by allowing you to specify exactly which dependencies your application needs in a Dockerfile. This means that when someone else builds the docker, they will have the same dependencies installed, and won't run into issues with missing or incompatible dependencies.

### What are the potential downsides of using Docker?
Some downsides may include issues related to a Docker not being a virtual machine. This means that if your application needs to run on a different operating system than the host machine, you may run into issues due to Docker's kernal restrictions. Additionally, if your application requires heavy use of the GPU, Docker may experience slower performance.
