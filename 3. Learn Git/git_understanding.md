# Reflection
### Why are PRs important in a team workflow?
By creating PRs, you can get feedback on your code before it is merged into the main branch. By doing this - particularly as an intern - it prevents any potential issues or bugs being introduced into working code. PRs also allow for code review, which can help improve the overall quality of the codebase and ensure that it adheres to the team's coding standards - which again, is particularly important for me as an intern who is still learning how to use source control.

### What makes a well-structured PR?
A well structured PR should include a clear description of what changes have been made, why, and how it related to any relevant issues or milestone. A PR should also be specific, and not include too many changes at once as this can make it dificult to review.

### What did you learn from reviewing an open-source PR?
I saw just how complex things can get! In the teams I've worked within previously, there were only maybe 10 of us, and only 3 or 4 people using source control. In the open-source content I viewed, there were many people contriubuting and discussing changes in the open PR, which is not something I've experienced in my small project teams before. It was also good to read through some of their more detailed PR descriptions; having worked in games development, most of my PR descriptions and those from my teammates have been quite brief and unorganised, often including jokes or casual language. It was beneficial to see how a more professional PR description is structured, and the level of detail it includes. I think this is something I can improve on in my future PRs.

### What makes a good commit message?
A good commit message is clear and concise. It should cover the key things changed or worked on in that chunk of work, but not go into granular detail; people should be able to understand the general purpose of the commit in a few sentences. It should also make reference to any issue it addresses or milestones it contributes to.

### How does a clear commit message help in team collaboration?
A clear commit message is integral to team collaboration, as it makes sure your fellow developers can understand what work you've completed, and what still needs to be done. It makes it easier for others to pick up where you left off, and address any bugs you may have introduced. A clear commit message can also make tracing back the source of an issue much easier, as the person can read through messages rather than sifting through code to find where a change was made.

### How can poor commit messages cause issues later?
Poor commit messages make it difficult for others to collabroate effectively, and they may not know what features or bugs have been introduced by a commit. Particularly if the commit caused issues, it will be harder to trace back the source of the issue and find a fix if the person doing so has to read through code to understand where it was indtroduced. An effective commit message can save a lot of time by providing this information in a readable way, making collaborative work much more efficient.

### What does git bisect do?
Git bisect is used to help track down which commit a bug was introduced. It works by having it splice the commit history and test for issues at each commit, narrowing down the range of possible commits until you find the instance where the bug was introduced.

### When would you use it in a real-world debugging situation?
You would use git bisect after realising a bug has been introduced, but when you are unsure which commit caused it.

### How does it compare to manually reviewing commit
Git bisect is invaluable for fixing bugs, as it is extremely fast compared to manually reviewing each commit. It essentialy halves the number of possibilities and provides an efficient way to test a large number of commits without spending time manually switching to each one from where the bug was first noticed.
