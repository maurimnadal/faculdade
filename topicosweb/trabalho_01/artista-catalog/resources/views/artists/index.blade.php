@extends('layouts.app')

@section('title', 'Catálogo de Artistas')

@section('extra-css')
<style>
    .filters {
        background: white;
        padding: 30px;
        border-radius: 10px;
        margin-bottom: 30px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .filters form {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        align-items: end;
    }

    .filter-group {
        display: flex;
        flex-direction: column;
    }

    .filter-group label {
        margin-bottom: 8px;
        font-weight: 600;
        color: #333;
    }

    .filter-group input,
    .filter-group select {
        padding: 10px;
        border: 2px solid #eee;
        border-radius: 5px;
        font-size: 14px;
        transition: border-color 0.3s;
    }

    .filter-group input:focus,
    .filter-group select:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .filter-btn {
        padding: 10px 20px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s;
    }

    .filter-btn:hover {
        background: #764ba2;
        transform: translateY(-2px);
    }

    .artists-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 30px;
        margin-bottom: 40px;
    }

    .artist-card {
        background: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        transition: all 0.3s;
        display: flex;
        flex-direction: column;
    }

    .artist-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    }

    .artist-image {
        width: 100%;
        height: 250px;
        object-fit: cover;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .artist-info {
        padding: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .artist-name {
        font-size: 20px;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
    }

    .artist-genre {
        color: #667eea;
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 15px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .star-rating {
        display: flex;
        gap: 5px;
        margin-bottom: 15px;
        align-items: center;
    }

    .star {
        font-size: 20px;
        cursor: pointer;
        transition: all 0.2s;
    }

    .star.filled {
        color: #ffc107;
        text-shadow: 0 0 5px rgba(255, 193, 7, 0.5);
    }

    .star.empty {
        color: #ddd;
    }

    .rating-count {
        color: #999;
        font-size: 13px;
        margin-left: 10px;
    }

    .artist-actions {
        display: flex;
        gap: 10px;
        margin-top: auto;
    }

    .artist-actions a,
    .artist-actions button {
        flex: 1;
        padding: 10px;
        border: none;
        border-radius: 5px;
        text-decoration: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 13px;
        transition: all 0.3s;
    }

    .btn-view {
        background: #667eea;
        color: white;
    }

    .btn-view:hover {
        background: #764ba2;
    }

    .btn-delete {
        background: #f94144;
        color: white;
    }

    .btn-delete:hover {
        background: #d83236;
    }

    .pagination {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 40px;
        flex-wrap: wrap;
    }

    .pagination a,
    .pagination span {
        padding: 10px 15px;
        border-radius: 5px;
        text-decoration: none;
        background: white;
        color: #667eea;
        font-weight: 600;
        transition: all 0.3s;
    }

    .pagination a:hover {
        background: #667eea;
        color: white;
    }

    .pagination .active {
        background: #667eea;
        color: white;
    }

    .empty-state {
        text-align: center;
        padding: 60px 20px;
        background: white;
        border-radius: 10px;
        margin: 40px 0;
    }

    .empty-state h2 {
        color: #667eea;
        margin-bottom: 10px;
    }

    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-content {
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        text-align: center;
        max-width: 400px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.3);
    }

    .modal-content h2 {
        color: #333;
        margin-bottom: 20px;
    }

    .modal-buttons {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }

    .modal-buttons button,
    .modal-buttons a {
        flex: 1;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s;
    }

    .modal-confirm {
        background: #f94144;
        color: white;
    }

    .modal-confirm:hover {
        background: #d83236;
    }

    .modal-cancel {
        background: #ddd;
        color: #333;
    }

    .modal-cancel:hover {
        background: #ccc;
    }
</style>
@endsection

@section('content')
<div class="filters">
    <form method="GET" action="{{ route('artists.index') }}">
        <div class="filter-group">
            <label for="search">Buscar por Artista:</label>
            <input type="text" id="search" name="search" placeholder="Digite o nome..." value="{{ $search ?? '' }}">
        </div>

        <div class="filter-group">
            <label for="genre">Gênero:</label>
            <select id="genre" name="genre">
                <option value="">Todos os Gêneros</option>
                @foreach ($genres as $g)
                    <option value="{{ $g }}" @selected($genre === $g)>{{ $g }}</option>
                @endforeach
            </select>
        </div>

        <div class="filter-group">
            <label for="sort">Ordenar Por:</label>
            <select id="sort" name="sort">
                <option value="rating_desc" @selected($sortBy === 'rating_desc')>Melhores Avaliações</option>
                <option value="rating_asc" @selected($sortBy === 'rating_asc')>Piores Avaliações</option>
                <option value="popularity_desc" @selected($sortBy === 'popularity_desc')>Mais Populares</option>
                <option value="popularity_asc" @selected($sortBy === 'popularity_asc')>Menos Populares</option>
            </select>
        </div>

        <button type="submit" class="filter-btn">🔍 Filtrar</button>
    </form>
</div>

@if ($artists->isEmpty())
    <div class="empty-state">
        <h2>Nenhum artista encontrado</h2>
        <p>Seja o primeiro a adicionar um artista ao catálogo!</p>
        @auth
            <a href="{{ route('artists.create') }}" class="btn btn-primary" style="margin-top: 20px;">+ Novo Artista</a>
        @else
            <p style="margin-top: 20px;">
                <a href="{{ route('login') }}">Faça login</a> para adicionar artistas.
            </p>
        @endauth
    </div>
@else
    <div class="artists-grid">
        @foreach ($artists as $artist)
            <div class="artist-card">
                <img src="{{ $artist->image ? asset('storage/' . $artist->image) : 'https://via.placeholder.com/400x300?text=' . urlencode($artist->name) }}" alt="{{ $artist->name }}" class="artist-image">
                <div class="artist-info">
                    <div class="artist-name">{{ $artist->name }}</div>
                    <div class="artist-genre">{{ $artist->genre }}</div>

                    <div class="star-rating">
                        @php
                            $avgRating = round($artist->avg_rating ?? 0);
                        @endphp
                        @for ($i = 1; $i <= 5; $i++)
                            <span class="star @if ($i <= $avgRating) filled @else empty @endif">★</span>
                        @endfor
                        <span class="rating-count">({{ $artist->reviews_count }} avaliações)</span>
                    </div>

                    <div class="artist-actions">
                        <a href="{{ route('artists.show', $artist) }}" class="btn-view">Ver Detalhes</a>
                        @auth
                            <button type="button" class="btn-delete" onclick="showDeleteModal({{ $artist->id }})">Deletar</button>
                        @endauth
                    </div>
                </div>
            </div>
        @endforeach
    </div>

    {{ $artists->links() }}
@endif

<div id="deleteModal" class="modal">
    <div class="modal-content">
        <h2>Confirmar Exclusão</h2>
        <p>Tem certeza que deseja deletar este artista?</p>
        <div class="modal-buttons">
            <button type="button" class="modal-confirm" onclick="confirmDelete()">Sim, Deletar</button>
            <button type="button" class="modal-cancel" onclick="closeDeleteModal()">Cancelar</button>
        </div>
    </div>
</div>
@endif

@endsection

@section('extra-js')
<script>
    let artistToDelete = null;

    function showDeleteModal(artistId) {
        artistToDelete = artistId;
        document.getElementById('deleteModal').classList.add('show');
    }

    function closeDeleteModal() {
        document.getElementById('deleteModal').classList.remove('show');
        artistToDelete = null;
    }

    function confirmDelete() {
        if (artistToDelete) {
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = `/artists/${artistToDelete}`;
            form.innerHTML = `
                @csrf
                @method('DELETE')
            `;
            document.body.appendChild(form);
            form.submit();
        }
    }

    document.getElementById('deleteModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeDeleteModal();
        }
    });
</script>
@endsection
