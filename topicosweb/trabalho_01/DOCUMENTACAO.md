# 📚 Stack Tecnológica e Arquitetura

> Documentação técnica do projeto - Stack, componentes e relacionamentos

📖 **Voltar para:** [README.md](./README.md) | [SETUP.md](./SETUP.md)



## 🏗️ Stack Tecnológica

### Backend
| Componente | Versão | Descrição |
|-----------|--------|----------|
| **PHP** | 8.2+| Linguagem de programação |
| **Laravel** | 12+| Framework web completo |
| **Composer** | 2.9.3+ | Gerenciador de dependências |
| **Eloquent ORM** | Builtin | Mapeamento objeto-relacional |

### Frontend
| Componente | Descrição |
|-----------|----------|
| **Blade** | Template engine do Laravel |
| **HTML5** | Marcação semântica |
| **CSS3** | Estilos, Grid, Flexbox, Gradientes |
| **JavaScript Vanilla** | Interatividade sem dependências |

### Banco de Dados
| Componente | Versão | Descrição |
|-----------|--------|----------|
| **SQLite** | 3.x | Banco de dados leve e portável |
| **Migrations** | Larvel | Controle de versão do schema |
| **Seeders** | Laravel | População inicial de dados |

### Autenticação
| Componente | Descrição |
|-----------|----------|
| **Laravel Auth** | Sistema nativo de autenticação |
| **Bcrypt** | Hashing seguro de senhas |
| **Session Middleware** | Gerenciamento de sessões |

### Segurança
| Feature | Implementação |
|--------|---------------|
| **CSRF Protection** | @csrf em formulários |
| **SQL Injection** | Eloquent com placeholders |
| **Password Hashing** | Bcrypt automático |
| **Authorization** | Middleware e policies |



## 🏛️ Arquitetura MVC



## � Estrutura de Diretórios

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



## 🗄️ Banco de Dados (SQLite)

### Schema e Relacionamentos

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

### Índices e Constraints

```sql
-- Unique constraint em (user_id, artist_id)
ALTER TABLE reviews ADD UNIQUE(user_id, artist_id);

-- Foreign keys com cascade
ALTER TABLE reviews 
ADD CONSTRAINT fk_user 
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

ALTER TABLE reviews 
ADD CONSTRAINT fk_artist 
FOREIGN KEY (artist_id) REFERENCES artists(id) ON DELETE CASCADE;
```



## 🔄 Relacionamentos Eloquent

### User → Reviews (1:N)
```php
public function reviews() {
    return $this->hasMany(Review::class);
}
```

### Artist → Reviews (1:N)
```php
public function reviews() {
    return $this->hasMany(Review::class);
}
```

### Review → User (N:1)
```php
public function user() {
    return $this->belongsTo(User::class);
}
```

### Review → Artist (N:1)
```php
public function artist() {
    return $this->belongsTo(Artist::class);
}
```



## 💻 Componentes Principais

### Controllers (Lógica de Negócio)

#### ArtistController
- `index()` - Listar com filtros e ordenação
- `create()` - Formulário novo artista
- `store()` - Validar e salvar
- `show()` - Detalhes e avaliações
- `edit()` - Formulário edição
- `update()` - Validar e atualizar
- `destroy()` - Deletar com autorização

#### ReviewController
- `store()` - Criar/atualizar avaliação
- `destroy()` - Deletar avaliação própria

### Form Requests (Validação)

#### StoreArtistRequest
Usada em **CREATE** (POST /artists) e **UPDATE** (PUT /artists/{id})
```php
'name' => ['required', 'string', 'max:255', 'unique:artists'],
'genre' => ['required', 'string', 'max:100'],
'biography' => ['nullable', 'string', 'max:1000'],
'image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
```

**Mensagens Personalizadas (em português):**
```php
'name.required' => 'O nome do artista eh obrigatorio.',
'name.unique' => 'Este artista ja existe no catalogo.',
'genre.required' => 'O genero musical eh obrigatorio.',
'image.image' => 'O arquivo deve ser uma imagem valida.',
```

#### StoreReviewRequest
```php
'artist_id' => ['required', 'exists:artists,id'],
'rating' => ['required', 'integer', 'min:0', 'max:5'],
```

**Mensagens Personalizadas (em português):**
```php
'rating.required' => 'Voce deve selecionar uma nota.',
'rating.min' => 'A nota deve estar entre 0 e 5 estrelas.',
'rating.max' => 'A nota deve estar entre 0 e 5 estrelas.',
```

### Models (Dados e Lógica)

#### Artist
- Relacionamento com Reviews
- Método `averageRating()` - Calcula média
- Método `reviewCount()` - Conta avaliações

#### Review
- Relacionamento com User e Artist
- Atributos: user_id, artist_id, rating

#### User
- Autenticação padrão Laravel
- Relacionamento com Reviews

### Views (Apresentação)

#### layouts/app.blade.php
- Header com navegação
- Footer com informações
- Estilos CSS integrados
- Flash messages

#### artists/index.blade.php
- Grid de cards responsivo
- Barra de filtros
- Sistema de paginação
- Modal de confirmação

#### artists/show.blade.php
- Detalhes do artista
- Seção de avaliações
- Formulário interativo de rating
- Lista de reviews



## 🎯 Funcionalidades Técnicas Implementadas
### 1. Query Optimization
```php
// Eager loading para evitar N+1
Artist::withCount('reviews')
    ->with('reviews')
    ->selectRaw('artists.*, AVG(reviews.rating) as avg_rating')
    ->leftJoin('reviews', 'artists.id', '=', 'reviews.artist_id')
    ->groupBy('artists.id')
    ->paginate(12);
```

### 2. Ordenação Dinâmica
```php
switch ($sortBy) {
    case 'rating_desc':
        $query->orderByRaw('AVG(reviews.rating) DESC NULLS LAST');
        break;
    case 'popularity_desc':
        $query->orderBy('reviews_count', 'DESC');
        break;
    // ... mais opções
}
```

### 3. Validação em Cascade
- **Cliente:** JavaScript previne submissão inválida
- **Servidor:** FormRequest valida tipos e regras
- **Banco:** Constraints garantem integridade

### 4. Filtros Combinados
```php
if ($search) {
    $query->where('name', 'like', '%' . $search . '%');
}
if ($genre) {
    $query->where('genre', $genre);
}
```

### 5. Atualização Inteligente
```php
// updateOrCreate mantém uma única avaliação por usuário
Review::updateOrCreate(
    ['user_id' => Auth::id(), 'artist_id' => $artistId],
    ['rating' => $rating]
);
```



## 🎨 Componentes JavaScript

### Star Rating Interativo
```javascript
// Hover dinâmico
$('.star').hover(
    function() { /* acende estrelas */ },
    function() { /* apaga */ }
);

// Click para salvar
$('.star').click(function() { /* envia rating */ });
```

### Modais de Confirmação
```javascript
function showConfirmModal(title, message, onConfirm) {
    // Overlay + modal com botões
    // Callback ao confirmar
}
```

### Validação de Formulário
```javascript
// Verifica campos obrigatórios antes de enviar
form.addEventListener('submit', (e) => {
    if (!isValid()) e.preventDefault();
});
```

### Preview de Imagem
```javascript
input.addEventListener('change', (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        preview.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
});
```


## 🎨 Componentes CSS

### Responsive Grid
```css
.artists-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
}

@media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}
```

### Gradiente Moderno
```css
body {
    background: linear-gradient(135deg, #0056b3 0%, #001f3f 100%);
}
```

### Cards com Hover
```css
.artist-card {
    transition: all 0.3s;
}

.artist-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 86, 179, 0.3);
}
```

### Star Rating Visual
```css
.star.filled {
    color: #ffc107;
    text-shadow: 0 0 5px rgba(255, 193, 7, 0.5);
}
```



## � Rotas da Aplicação (RESTful)

### Artistas (Resource Routes)
```
GET    /artists              → index    (Listar)              ✅ Público
GET    /artists/create       → create   (Formulário novo)    ✅ Público
POST   /artists              → store    (Salvar novo)        🔒 Autenticado
GET    /artists/{id}         → show     (Detalhes)           ✅ Público
GET    /artists/{id}/edit    → edit     (Formulário edição)  ✅ Público
PUT    /artists/{id}         → update   (Atualizar)          ⚠️ Sem proteção no servidor*
DELETE /artists/{id}         → destroy  (Deletar)            🔒 Autenticado
```

*Nota: PUT não tem validação no servidor (qualquer um pode atualizar), mas apenas autenticados conseguem via frontend.

### Avaliações
```
POST   /reviews              → store    (Criar/atualizar)    🔒 Autenticado
DELETE /reviews/{id}         → destroy  (Deletar)            🔒 Autenticado (apenas própria avaliação)
```

### Autenticação
```
GET    /login                → Exibir formulário              ✅ Apenas visitantes
POST   /login                → Processar login               ✅ Apenas visitantes
POST   /logout               → Logout                        🔒 Autenticado
GET    /register             → Exibir cadastro               ✅ Apenas visitantes
POST   /register             → Processar cadastro            ✅ Apenas visitantes
```

### Middleware
```
auth      → Requer estar autenticado (login obrigatório)
guest     → Requer NÃO estar autenticado (apenas para visitors)
```






### 📋 Descrição das Rotas da Aplicação

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


## 📊 Tabelas SQL Criadas

Todas as migrações estão em `database/migrations/`


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



## ⚡ Tecnologias e Técnicas

### Laravel Features Implementadas
- **Eloquent ORM** para modelos e relacionamentos
- **Query Builder** com filtros, busca e ordenação dinâmica
- **Form Requests** para validação dupla (server-side)
- **Blade Templates** para renderização com layouts compartilhados
- **Migrations** para versionamento e controle de schema
- **Database Seeders** para população inicial de dados
- **Resource Routing** para rotas RESTful conventions

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



## 🔄 Fluxo de Dados

1. **Listar:** GET /artists → ArtistController@index → Eager loading + LEFT JOIN para ratings → artists.index.blade
2. **Buscar/Filtrar:** GET /artists?search=&genre=&sort= → Query builder dinâmica com múltiplos WHERE
3. **Criar:** POST /artists (auth) → StoreArtistRequest validation → Artist::create() + upload → redirect
4. **Editar:** PUT /artists/{id} → StoreArtistRequest validation → $artist->update() + upload → redirect
5. **Avaliar:** POST /reviews (auth) → Review::updateOrCreate() → Uma avaliação por user+artist (atualiza se existe)
6. **Deletar Review:** DELETE /reviews/{id} (auth) → Verifica ownership → $review->delete()
7. **Deletar Artist:** DELETE /artists/{id} (auth) → $artist->delete() → Cascade delete nas reviews



## 📊 Dados de Exemplo

O seeder cria automaticamente:
- **4 usuários de teste:** 1 hardcoded (test@example.com) + 3 via User::factory()
- **6 artistas musicais:** The Beatles, David Bowie, Miles Davis, Aretha Franklin, Pink Floyd, Ella Fitzgerald
- **Avaliações aleatórias:** Ratings de 3-5 estrelas (não 0-2), com 50% de chance por usuário criar review



## ✨ Recursos Extras Implementados

1. **Soft sorting e paginação** - Ordenação dinâmica com 4 opções
2. **Modais de confirmação** - Segurança contra exclusões acidentais
3. **Preview de imagem** - Visualizar antes de enviar
4. **Sistema de erro** - Mensagens claras em caso de falha
5. **Responsividade completa** - Funciona em qualquer tamanho de tela
6. **Hover effects** - Feedback visual ao interagir



## 🐛 Tratamento de Erros

- Validação dupla (cliente + servidor)
- Mensagens de erro personalizadas
- Redirect com flash messages
- Verificação de autorização
- Handling de arquivos corrompidos



## 📝 Padrões Utilizados

- **MVC** - Separação em Models, Views, Controllers
- **RESTful** - Convenções HTTP (GET, POST, PUT, DELETE)
- **DRY** - Evitar repetição com layouts e components
- **SOLID** - Responsabilidade única em cada controller

## 🚀 Para Começar

👉 **Próximo passo:** Consulte [SETUP.md](./SETUP.md) para instalação passo a passo

