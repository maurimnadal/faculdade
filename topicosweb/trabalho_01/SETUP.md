# 🔧 Setup e Execução do Projeto

> Guia passo a passo para instalar e executar o projeto localmente

📖 **Voltar para:** [README.md](./README.md) | [DOCUMENTACAO.md](./DOCUMENTACAO.md)

## ⚙️ Pré-requisitos

**Seu sistema deve ter:**

- ✅ **PHP 8.2+** - [Download](https://www.php.net/)
- ✅ **Composer** - [Download](https://getcomposer.org/)
- ✅ **Git** (opcional) - [Download](https://git-scm.com/)
- ✅ **SQLite** - Geralmente incluído no PHP

**Versões testadas neste projeto:**
- PHP 8.2.12
- Composer 2.9.3
- Laravel 12.58.0



## 📦 Instalação Passo a Passo

### Passo 1: Navegar até o Projeto

Abra o PowerShell ou Terminal e entre no diretório:

```powershell
cd artista-catalog
```

**Verificar que está no lugar certo:**
```powershell
ls    # Deve ver: app, database, resources, routes, etc.
```

### Passo 2: Instalar Dependências

Baixe todas as bibliotecas do projeto:

```bash
composer install
```

⏳ Pode levar alguns minutos...

**Se houver erro:** Certifique-se de que:
- PHP está instalado e no PATH: `php --version`
- Composer está instalado: `composer --version`

### Passo 3: Configurar Variáveis de Ambiente

Crie o arquivo `.env` baseado no exemplo:

```bash
copy .env.example .env
```

Gere a chave de criptografia:

```bash
php artisan key:generate
```

✅ Agora o arquivo `.env` contém: `APP_KEY=base64:xxxxx`

**Verificar configuração do banco de dados em `.env`:**
```
DB_CONNECTION=sqlite
# (Isso está correto para SQLite)
```

### Passo 4: Preparar o Banco de Dados

Crie o arquivo SQLite:

```bash
touch database/database.sqlite
```

⚠️ **No Windows:** Use PowerShell - o `touch` está disponível no PS 7+, ou:

```powershell
New-Item -Path database\database.sqlite -ItemType File
```

Execute as migrações para criar as tabelas:

```bash
php artisan migrate
```

Popule o banco com dados de teste:

```bash
php artisan db:seed
```

✅ Agora você tem:
- 3 tabelas: `users`, `artists`, `reviews`
- 6 artistas pré-carregados
- 3 usuários de teste
- Avaliações de exemplo

### Passo 5: Configurar Storage (Upload de Imagens)

Crie um link simbólico para o diretório de armazenamento:

```bash
php artisan storage:link
```

✅ Agora as imagens podem ser acessadas em `public/storage/`

**Se houver erro de permissão no Windows:**
```powershell
php artisan storage:link --force
```

### Passo 6: Iniciar o Servidor Local

Inicie o servidor de desenvolvimento:

```bash
php artisan serve
```

**Você verá:**
```
   INFO  Server running on [http://127.0.0.1:8000].
```

✅ **O projeto está rodando!**

### Passo 7: Acessar no Navegador

Abra seu navegador e visite:

```
http://127.0.0.1:8000
```


## 🛑 Parar o Servidor

Para encerrar o servidor de desenvolvimento:

```bash
# Pressione Ctrl + C no terminal
```

Ou feche a janela do terminal.






## 🐛 Troubleshooting - Problemas Comuns

### ❌ "Composer not recognized"

**Problema:** Composer não está instalado ou no PATH

**Solução:**
1. Download Composer: https://getcomposer.org/
2. Instale o instalador (composer-setup.exe)
3. Reinicie o terminal e tente novamente: `composer --version`

### ❌ "Could not open input file: artisan"

**Problema:** Você não está no diretório correto

**Solução:**
```powershell
# Verifique onde você está
pwd

# Navegue para o caminho do projeto, ex:
cd "C:\Users\Micro\Documents\faculdade\topicosweb\trabalho_01\artista-catalog"

# Verifique que vê os arquivos do projeto
ls

# Agora tente
php artisan serve
```

### ❌ "Base table or view not found: artists"

**Problema:** As tabelas do banco não foram criadas

**Solução:**
```bash
# Crie o arquivo do banco
New-Item -Path database\database.sqlite -ItemType File

# Rode as migrações
php artisan migrate

# Popule com dados
php artisan db:seed
```

### ❌ "Key has already been generated"

**Problema:** APP_KEY já existe no `.env`

**Solução:** Isso é normal, significa que a chave já foi gerada. Continue com o próximo passo.

### ❌ Imagens não carregam ou upload não funciona

**Problema:** Storage link não foi criado

**Solução:**
```bash
php artisan storage:link

# Se ainda não funcionar, force:
php artisan storage:link --force
```

### ❌ Erro de permissão ao criar storage link (Windows)

**Problema:** Falta de permissões administrativas

**Solução:**
1. Abra PowerShell como **Administrador**
2. Navegue ao projeto
3. Execute: `php artisan storage:link --force`

### ❌ Banco de dados corrompido ou com erro

**Problema:** Migrações falharam ou dados inconsistentes

**Solução:**
```bash
# Limpe tudo (cuidado!)
php artisan migrate:reset

# Recrie e popule
php artisan migrate
php artisan db:seed
```

### ❌ "SQLSTATE[HY000]: General error: 1 file is not a database"

**Problema:** Arquivo database.sqlite está corrompido ou vazio

**Solução:**
```powershell
# Delete o arquivo
Remove-Item database\database.sqlite

# Recrie
New-Item -Path database\database.sqlite -ItemType File

# Rode migrações
php artisan migrate
php artisan db:seed
```

### ❌ Erro ao fazer login

**Problema:** Credenciais de teste não funcionam

**Solução:**
```bash
# Certifique-se que o seeder foi executado
php artisan db:seed

# Ou recrie o usuário via Tinker
php artisan tinker
# Digite: \App\Models\User::create(['name'=>'Test','email'=>'test@example.com','password'=>Hash::make('password')])
```

## 🔍 Verificação de Saúde do Projeto

Execute estes comandos para verificar se tudo está funcionando:

```bash
# Ver informações do projeto
php artisan about

# Listar todas as rotas
php artisan route:list

# Verificar status das migrações
php artisan migrate:status

# Testar conexão com banco de dados
php artisan tinker
# Digite: DB::connection()->getPDO()
# Deve retornar um objeto PDO (sucesso!)
```

**Se todos os comandos rodarem sem erro, tudo está funcionando!**



## 🌍 Primeiros Passos na Aplicação

### 1. Acessar a Página Inicial
Abra seu navegador: `http://127.0.0.1:8000`

### 2. Explorar como Visitante
- Veja o catálogo de artistas
- Use os filtros para buscar e ordenar
- Clique em um artista para ver detalhes

### 3. Fazer Login
- Clique em "Login" no canto superior direito
- Use credenciais de teste:
  - Email: `test@example.com`
  - Senha: `password`

### 4. Funcionalidades como Usuário Logado
- Avaliar artistas com 5 estrelas
- Criar novo artista
- Editar artistas
- Deletar artistas e avaliações

### 5. Testar Funcionalidades
- Busque um artista na barra de busca
- Filtre por gênero
- Ordene por melhores/piores avaliações
- Atualize sua avaliação de um artista
- Veja como a média de avaliações muda em tempo real



## 📝 Limpar Cache e Logs

Se encontrar comportamentos estranhos:

```bash
# Limpar todos os caches
php artisan cache:clear
php artisan config:clear
php artisan view:clear

# Ver logs de erro
tail -f storage/logs/laravel.log

# Limpar logs
rm storage/logs/*.log
```






## �️ Explorando o Banco de Dados

Você pode usar o **Tinker** do Laravel para consultar dados:

```bash
php artisan tinker
```

Exemplos de comandos:

```php
# Listar todos os artistas
App\Models\Artist::all();

# Contar avaliações
App\Models\Review::count();

# Ver artista com mais avaliações
App\Models\Artist::withCount('reviews')->orderByDesc('reviews_count')->first();

# Ver avaliação média de um artista
App\Models\Artist::find(1)->averageRating();

# Listar todas as avaliações
App\Models\Review::with('user', 'artist')->get();

# Sair do Tinker
exit
```



## 📚 Recursos Adicionais

- **Laravel Docs:** https://laravel.com/docs
- **PHP Manual:** https://www.php.net/
- **MDN Web Docs:** https://developer.mozilla.org/
- **Stack do Projeto:** Ver [DOCUMENTACAO.md](./DOCUMENTACAO.md)
- **Visão Geral:** Ver [README.md](./README.md)



## ✅ Resumo Rápido

| Passo | Comando |
|-|-|
| 1 | `composer install` |
| 2 | `copy .env.example .env` |
| 3 | `php artisan key:generate` |
| 4 | `touch database/database.sqlite` |
| 5 | `php artisan migrate` |
| 6 | `php artisan db:seed` |
| 7 | `php artisan storage:link` |
| 8 | `php artisan serve` |
| 9 | Acesse `http://127.0.0.1:8000` |


