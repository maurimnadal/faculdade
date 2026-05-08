# 🎵 Catálogo de Artistas Musicais - Documentação

## ✅ Projeto Concluído com Sucesso!

Um aplicativo web completo para catalogar, avaliar e explorar artistas musicais com sistema de ranking colaborativo.

---

## 🏗️ Arquitetura do Projeto

### Stack Tecnológica
- **Backend:** Laravel 12 (PHP)
- **Frontend:** Blade Templates + HTML/CSS + JavaScript Vanilla
- **Banco de Dados:** SQLite
- **Autenticação:** Laravel Auth (built-in)

---

## 📁 Estrutura de Diretórios

```
artista-catalog/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── ArtistController.php       # CRUD de artistas
│   │   │   └── ReviewController.php       # Avaliações
│   │   └── Requests/
│   │       ├── StoreArtistRequest.php     # Validação de artistas
│   │       └── StoreReviewRequest.php     # Validação de reviews
│   └── Models/
│       ├── User.php                       # Usuários
│       ├── Artist.php                     # Artistas musicais
│       └── Review.php                     # Avaliações
├── database/
│   ├── migrations/
│   │   ├── create_users_table.php
│   │   ├── create_artists_table.php
│   │   └── create_reviews_table.php
│   └── seeders/
│       └── ArtistSeeder.php               # Dados de exemplo
├── resources/
│   └── views/
│       ├── layouts/
│       │   └── app.blade.php              # Layout base
│       └── artists/
│           ├── index.blade.php            # Listagem e filtros
│           ├── create.blade.php           # Novo artista
│           ├── edit.blade.php             # Editar artista
│           └── show.blade.php             # Detalhes + avaliações
└── routes/
    └── web.php                            # Rotas da aplicação
```

---

## 🗄️ Banco de Dados

### Tabelas Criadas

#### `users`
- id (PK)
- name
- email (unique)
- password (hashed)
- timestamps

#### `artists`
- id (PK)
- name (unique)
- genre
- biography (nullable)
- image (nullable - path to file)
- timestamps

#### `reviews`
- id (PK)
- user_id (FK → users)
- artist_id (FK → artists)
- rating (0-5 inteiro)
- timestamps
- unique constraint (user_id, artist_id)

---

## 🎯 Funcionalidades Implementadas

### 1. **Listagem e Exploração** ✅
- Exibição em cards responsivos com imagem, nome, gênero e estrelas
- Sistema de filtros:
  - Busca por nome de artista
  - Filtro por gênero
  - Ordenação dinâmica:
    - Melhores avaliações
    - Piores avaliações
    - Mais populares
    - Menos populares
- Paginação de resultados

### 2. **Cadastro de Artistas** ✅
- Formulário para criar novos artistas
- Upload de imagem
- Validação dupla:
  - **Cliente (JavaScript):** Campos obrigatórios
  - **Servidor (Laravel FormRequest):**
    - Nome único no banco
    - Limite de caracteres
    - Validação de imagem (JPEG, PNG, GIF)

### 3. **Sistema de Avaliações** ✅
- Interface interativa com 5 estrelas
- Hover dinâmico (estrelas "acendem")
- Validação: apenas usuários autenticados
- Atualização ou criação de avaliação
- Cálculo automático de média de ratings
- Contador de avaliações por artista

### 4. **Edição e Exclusão** ✅
- Editar dados do artista
- Deletar artista com confirmação modal
- Deletar avaliação própria

### 5. **Autenticação** ✅
- Login/Cadastro de usuários
- Proteção de rotas com middleware `auth`
- Sem autenticação: pode visualizar mas não avaliar/criar

### 6. **Interface Responsiva** ✅
- Design gradiente moderno (roxo/azul)
- Grid layout adaptável para mobile/tablet/desktop
- Cards com efeito hover
- Modais para confirmações
- Validação em tempo real

---

## 🔐 Validações Implementadas

### Validação Front-End (JavaScript)
```javascript
// Avaliações
- Verifica se estrela foi selecionada
- Previne envio sem nota

// Artistas
- Nome obrigatório
- Gênero obrigatório
- Preview de imagem
```

### Validação Back-End (Laravel)
```php
// StoreArtistRequest
- name: required, unique, max 255
- genre: required, max 100
- biography: nullable, max 1000
- image: nullable, image, max 2MB

// StoreReviewRequest
- artist_id: required, exists in artists
- rating: required, integer 0-5
```

---

## 🚀 Como Executar

### Pré-requisitos
- PHP 8.2+
- Composer
- SQLite (ou MySQL)

### Passos

1. **Navegar até o diretório:**
   ```bash
   cd "c:\Users\mauricio.141205\Documents\faculdade\topicosweb\trabalho_01\artista-catalog"
   ```

2. **Instalar dependências:**
   ```bash
   composer install
   ```

3. **Copiar arquivo de ambiente:**
   ```bash
   copy .env.example .env
   ```

4. **Gerar chave da aplicação:**
   ```bash
   php artisan key:generate
   ```

5. **Criar banco de dados SQLite:**
   ```bash
   touch database/database.sqlite
   ```

6. **Rodar migrações:**
   ```bash
   php artisan migrate
   ```

7. **Popular dados de exemplo:**
   ```bash
   php artisan db:seed
   ```

8. **Criar link de storage:**
   ```bash
   php artisan storage:link
   ```

9. **Iniciar servidor:**
   ```bash
   php artisan serve
   ```

10. **Acessar:** http://127.0.0.1:8000

---

## 👤 Credenciais de Teste

**Email:** test@example.com  
**Senha:** password

---

## 📋 Rotas da Aplicação

```
GET  /                           → Listar artistas (index)
GET  /artists/create             → Formulário novo artista
POST /artists                    → Criar artista (auth)
GET  /artists/{id}               → Detalhes do artista
GET  /artists/{id}/edit          → Formulário editar artista
PUT  /artists/{id}               → Atualizar artista (auth)
DELETE /artists/{id}             → Deletar artista (auth)

POST /reviews                    → Criar/atualizar avaliação (auth)
DELETE /reviews/{id}             → Deletar avaliação (auth)
```

---

## 🎨 Componentes de Interface

### Layout Principal
- Header sticky com logo e navegação
- Footer com informações
- Main container com max-width 1200px

### Cards de Artista
- Imagem do artista
- Nome em destaque
- Gênero em cor especial
- Média de estrelas com contagem
- Botões: Ver Detalhes, Deletar

### Página de Detalhes
- Imagem grande
- Informações completas
- Seção de avaliações
- Formulário interativo de avaliação
- Lista de reviews com autores

### Formulários
- Validação visual (erro em vermelho)
- Preview de imagem
- Campos obrigatórios marcados com *
- Botões Submit/Cancel

---

## ⚡ Tecnologias e Técnicas

### Laravel Features
- **Eloquent ORM** para modelos
- **Query Builder** para filtros e ordenação
- **Form Requests** para validação
- **Blade Templates** para renderização
- **Migrations** para versionamento DB
- **Seeders** para dados de teste

### JavaScript Vanilla
- Event listeners para interatividade
- DOM manipulation
- Form validation
- Modal management
- File preview

### CSS
- Flexbox e Grid
- Media queries para responsividade
- Gradientes e sombras
- Transições suaves
- Hover effects

---

## 🔄 Fluxo de Dados

1. **Listar:** GET /artists → ArtistController@index → artists.index.blade
2. **Buscar:** GET /artists?search=&genre=&sort= → Query dinâmica
3. **Criar:** POST /artists → Validação → Artist::create() → redirect
4. **Avaliar:** POST /reviews → Validação → Review::updateOrCreate()
5. **Deletar:** DELETE /artists/{id} → Soft delete → artists.destroy()

---

## 📊 Dados de Exemplo

O seeder cria automaticamente:
- 3 usuários de teste
- 6 artistas musicais (The Beatles, David Bowie, Miles Davis, etc.)
- Avaliações aleatórias entre usuários e artistas

---

## ✨ Recursos Extras Implementados

1. **Soft sorting e paginação** - Ordenação dinâmica com 4 opções
2. **Modais de confirmação** - Segurança contra exclusões acidentais
3. **Preview de imagem** - Visualizar antes de enviar
4. **Sistema de erro** - Mensagens claras em caso de falha
5. **Responsividade completa** - Funciona em qualquer tamanho de tela
6. **Hover effects** - Feedback visual ao interagir

---

## 🐛 Tratamento de Erros

- Validação dupla (cliente + servidor)
- Mensagens de erro personalizadas
- Redirect com flash messages
- Verificação de autorização
- Handling de arquivos corrompidos

---

## 📝 Padrões Utilizados

- **MVC** - Separação em Models, Views, Controllers
- **RESTful** - Convenções HTTP (GET, POST, PUT, DELETE)
- **DRY** - Evitar repetição com layouts e components
- **SOLID** - Responsabilidade única em cada controller

---

**Data de Conclusão:** 07/05/2026  
**Status:** ✅ 100% Funcional e Pronto para Uso

