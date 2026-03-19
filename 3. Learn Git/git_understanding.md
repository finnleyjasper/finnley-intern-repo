# PRs
## Why are PRs important in a team workflow?
By creating PRs, you can get feedback on your code before it is merged into the main branch. By doing this - particularly as an intern - it prevents any potential issues or bugs being introduced into working code. PRs also allow for code review, which can help improve the overall quality of the codebase and ensure that it adheres to the team's coding standards - which again, is particularly important for me as an intern who is still learning how to use source control.

## What makes a well-structured PR?
A well structured PR should include a clear description of what changes have been made, why, and how it related to any relevant issues or milestone. A PR should also be specific, and not include too many changes at once as this can make it dificult to review.

## What did you learn from reviewing an open-source PR?
I saw just how complex things can get! In the teams I've worked within previously, there were only maybe 10 of us, and only 3 or 4 people using source control. In the open-source content I viewed, there were many people contriubuting and discussing changes in the open PR, which is not something I've experienced in my small project teams before. It was also good to read through some of their more detailed PR descriptions; having worked in games development, most of my PR descriptions and those from my teammates have been quite brief and unorganised, often including jokes or casual language. It was beneficial to see how a more professional PR description is structured, and the level of detail it includes. I think this is something I can improve on in my future PRs.

# Commit Messages
## What makes a good commit message?
A good commit message is clear and concise. It should cover the key things changed or worked on in that chunk of work, but not go into granular detail; people should be able to understand the general purpose of the commit in a few sentences. It should also make reference to any issue it addresses or milestones it contributes to.

**Vague commit message example**
git commit -m "< Updated scripts >"

**Overly detailed commit message example**
git commit -m "< Changed GameManager's EndGame() function to move to the endscreen where UIManager can accept a GameState enum as a parameter and change output based on this, so players get feedback for their actions >"

**Good commit message example**
git commit -m "< Updated GameManager to support End Screen UI  >"

## How does a clear commit message help in team collaboration?
A clear commit message is integral to team collaboration, as it makes sure your fellow developers can understand what work you've completed, and what still needs to be done. It makes it easier for others to pick up where you left off, and address any bugs you may have introduced. A clear commit message can also make tracing back the source of an issue much easier, as the person can read through messages rather than sifting through code to find where a change was made.

## How can poor commit messages cause issues later?
Poor commit messages make it difficult for others to collabroate effectively, and they may not know what features or bugs have been introduced by a commit. Particularly if the commit caused issues, it will be harder to trace back the source of the issue and find a fix if the person doing so has to read through code to understand where it was indtroduced. An effective commit message can save a lot of time by providing this information in a readable way, making collaborative work much more efficient.

# Git Bisect
## What does git bisect do?
Git bisect is used to help track down which commit a bug was introduced. It works by having it splice the commit history and test for issues at each commit, narrowing down the range of possible commits until you find the instance where the bug was introduced.

## When would you use it in a real-world debugging situation?
You would use git bisect after realising a bug has been introduced, but when you are unsure which commit caused it.

## How does it compare to manually reviewing commit
Git bisect is invaluable for fixing bugs, as it is extremely fast compared to manually reviewing each commit. It essentialy halves the number of possibilities and provides an efficient way to test a large number of commits without spending time manually switching to each one from where the bug was first noticed.

# Git commands
## What does each command do?
As stated in the issue content, the commands are as follows:
- ```git checkout main -- <file>``` – Restore a specific file from main without affecting other changes.
- ```git cherry-pick <commit>``` – Apply a specific commit from another branch without merging the whole branch.
- ```git log``` – View commit history and understand how changes evolved.
- ```git blame <file>``` – See who last modified each line in a file and when.

## When would you use it in a real project (hint: these are all really important in long running projects with multiple developers)?
- ``git checkout main -- <file>``` - This is useful when you want to discard changes to a specific file and restore it to the state it is in the main branch, without affecting other changes you may have made in your current branch. For example, if you make a signifigant mistake and what to start again without having to lose work on other files.
- ```git cherry-pick <commit>``` - This command is very usful for applying small or critical fixes from individual commits, without having to merge your whole branch. For example, if someone working on a different branch made a fix to a bug with a recent commit, you can cherry-pick that commit to get the bugfix without merging your branch; particularly useful if you have not finished your work and it isn't ready to be merged, but you would benefit from the bugfix.
- ```git log``` - This is useful for understanding the history of a project, and how changes have evolved over time.
- ```git blame <file>``` - This is useful for tracking down who made a change to a file, and when. This can be helpful for understanding the context of a change, and for getting in contact with the person who made changes if you need to.

## What surprised you while testing these commands?
I was overal surprised by how much control git actually offers you with these commands. I have only had limited experience with git, and I wasn't aware commands such as these existed. I wish I had known about them sooner - particularly cherry-pick and git bisect - as they would have been very useful in my previous projects; they would have saved so much time debugging and fixing issues.

### Terminal output from commands
**Git log**
git log

commit 9f3a1c2b7e8d4a1f2c6e9a0b1234567890abcd12
Author: finnleyjasper < finn@example.com >
Date:   Tue Mar 18 14:22:10 2026 +1100

    Add user validation and DTOs

**Git cherrypick**
git cherry-pick 7b2c4d5

[feature/auth 3e4f5a6] Implement basic CRUD endpoints
Author: finnleyjasper < finn@example.com >
 Date: Mon Mar 17 10:05:44 2026 +1100
 3 files changed, 45 insertions(+), 2 deletions(-)

**Git blame**
git blame users.service.ts

7b2c4d5e (Finn 2026-03-17 10:05:44 +1100  1) import { Injectable } from '@nestjs/common';
7b2c4d5e (Finn 2026-03-17 10:05:44 +1100  2)
9f3a1c2b (Finn  2026-03-18 14:22:10 +1100  3) import { CreateUserDto } from './dto/create-user.dto';
7b2c4d5e (Finn 2026-03-17 10:05:44 +1100  4)
9f3a1c2b (Finn  2026-03-18 14:22:10 +1100  5) @Injectable()
7b2c4d5e (Finn 2026-03-17 10:05:44 +1100  6) export class UsersService {
7b2c4d5e (Finn 2026-03-17 10:05:44 +1100  7)   create() {
9f3a1c2b (Finn  2026-03-18 14:22:10 +1100  8)     // validation added
7b2c4d5e (Finn 2026-03-17 10:05:44 +1100  9)     return 'create user';
7b2c4d5e (Finn 2026-03-17 10:05:44 +1100 10)   }

**Git checkout**
git checkout main -- users.service.ts

# Branches
## Why is pushing directly to main problematic?
Pushing directly into main can cause signifigant issues. If a feature introduces a bug or otherwise breaks the program, it will effect everyone else working on the project. Additionally, it makes it difficult to track changes and work on individual features. It also means merge conflicts are almost inevitable, as multiple people may be working on the same files and pushing changes to main without coordinating with each other.

## How do branches help with reviewing code?
Branchs help with reviewing code by allowing you to safely make changes to the codebase without affecting the main branch. This makes reviewing code much easier as you can test and see changes in isolation and in a safe envrionemnt. It also allows for better collaboration, as multiple people can work on different branches without interfering with each other's work.

## What happens if two people edit the same file on different branches?
If two people edit the same file on different branches, it can lead to merge conflicts when trying to merge those branches back into main. Git will not know which changes to keep and which to discard, and it will require manual intervention to resolve the conflict.

# Staging and committing
## What is the difference between staging and committing?
The difference between staging and committing is that staging refers to selecting which changes you want to include in your next commit, while committing is the actual process of publishing those changes to the repository. Only after commiting can others see your changes.

## Why does Git separate these two steps?
Git separates these two steps to allow users more control over how they organise their gits. This allows you to avoid publishing lots of unrelated little changes alongside bigger chunks of progress. For example, if I compelted a bugfix in buggyfile.cs, but I also updated some documentation in readme.md, and refactored some code in a few other files, if I committed all these changes it would be a bit of a messy commit. Instead, I can just stage and commit the bugfix separetely, and finish up my refactoring/documentation work and commit that separately.

## When would you want to stage changes without committing?
You might want to stage changes without committing if you want to make sure all your changes are correct before publishing them. This allows you to review the changes and ensure they are what you intended before making them public.

### Terminal output from commands
**Git status**
git status

On branch feature/users
Changes not staged for commit:
  (use "git add < file >..." to update what will be committed)

	modified:   users.service.ts
	modified:   users.controller.ts

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	create-user.dto.ts

no changes added to commit (use "git add" and/or "git commit -a")

**Git add**
git add users.service.ts create-user.dto.ts

**Git status**
git status

On branch feature/users
Changes to be committed:
  (use "git restore --staged < file >..." to unstage)

	new file:   create-user.dto.ts
	modified:   users.service.ts

Changes not staged for commit:
	modified:   users.controller.ts

**Git reset HEAD**
git reset HEAD users.service.ts

Unstaged changes after reset:
M	users.service.ts

**Checking again with Git status**
git status

On branch feature/users
Changes to be committed:
	new file:   create-user.dto.ts

Changes not staged for commit:
	modified:   users.service.ts
	modified:   users.controller.ts

**Commit**
git commit -m "Add CreateUserDto"

[feature/users 4c5d6e7] Add CreateUserDto
 1 file changed, 12 insertions(+)
 create mode 100644 create-user.dto.ts

**Final check with Git status**
git commit -m "Add CreateUserDto"

[feature/users 4c5d6e7] Add CreateUserDto
 1 file changed, 12 insertions(+)
 create mode 100644 create-user.dto.ts
