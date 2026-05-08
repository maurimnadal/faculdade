<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreArtistRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $artistId = $this->route('artist')?->id;

        return [
            'name' => ['required', 'string', 'max:255', Rule::unique('artists')->ignore($artistId)],
            'genre' => ['required', 'string', 'max:100'],
            'biography' => ['nullable', 'string', 'max:1000'],
            'image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'O nome do artista eh obrigatorio.',
            'name.unique' => 'Este artista ja existe no catalogo.',
            'genre.required' => 'O genero musical eh obrigatorio.',
            'image.image' => 'O arquivo deve ser uma imagem valida.',
        ];
    }
}
