# Git Essentials

- Create a new directory/folder named git-test

```bash
git init # initalize the git repo
```

```bash
git add index.html # add index to git
```

```bash
git commit -m 'first commit' # commit the changes
```

```bash
git log --online # see a breif of commits
```

- Create a directory and then add it to git 

```bash
git add templates
git status
```

- Make changes to index.html and test.html and commit the changes

```bash
touch templates/test.html
git add .
git status
git commit -m 'third commit'
```

- To revert back a specific verion of a file use

```bash
# git checkout <commit> <file>
git checkout f5e5a92 templates/test.html # reverst back to commit version of the file
git reset HEAD templates/test.html # to unstage the changes of the specific commit of the file
git checkout -- templates/test.html # restorest the file to the last commit
```

- To clone a repo use

```bash
git clone https://rabira-hierpa@github.com/coursear-learning;
```
