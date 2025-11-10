# Configuração GitHub

# Configuração GitHub

## 1. Estrutura de Branches

- **`development`** - Branch de desenvolvimento e staging
- **`master`** - Branch de produção

## 2. Configurações de Branch Protection (Automático via tools)

### Para a branch `master`:
- Require a pull request before merging
- Require status checks to pass before merging
- Restrict pushes that create files larger than 100MB
- Block direct pushes (apenas via PR)

### Para a branch `development`:
- Require status checks to pass before merging (CI)

## 3. Workflow

- **Desenvolvimento**: Trabalha-se na branch `development`
- **Deploy para produção**: PR de `development` → `master`
- **CI/CD**: Testes correm em ambas as branches
- **E2E tests**: Apenas em PRs para `master`

## 4. Issues e PR Templates

Após a configuração manual, posso criar:
- Templates para Issues
- Templates para Pull Requests
- Configuração de labels

## 5. Próximos Passos

1. Configurar branch protection rules automaticamente
2. Configure a Vercel com:
   - `master` → Production
   - `development` → Preview

## Comandos úteis

```bash
# Trabalhar em development
git checkout development
git pull origin development

# Criar PR para master
git push origin development
# Depois criar PR no GitHub: development → master
```