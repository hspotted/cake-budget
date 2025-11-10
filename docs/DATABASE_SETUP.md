# Configuração da Base de Dados

Este projeto utiliza Neon PostgreSQL como base de dados, especialmente configurado para funcionar com Vercel.

## Configuração

### 1. Variáveis de Ambiente

O ficheiro `.env.local` deve conter:

```env
# DATABASE
DB_DATABASE_URL="postgresql://username:password@ep-xxx-xxx.region.neon.tech/dbname?sslmode=require"
```

### 2. Configuração do Neon

- O projeto está configurado para usar `@neondatabase/serverless` para conectar à base de dados Neon
- A configuração está no ficheiro `src/db/index.ts`
- O URL da base de dados deve seguir o formato específico do Neon

### 3. Drizzle ORM

- Utiliza Drizzle ORM com adaptador para Neon HTTP
- Schema definido em `src/db/schema.ts`
- Configuração do Drizzle em `drizzle.config.ts`

### 4. Better Auth

- Better Auth configurado para usar o adaptador Drizzle
- Tabelas de autenticação definidas no schema
- Configuração em `src/lib/auth.ts`

## Comandos Úteis

```bash
# Gerar migrações
npx @better-auth/cli generate

# Executar migrações
npx @better-auth/cli migrate

# Executar Drizzle Studio (visualizar dados)
npm run db:studio
```

## Troubleshooting

### Erro: "No database connection string was provided to neon()"

Este erro ocorre quando:
1. A variável `DB_DATABASE_URL` não está definida no `.env.local`
2. O URL não está no formato correto do Neon
3. As variáveis de ambiente não estão a ser carregadas corretamente

**Solução**: Verificar se o `.env.local` existe e tem o URL correto da Neon.