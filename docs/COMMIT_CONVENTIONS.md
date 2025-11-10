# Commit Conventions

All commits MUST follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

```
<type>(<optional scope>): <short English summary>

<optional body – wrap at 100 columns>
<optional footer>
```

## Allowed Types
- feat: new feature
- fix: bug fix
- docs: documentation only changes
- style: formatting (no code logic)
- refactor: code change that neither fixes a bug nor adds a feature
- perf: performance improvement
- test: adding or refactoring tests
- build: build system or external dependencies changes
- ci: CI configuration changes
- chore: other changes that don't modify src or test files
- revert: reverts a previous commit

## Rules
- Use English.
- Subject line <= 72 chars, no trailing period.
- Body wrapped at ~100 chars if present.
- Use imperative mood (Add feature, not Added feature).
- If BREAKING CHANGE: add footer `BREAKING CHANGE:` describing impact; will result in major bump.

## Version Bump Logic
- feat -> minor (unless BREAKING CHANGE -> major)
- fix -> patch
- perf, refactor may be minor/patch depending on impact.
- docs, style, test, chore -> patch (or no release if using selective strategy)

## Examples
```
feat(auth): add JWT refresh token rotation
fix(ui): correct button alignment in toolbar
docs(readme): update local development instructions
refactor(api): extract pagination helper
perf(build): enable SWC minification
BREAKING CHANGE: removed legacy /v1 endpoints
```
