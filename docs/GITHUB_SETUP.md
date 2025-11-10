# Configuração GitHub

## 1. Configuração Manual Necessária

### Alterar Branch Padrão
1. Vá para https://github.com/hspotted/cake-budget
2. Clique em **Settings** (tab)
3. No menu lateral, clique em **General**
4. Na secção **Default branch**, clique no ícone de editar
5. Selecione `development` como branch padrão
6. Confirme a alteração

### Deletar Branch Master
Após alterar a branch padrão:
1. Ainda em **Settings** > **General**
2. Na secção **Default branch**, agora pode deletar a branch `master`
3. Ou via linha de comando: `git push origin --delete master`

## 2. Configurações de Branch Protection (A fazer após passo 1)

### Para a branch `production`:
- Require a pull request before merging
- Require status checks to pass before merging
- Restrict pushes that create files larger than 100MB

### Para a branch `development`:  
- Require status checks to pass before merging (CI)

## 3. Issues e PR Templates

Após a configuração manual, posso criar:
- Templates para Issues
- Templates para Pull Requests
- Configuração de labels

## 4. Próximos Passos

1. Complete a configuração manual acima
2. Execute: `pnpm run setup:github` (comando que vou criar)
3. Configure a Vercel

## Comandos para limpar localmente

Após alterar a branch padrão no GitHub:

```bash
# Deletar referência local para master remoto
git remote set-head origin development

# Deletar branch master remota
git push origin --delete master
```