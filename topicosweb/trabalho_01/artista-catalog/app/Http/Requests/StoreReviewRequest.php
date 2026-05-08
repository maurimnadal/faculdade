<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreReviewRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'artist_id' => ['required', 'exists:artists,id'],
            'rating' => ['required', 'integer', 'min:0', 'max:5'],
        ];
    }

    public function messages(): array
    {
        return [
            'rating.required' => 'Voce deve selecionar uma nota.',
            'rating.min' => 'A nota deve estar entre 0 e 5 estrelas.',
            'rating.max' => 'A nota deve estar entre 0 e 5 estrelas.',
        ];
    }
}
