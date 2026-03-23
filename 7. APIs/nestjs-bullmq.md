# Reflection
## Why is BullMQ used instead of handling tasks directly in API requests?
By using BullMQ, slow or unstable requests (such as sending an email) can be completed asynchronously, thus allowing the app to continue repsonding to user input. If tasks were diectly handled in API requests, the process would instead get hung up until these had finished running, which could be time-consuming or app-breaking if a task failed.

## How does Redis help manage job queues in BullMQ?
Redis helps manage job queues in BullMQ by acting as the underlying data store for jobs and their states. It stores job data, tracks their lifecycle (waiting, active, completed, failed) and coordinates multiple workers to ensure jobs are processed reliably and only once.

## What happens if a job fails? How can failed jobs be retried?
What happens if a job fails depends on how the configuration has been set up. Most commonly, if a job fails Redis stores this information and updates the job's status as failed. Then, BullMQ will usually retry the task, with conditions such as a limit on the number of reattempts or a "cooldown" between retries usually being implemented. Alternatively, jobs can also be retried manually.

## How does Focus Bear use BullMQ for background tasks?
Focus Bear uses BullMQ for background tasks such as sending notifications, processing analytics, syncing data, to ensure that while these critcal tasks are completed, users can still use the app and request new tasks to be processed.

# BullMQ and Redis demo
To demo BullMQ and Redis in my own project, I registered a queue called demo-queue and added background-task.service.ts to enqueue a simple background job, which just generates a message. demo-queue.processor.ts then processes that job and logs when it starts and finishes. Then I added an endpoint to trigger adding the job to the queue at POST /jobs/demo.

I also needed to add a Redis container to my docker-compose.yml file.

Below is the JSON response and logs when using the above end point to trigger the job and execute it through the queue.

[Job output](job.png)
