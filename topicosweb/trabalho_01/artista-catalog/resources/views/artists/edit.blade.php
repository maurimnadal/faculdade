@extends('layouts.app')

@section('title', 'Editar ' . $artist->name)

@section('extra-css')
<style>
    .form-container {
        max-width: 600px;
        margin: 40px auto;
        background: white;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }

    .form-container h1 {
        color: #667eea;
        margin-bottom: 30px;
        text-align: center;
    }

    .form-group {
        margin-bottom: 25px;
    }

    .form-group label {
        display: block;
        margin-bottom: 10px;
        font-weight: 600;
        color: #333;
    }

    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 12px;
        border: 2px solid #eee;
        border-radius: 5px;
        font-family: inherit;
        font-size: 14px;
        transition: border-color 0.3s;
    }

    .form-group input:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .form-group textarea {
        resize: vertical;
        min-height: 100px;
    }

    .form-group.has-error input,
    .form-group.has-error textarea {
        border-color: #f94144;
    }

    .error-list {
        list-style: none;
        margin-top: 5px;
    }

    .error-list li {
        color: #f94144;
        font-size: 13px;
        margin-bottom: 3px;
    }

    .current-image {
        width: 150px;
        height: 150px;
        border-radius: 5px;
        object-fit: cover;
        margin: 10px 0;
    }

    .image-preview {
        max-width: 200px;
        max-height: 200px;
        border-radius: 5px;
        margin-top: 10px;
        display: none;
    }

    .form-actions {
        display: flex;
        gap: 10px;
        margin-top: 30px;
    }

    .form-actions button,
    .form-actions a {
        flex: 1;
        padding: 12px;
        border: none;
        border-radius: 5px;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.3s;
        text-align: center;
    }

    .btn-submit {
        background: #667eea;
        color: white;
    }

    .btn-submit:hover {
        background: #001f3f;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }

    .btn-cancel {
        background: #ddd;
        color: #333;
    }

    .btn-cancel:hover {
        background: #ccc;
    }
</style>
@endsection

@section('content')
<div class="form-container">
    <h1>✏️ Editar Artista</h1>

    <form action="{{ route('artists.update', $artist) }}" method="POST" enctype="multipart/form-data" id="artistForm">
        @csrf
        @method('PUT')

        <div class="form-group @error('name') has-error @enderror">
            <label for="name">Nome do Artista *</label>
            <input type="text" id="name" name="name" value="{{ old('name', $artist->name) }}" required>
            @error('name')
                <ul class="error-list">
                    <li>{{ $message }}</li>
                </ul>
            @enderror
        </div>

        <div class="form-group @error('genre') has-error @enderror">
            <label for="genre">Gênero Musical *</label>
            <input type="text" id="genre" name="genre" placeholder="Ex: Rock, Pop, Jazz..." value="{{ old('genre', $artist->genre) }}" required>
            @error('genre')
                <ul class="error-list">
                    <li>{{ $message }}</li>
                </ul>
            @enderror
        </div>

        <div class="form-group">
            <label for="biography">Biografia (opcional)</label>
            <textarea id="biography" name="biography" placeholder="Escreva uma breve descrição do artista...">{{ old('biography', $artist->biography) }}</textarea>
        </div>

        <div class="form-group @error('image') has-error @enderror">
            <label for="image">Foto do Artista (opcional)</label>
            
            @if ($artist->image)
                <div>
                    <p style="color: #666; font-size: 13px;">Imagem atual:</p>
                    <img src="{{ asset('storage/' . $artist->image) }}" alt="{{ $artist->name }}" class="current-image">
                </div>
            @endif

            <input type="file" id="image" name="image" accept="image/*">
            <img id="imagePreview" class="image-preview" alt="Preview">
            @error('image')
                <ul class="error-list">
                    <li>{{ $message }}</li>
                </ul>
            @enderror
        </div>

        <div class="form-actions">
            <button type="submit" class="btn-submit">💾 Salvar Alterações</button>
            <a href="{{ route('artists.show', $artist) }}" class="btn-cancel">❌ Cancelar</a>
        </div>
    </form>
</div>
@endsection

@section('extra-js')
<script>
    // Validação no cliente
    const form = document.getElementById('artistForm');
    form.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value.trim();
        const genre = document.getElementById('genre').value.trim();

        if (!name) {
            e.preventDefault();
            alert('❌ O nome do artista é obrigatório!');
            return;
        }

        if (!genre) {
            e.preventDefault();
            alert('❌ O gênero musical é obrigatório!');
            return;
        }
    });

    // Preview da imagem
    document.getElementById('image').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const preview = document.getElementById('imagePreview');
                preview.src = event.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
</script>
@endsection
