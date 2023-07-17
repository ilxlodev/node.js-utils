## Git Commit Message Convention

> This is adapted from [Angular's commit convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular).

#### Why is this needed?
Conventional commit messages help keep the work environment clean and enable repository collaborators to understand what each commit and/or pull request does, plus release notes can be generated.

#### Standard Commit Message Format
Below, you can see the syntax we want in this repository:

```
<type>([scope]): <description>

[body]

[footer]

[BREAKING CHANGE: <description>]
```

``<>`` indicates required fields ``[]`` indicates optional fields

**Full example**: chore(README): Improve the introduction of the project

**TIP**: For the commit description, you can try to complete this sentence: **If I apply this commit, then this commit...**.
- ...add a new feature.
- ...fix a startup script issue.
- ...improve project information.
- ...improve the aesthetics of the code.

**WARNING**: Don't use dots in the commit message and don't exceed 50 characters (if possible).

### Build
Changes made to the build system or external dependencies. In short, any file involved in deploy and build.

**Examples**: Dependencies, package file, etc.

### CI
Changes to CI configuration files and scripts.

**Examples**: Travis, Circle, etc.

### Chore
Changes that don't modify functional code. Like build processes, auxiliary tools, libraries, etc.

**Examples**: README, repository files, etc.

### Docs
Changes to the documention of the project.

**Examples**: Documentation, changelog, etc.

### Feat
New features and/or functionality or improvements to existing features.

**Examples**: New features, improvements, etc.

### Fix
Bug fixes.

**Examples**: Bug fixes, etc.

### Perf
Changes that improve the performance of the project.

**Examples**: Performance, etc.

### Refactor
Changes that change the way the code interacts. Like reworks of parts of the project or change in the way certain code interacts.

**Examples**: Reworks, refactorings, etc.

### Revert
Reverts a previous commit or a previous pull request.

**Examples**: Reverts, etc.

### Style
Changes that don't affect the meaning of the code. Like formatting, white space, etc.

**Examples**: Formatting, etc.

### Test
Changes to the test suite.

**Examples**: Tests, etc.