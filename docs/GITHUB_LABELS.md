# GitHub Labels Configuration

## Labels para Issues

### Type
- `bug` - Something isn't working (color: #d73a49)
- `enhancement` - New feature or request (color: #a2eeef)
- `documentation` - Improvements or additions to documentation (color: #0075ca)
- `question` - Further information is requested (color: #d876e3)
- `help wanted` - Extra attention is needed (color: #008672)
- `good first issue` - Good for newcomers (color: #7057ff)

### Priority
- `priority: low` - Low priority (color: #d4edda)
- `priority: medium` - Medium priority (color: #fff3cd)
- `priority: high` - High priority (color: #f8d7da)
- `priority: critical` - Critical priority (color: #721c24)

### Status
- `status: triage` - Needs investigation (color: #fbca04)
- `status: in progress` - Currently being worked on (color: #0e8a16)
- `status: blocked` - Blocked by external dependency (color: #b60205)
- `status: needs review` - Needs code review (color: #ff9500)

### Component
- `component: auth` - Authentication related (color: #1f77b4)
- `component: database` - Database related (color: #ff7f0e)
- `component: ui` - User Interface (color: #2ca02c)
- `component: api` - API related (color: #d62728)
- `component: billing` - Polar.sh billing integration (color: #9467bd)
- `component: ci/cd` - Continuous Integration/Deployment (color: #8c564b)

### Effort
- `effort: small` - Can be done in < 1 day (color: #c7f0db)
- `effort: medium` - Can be done in 1-3 days (color: #ffeaa7)
- `effort: large` - Will take > 3 days (color: #fab1a0)

## Comandos para criar labels (GitHub CLI)

```bash
# Type labels
gh label create "bug" --color "d73a49" --description "Something isn't working"
gh label create "enhancement" --color "a2eeef" --description "New feature or request"
gh label create "documentation" --color "0075ca" --description "Improvements or additions to documentation"
gh label create "question" --color "d876e3" --description "Further information is requested"

# Priority labels
gh label create "priority: low" --color "d4edda" --description "Low priority"
gh label create "priority: medium" --color "fff3cd" --description "Medium priority"
gh label create "priority: high" --color "f8d7da" --description "High priority"
gh label create "priority: critical" --color "721c24" --description "Critical priority"

# Status labels
gh label create "status: triage" --color "fbca04" --description "Needs investigation"
gh label create "status: in progress" --color "0e8a16" --description "Currently being worked on"
gh label create "status: blocked" --color "b60205" --description "Blocked by external dependency"
gh label create "status: needs review" --color "ff9500" --description "Needs code review"

# Component labels
gh label create "component: auth" --color "1f77b4" --description "Authentication related"
gh label create "component: database" --color "ff7f0e" --description "Database related"
gh label create "component: ui" --color "2ca02c" --description "User Interface"
gh label create "component: api" --color "d62728" --description "API related"
gh label create "component: billing" --color "9467bd" --description "Polar.sh billing integration"
gh label create "component: ci/cd" --color "8c564b" --description "Continuous Integration/Deployment"

# Effort labels
gh label create "effort: small" --color "c7f0db" --description "Can be done in < 1 day"
gh label create "effort: medium" --color "ffeaa7" --description "Can be done in 1-3 days"
gh label create "effort: large" --color "fab1a0" --description "Will take > 3 days"
```

## Setup Automático

Para aplicar todas as labels de uma vez:

```bash
# Executar no diretório do projeto
pnpm run setup:labels
```