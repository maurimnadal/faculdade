# 🎵 Catálogo de Artistas Musicais

> Sistema web de curadoria e avaliação colaborativa de artistas musicais com ranking dinâmico



## 📚 Documentação

| Documento | Descrição |
|-----------|----------|
| **[DOCUMENTACAO.md](./DOCUMENTACAO.md)** | Stack tecnológica, arquitetura e componentes |
| **[SETUP.md](./SETUP.md)** | Passo a passo de instalação e execução |


## 🎯 Objetivo do Sistema

Proporcionar uma plataforma interativa onde usuários podem:

- 🎵 **Catalogar** artistas musicais favoritos
- ⭐ **Avaliar** artistas com sistema de 5 estrelas
- 🔍 **Explorar** o catálogo através de filtros e buscas
- 📊 **Visualizar** ranking colaborativo em tempo real
- 🏆 **Descobrir** artistas mais populares e bem avaliados



## ✨ Funcionalidades Principais

### Para Usuários Não Autenticados
- ✅ Visualizar catálogo de artistas
- ✅ Filtrar por nome, gênero e ordenação
- ✅ Ver detalhes e avaliações de cada artista
- ✅ Criar conta de usuário

### Para Usuários Autenticados
- ✅ Avaliar artistas (0-5 estrelas)
- ✅ Criar novos artistas no catálogo
- ✅ Editar artistas cadastrados
- ✅ Deletar artistas e avaliações
- ✅ Atualizar próprias avaliações

### Sistema de Filtros e Ordenação
- ✅ Busca por nome de artista
- ✅ Filtro por gênero musical
- ✅ Ordenação por melhores avaliações
- ✅ Ordenação por piores avaliações
- ✅ Ordenação por mais populares
- ✅ Ordenação por menos populares

### Qualidade de Código
- ✅ Validação dupla (cliente + servidor)
- ✅ Interface responsiva e moderna
- ✅ Interatividade com JavaScript
- ✅ Sistema robusto de autenticação
- ✅ Upload seguro de imagens



## 🎨 Interface

### Página Principal
- Grid responsivo de artistas em cards
- Imagem, nome, gênero e estrelas de avaliação
- Barra de filtros intuitiva
- Paginação de resultados

### Página de Detalhes
- Informações completas do artista
- Lista de avaliações de usuários
- Formulário interativo de avaliação com hover de estrelas
- Botões de edição e exclusão

### Páginas de Autenticação
- Formulário de login
- Formulário de cadastro
- Validação visual em tempo real



## 📊 Dados Inclusos

O projeto vem pré-carregado com:

- **6 Artistas de Exemplo:** The Beatles, David Bowie, Miles Davis, Aretha Franklin, Pink Floyd, Ella Fitzgerald
- **3 Usuários de Teste:** Com avaliações aleatórias
- **Dados Relacionados:** Reviews e histórico de avaliações



## 🔐 Segurança

- ✅ Autenticação integrada do Laravel
- ✅ Hash de senhas com bcrypt
- ✅ Proteção CSRF em todos os formulários
- ✅ Validação no servidor (não confia apenas em JS)
- ✅ Autorização em ações (apenas o criador pode deletar)


## 📱 Responsividade

- ✅ Design mobile-first
- ✅ Testado em dispositivos pequenos, médios e grandes
- ✅ Grid layout adaptável
- ✅ Navegação otimizada para toque


## 🛠️ Próximos Passos

Você pode:

1. **Entender a arquitetura** → **Leia** [DOCUMENTACAO.md](./DOCUMENTACAO.md)
2. **Instalar o projeto** → **Siga** [SETUP.md](./SETUP.md)
3. **Explorar o código** → **Navegue pelos diretórios `app/` e `resources/`**


