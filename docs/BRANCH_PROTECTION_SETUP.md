# Branch Protection Setup

Este arquivo contém as configurações exatas para aplicar manualmente no GitHub.

## 1. Proteção da Branch `master` (PRODUÇÃO)

Ir para: https://github.com/hspotted/cake-budget/settings/branches

### Configurações para `master`:
```
✅ Restrict pushes that create files > 100 MB
✅ Require a pull request before merging
  ✅ Require approvals: 1
  ✅ Dismiss stale PR approvals when new commits are pushed
  ✅ Require review from CODEOWNERS (se existir)
✅ Require status checks to pass before merging
  ✅ Require branches to be up to date before merging
  Status checks required:
  - build-and-test
  - commitlint (for PRs)
✅ Require conversation resolution before merging
✅ Include administrators (recomendado: desabilitado para emergências)
✅ Restrict pushes to matching branches
✅ Allow force pushes: DISABLED
✅ Allow deletions: DISABLED
```

## 2. Proteção da Branch `development` (STAGING)

### Configurações para `development`:
```
✅ Restrict pushes that create files > 100 MB
✅ Require status checks to pass before merging
  ✅ Require branches to be up to date before merging
  Status checks required:
  - build-and-test
✅ Allow force pushes: DISABLED
✅ Allow deletions: DISABLED
```

## 3. Configuração Automática (Futuro)

Para automatizar no futuro quando tiver GitHub Pro:

```bash
# Configurar master
gh api repos/hspotted/cake-budget/branches/master/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":["build-and-test","commitlint"]}' \
  --field enforce_admins=false \
  --field required_pull_request_reviews='{"required_approving_review_count":1,"dismiss_stale_reviews":true}' \
  --field restrictions=null

# Configurar development
gh api repos/hspotted/cake-budget/branches/development/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":["build-and-test"]}' \
  --field enforce_admins=false \
  --field required_pull_request_reviews=null \
  --field restrictions=null
```

## 4. Verificar Configuração

Após aplicar manualmente:

1. Teste fazer push direto para `master` → deve falhar
2. Teste fazer push direto para `development` → deve falhar se CI falhar
3. Teste criar PR development → master → deve funcionar
4. Verifique se os status checks aparecem nos PRs

## 5. Status Atual

- [ ] Branch protection configurada para `master`
- [ ] Branch protection configurada para `development`
- [ ] Testado workflow completo
- [x] CI/CD configurado
- [x] Branches criadas

## 6. Troubleshooting

Se os status checks não aparecerem:
1. Verifique se o nome do job no CI coincide com o configurado
2. Jobs necessários: `build-and-test`, `commitlint`
3. O primeiro push/PR pode não ter todos os checks - é normal

## 7. Next Steps

Após configurar proteções:
1. Merge do PR atual (development → master)
2. Configurar Vercel
3. Configurar variáveis de ambiente