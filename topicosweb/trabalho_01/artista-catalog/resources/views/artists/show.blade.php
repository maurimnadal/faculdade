@extends('layouts.app')

@section('title', $artist->name)

@section('extra-css')
<style>
    .artist-detail {
        background: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;
    }

    .detail-header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        padding: 40px;
    }

    .detail-image {
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
        height: auto;
        max-height: 500px;
        object-fit: cover;
    }

    .detail-info h1 {
        color: #0056b3;
        font-size: 32px;
        margin-bottom: 10px;
    }

    .detail-genre {
        color: #001f3f;
        font-weight: 600;
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 20px;
    }

    .detail-rating {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;
    }

    .stars {
        display: flex;
        gap: 5px;
    }

    .star {
        font-size: 28px;
    }

    .star.filled {
        color: #ffc107;
        text-shadow: 0 0 5px rgba(255, 193, 7, 0.5);
    }

    .star.empty {
        color: #ddd;
    }

    .rating-stats {
        color: #666;
        font-size: 14px;
    }

    .detail-biography {
        color: #555;
        line-height: 1.8;
        margin-bottom: 30px;
    }

    .detail-actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 5px;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.3s;
    }

    .btn-primary {
        background: #0056b3;
        color: white;
    }

    .btn-primary:hover {
        background: #001f3f;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 86, 179, 0.4);
        
    }

    .btn-danger {
        background: #e63946;
        color: white;
    }

    .btn-danger:hover {
        background: #d62828;
    }

    .btn-secondary {
        background: #ddd;
        color: #333;
    }

    .btn-secondary:hover {
        background: #ccc;
    }

    .reviews-section {
        background: white;
        border-radius: 10px;
        padding: 40px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }

    .reviews-section h2 {
        color: #0056b3;
        font-size: 24px;
        margin-bottom: 30px;
        padding-bottom: 15px;
        border-bottom: 2px solid #0056b3;
    }

    .review-form {
        background: #f9f9f9;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        border-left: 4px solid #0056b3;
    }

    .review-form p {
        margin-bottom: 15px;
        color: #555;
    }

    .star-selector {
        display: flex;
        gap: 10px;
        margin-bottom: 15px;
    }

    .star-btn {
        font-size: 32px;
        background: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s;
        padding: 0;
    }

    .star-btn:hover {
        transform: scale(1.2);
    }

    .star-btn.selected {
        text-shadow: 0 0 8px rgba(255, 193, 7, 0.8);
    }

    .review-form button {
        padding: 10px 20px;
        background: #0056b3;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s;
    }

    .review-form button:hover {
        background: #001f3f;
    }

    .reviews-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .review-item {
        background: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        border-left: 4px solid #0056b3;
    }

    .review-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 10px;
    }

    .review-author {
        font-weight: 600;
        color: #0056b3;
    }

    .review-date {
        color: #999;
        font-size: 13px;
    }

    .review-rating {
        display: flex;
        gap: 3px;
        margin-bottom: 10px;
    }

    .review-rating .star {
        font-size: 18px;
    }

    .review-delete {
        background: #e63946;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 3px;
        cursor: pointer;
        font-size: 12px;
        transition: all 0.3s;
    }

    .review-delete:hover {
        background: #d62828;
    }

    .empty-reviews {
        text-align: center;
        padding: 40px;
        color: #999;
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

    @media (max-width: 768px) {
        .detail-header {
            grid-template-columns: 1fr;
            padding: 20px;
        }

        .detail-info h1 {
            font-size: 24px;
        }

        .reviews-section {
            padding: 20px;
        }

        .detail-actions {
            flex-direction: column;
        }

        .btn {
            width: 100%;
        }
    }
</style>
@endsection

@section('content')
<div class="artist-detail">
    <div class="detail-header">
        <img src="{{ $artist->image ? asset('storage/' . $artist->image) : 'https://via.placeholder.com/500x500?text=' . urlencode($artist->name) }}" alt="{{ $artist->name }}" class="detail-image">
        <div class="detail-info">
            <h1>{{ $artist->name }}</h1>
            <div class="detail-genre">{{ $artist->genre }}</div>

            <div class="detail-rating">
                <div class="stars">
                    @php
                        $avgRating = round($artist->averageRating());
                    @endphp
                    @for ($i = 1; $i <= 5; $i++)
                        <span class="star @if ($i <= $avgRating) filled @else empty @endif">★</span>
                    @endfor
                </div>
                <div class="rating-stats">
                    {{ number_format($artist->averageRating(), 1) }}/5 ({{ $artist->reviewCount() }} avaliações)
                </div>
            </div>

            @if ($artist->biography)
                <div class="detail-biography">
                    {{ $artist->biography }}
                </div>
            @endif

            <div class="detail-actions">
                @auth
                    <a href="{{ route('artists.edit', $artist) }}" class="btn btn-primary">✏️ Editar</a>
                    <button type="button" class="btn btn-danger" onclick="showDeleteModal()">🗑️ Deletar</button>
                @endauth
                <a href="{{ route('artists.index') }}" class="btn btn-secondary">← Voltar</a>
            </div>
        </div>
    </div>
</div>

<div class="reviews-section">
    <h2>⭐ Avaliações ({{ $artist->reviewCount() }})</h2>

    @auth
        <div class="review-form">
            <p>Qual é sua avaliação deste artista?</p>
            <form action="{{ route('reviews.store') }}" method="POST" id="reviewForm">
                @csrf
                <input type="hidden" name="artist_id" value="{{ $artist->id }}">
                <input type="hidden" name="rating" id="ratingInput" value="0">

                <div class="star-selector" id="starSelector">
                    @for ($i = 1; $i <= 5; $i++)
                        <button type="button" class="star-btn" data-rating="{{ $i }}" title="{{ $i }} estrela(s)">
                            @if ($i === 1)
                                ★
                            @else
                                ★
                            @endif
                        </button>
                    @endfor
                </div>

                <button type="submit">Enviar Avaliação</button>
            </form>
        </div>
    @else
        <div style="background: #e8f0ff; padding: 20px; border-radius: 8px; margin-bottom: 30px; text-align: center; color: #0056b3; font-weight: 600;">
            <a href="{{ route('login') }}">Faça login</a> para avaliar este artista.
        </div>
    @endauth

    @if ($artist->reviews->isEmpty())
        <div class="empty-reviews">
            <p>Nenhuma avaliação ainda. Seja o primeiro a avaliar! ⭐</p>
        </div>
    @else
        <div class="reviews-list">
            @foreach ($artist->reviews->sortByDesc('created_at') as $review)
                <div class="review-item">
                    <div class="review-header">
                        <div>
                            <div class="review-author">{{ $review->user->name }}</div>
                            <div class="review-date">{{ $review->created_at->format('d/m/Y H:i') }}</div>
                        </div>
                        @if (auth()->check() && auth()->id() === $review->user_id)
                            <button type="button" class="review-delete" onclick="deleteReview({{ $review->id }})">Remover</button>
                        @endif
                    </div>
                    <div class="review-rating">
                        @for ($i = 1; $i <= 5; $i++)
                            <span class="star @if ($i <= $review->rating) filled @else empty @endif">★</span>
                        @endfor
                    </div>
                </div>
            @endforeach
        </div>
    @endif
</div>

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
@endsection

@section('extra-js')
<script>
    // Star rating selector
    const starButtons = document.querySelectorAll('.star-btn');
    const ratingInput = document.getElementById('ratingInput');

    starButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const rating = this.dataset.rating;
            ratingInput.value = rating;

            starButtons.forEach(b => {
                b.classList.remove('selected');
                b.style.color = '#ddd';
            });

            for (let i = 0; i < rating; i++) {
                starButtons[i].classList.add('selected');
                starButtons[i].style.color = '#ffc107';
            }
        });

        btn.addEventListener('mouseenter', function(e) {
            e.preventDefault();
            const rating = this.dataset.rating;
            starButtons.forEach((b, index) => {
                if (index < rating) {
                    b.style.color = '#ffc107';
                    b.style.transform = 'scale(1.2)';
                } else {
                    b.style.color = '#ddd';
                    b.style.transform = 'scale(1)';
                }
            });
        });
    });

    document.getElementById('starSelector').addEventListener('mouseleave', function() {
        const currentRating = ratingInput.value;
        starButtons.forEach((b, index) => {
            if (index < currentRating) {
                b.style.color = '#ffc107';
                b.style.transform = 'scale(1)';
            } else {
                b.style.color = '#ddd';
                b.style.transform = 'scale(1)';
            }
        });
    });

    // Form validation
    document.getElementById('reviewForm').addEventListener('submit', function(e) {
        if (ratingInput.value === '0') {
            e.preventDefault();
            alert('❌ Você deve selecionar uma nota!');
        }
    });

    // Delete modals
    function showDeleteModal() {
        document.getElementById('deleteModal').classList.add('show');
    }

    function closeDeleteModal() {
        document.getElementById('deleteModal').classList.remove('show');
    }

    function confirmDelete() {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = `/artists/{{ $artist->id }}`;
        form.innerHTML = `
            @csrf
            @method('DELETE')
        `;
        document.body.appendChild(form);
        form.submit();
    }

    function deleteReview(reviewId) {
        if (confirm('Tem certeza que deseja remover sua avaliação?')) {
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = `/reviews/${reviewId}`;
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
