# 🔧 Guia Completo de Setup e Troubleshooting

## Pré-requisitos Verificados

- ✅ PHP 8.2.12
- ✅ Composer 2.9.3
- ✅ Laravel 12.58.0
- ✅ SQLite configurado

---

## 📦 Instalação Passo a Passo

### 1. Clonar/Acessar o Projeto

```powershell
cd "C:\Users\mauricio.141205\Documents\faculdade\topicosweb\trabalho_01\artista-catalog"
```

### 2. Instalar Dependências

```bash
composer install
```

**Se houver erro:** Certifique-se que o PHP 8.2+ está no PATH

### 3. Configurar Ambiente

```bash
# Copiar arquivo de exemplo
copy .env.example .env

# Gerar chave de aplicação
php artisan key:generate
```

**Verificar:** O arquivo `.env` deve conter:
```
APP_KEY=base64:...
DB_CONNECTION=sqlite
```

### 4. Preparar Banco de Dados

```bash
# Criar arquivo SQLite
touch database/database.sqlite

# Rodar migrações
php artisan migrate

# Semear dados de teste
php artisan db:seed
```

### 5. Configurar Storage

```bash
# Criar link simbólico para uploads
php artisan storage:link
```

### 6. Iniciar Servidor

```bash
php artisan serve
```

**Esperado:** 
```
INFO  Server running on [http://127.0.0.1:8000].
```

---

## 🐛 Problemas Comuns e Soluções

### ❌ "Attribute [auth] does not exist"

**Causa:** Erro na rota `Route::auth()` (não existe no Laravel moderno)

**Solução:** Removido das rotas - já está corrigido

### ❌ "Could not open input file: artisan"

**Causa:** Comando rodado fora do diretório correto

**Solução:** 
```powershell
cd "C:\Users\mauricio.141205\Documents\faculdade\topicosweb\trabalho_01\artista-catalog"
php artisan serve
```

### ❌ "Base table or view not found: artists"

**Causa:** Migrações não foram executadas

**Solução:**
```bash
php artisan migrate --force
php artisan db:seed
```

### ❌ "Call to undefined function auth()"

**Causa:** Middleware de autenticação não configurado

**Solução:** Já está configurado em `routes/web.php`

### ❌ Imagens não carregam

**Causa:** Storage link não criado

**Solução:**
```bash
php artisan storage:link

# Se ainda não funcionar:
php artisan storage:link --force
```

### ❌ Erro 403 ao deletar artista

**Causa:** Falta de CSRF token no formulário DELETE

**Solução:** Já incluído em todas as formas com `@csrf` e `@method('DELETE')`

### ❌ Banco de dados corrompido

**Solução:**
```bash
# Limpar tudo
php artisan migrate:reset

# Recriar e popular
php artisan migrate
php artisan db:seed
```

### ❌ Erro de permissão de arquivo

**Solução (Windows):**
```powershell
# Dar permissão de escrita
icacls "storage" /grant Everyone:(OI)(CI)F /T
icacls "bootstrap\cache" /grant Everyone:(OI)(CI)F /T
```

---

## ✅ Verificação Rápida

```bash
# Verificar status da aplicação
php artisan about

# Listar rotas
php artisan route:list

# Verificar migrações
php artisan migrate:status

# Testar conexão com DB
php artisan tinker
# Digite: DB::connection()->getPDO()
# Deve retornar um objeto PDO
```

---

## 🌍 Acessar a Aplicação

1. **Após `php artisan serve`**, acesse:
   ```
   http://127.0.0.1:8000
   ```

2. **Login com usuário de teste:**
   - Email: `test@example.com`
   - Senha: `password`

3. **Ou criar novo usuário** clicando em "Cadastro"

---

## 📊 Estrutura do Banco de Dados

```sql
-- Usuários
SELECT * FROM users;

-- Artistas
SELECT * FROM artists;

-- Avaliações com dados relacionados
SELECT r.*, u.name as usuario, a.name as artista 
FROM reviews r
JOIN users u ON r.user_id = u.id
JOIN artists a ON r.artist_id = a.id;

-- Média de avaliações por artista
SELECT 
    a.name, 
    COUNT(r.id) as total_avaliacoes,
    AVG(r.rating) as media
FROM artists a
LEFT JOIN reviews r ON a.id = r.artist_id
GROUP BY a.id
ORDER BY media DESC;
```

---

## 🔐 Segurança

- ✅ CSRF protection em todos os formulários
- ✅ Hash de senhas com bcrypt
- ✅ Validação de entrada no servidor
- ✅ Autorização em ações destrutivas
- ✅ SQL injection prevention (Eloquent ORM)

---

## 📈 Performance

- ✅ Eager loading de relacionamentos (`with()`)
- ✅ Índices de banco de dados
- ✅ Paginação de resultados (12 por página)
- ✅ Query optimization com SelectRaw

---

## 🎯 Funcionalidades Adicionais (Não Obrigatórias)

- ✅ Ordenação dinâmica (4 opções)
- ✅ Busca por texto em tempo real
- ✅ Filtro por gênero
- ✅ Preview de imagem antes de upload
- ✅ Modais de confirmação
- ✅ Flash messages de sucesso/erro
- ✅ Responsividade completa

---

## 🚀 Deploy (Produção)

### Para publicar em um servidor:

1. **Clonar repositório**
2. **Instalar com `--no-dev`**
   ```bash
   composer install --no-dev
   ```

3. **Configurar `.env` com dados reais**
   ```
   APP_ENV=production
   APP_DEBUG=false
   DB_CONNECTION=mysql (ou seu DB)
   ```

4. **Gerar chave e otimizar**
   ```bash
   php artisan key:generate
   php artisan config:cache
   php artisan route:cache
   ```

5. **Criar storage e dar permissões**
   ```bash
   php artisan storage:link
   chmod -R 775 storage bootstrap/cache
   ```

---

## 📞 Suporte

Se encontrar problemas:

1. **Verificar arquivo de log:**
   ```bash
   tail -f storage/logs/laravel.log
   ```

2. **Usar Tinker para debug:**
   ```bash
   php artisan tinker
   # Testar queries, models, etc.
   ```

3. **Limpar cache:**
   ```bash
   php artisan cache:clear
   php artisan config:clear
   php artisan view:clear
   ```

---

**Atualizado em:** 07/05/2026  
**Versão:** 1.0 - Estável
