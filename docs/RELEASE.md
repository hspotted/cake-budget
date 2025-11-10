# Release Workflow

1. Create a PR from `development` to `production`.
2. Ensure CI is green (Biome check, unit tests, e2e tests).
3. Follow Conventional Commits. Version will be derived from commit history.
4. Update `CHANGELOG.md` (automated by `standard-version`).
5. Merge the PR using squash or merge as per team policy.

## Commands
- Bump version and update changelog:
  ```
  pnpm release
  ```
- This will:
  - Analyze commits via conventional commits
  - Bump version (patch/minor/major)
  - Update `CHANGELOG.md`
  - Tag the release

## Branch Protection
- No direct commits to `production` (PR only).
- All commits must target `development`.
