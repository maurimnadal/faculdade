<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Http\Requests\StoreArtistRequest;
use Illuminate\Http\Request;

class ArtistController extends Controller
{
    public function index(Request $request)
    {
        $sortBy = $request->input('sort', 'rating_desc');
        $genre = $request->input('genre');
        $search = $request->input('search');

        $query = Artist::withCount('reviews')
            ->with('reviews')
            ->selectRaw('artists.*, AVG(reviews.rating) as avg_rating')
            ->leftJoin('reviews', 'artists.id', '=', 'reviews.artist_id')
            ->groupBy('artists.id');

        if ($search) {
            $query->where('name', 'like', '%' . $search . '%');
        }

        if ($genre) {
            $query->where('genre', $genre);
        }

        switch ($sortBy) {
            case 'rating_desc':
                $query->orderByRaw('AVG(reviews.rating) DESC NULLS LAST');
                break;
            case 'rating_asc':
                $query->orderByRaw('AVG(reviews.rating) ASC NULLS LAST');
                break;
            case 'popularity_desc':
                $query->orderBy('reviews_count', 'DESC');
                break;
            case 'popularity_asc':
                $query->orderBy('reviews_count', 'ASC');
                break;
            default:
                $query->orderByRaw('AVG(reviews.rating) DESC NULLS LAST');
        }

        $artists = $query->paginate(12);
        $genres = Artist::distinct()->pluck('genre')->sort();

        return view('artists.index', compact('artists', 'genres', 'sortBy', 'genre', 'search'));
    }

    public function create()
    {
        return view('artists.create');
    }

    public function store(StoreArtistRequest $request)
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('artists', 'public');
            $data['image'] = $path;
        }

        Artist::create($data);

        return redirect()->route('artists.index')->with('success', 'Artista criado com sucesso!');
    }

    public function show(Artist $artist)
    {
        $artist->load('reviews.user');
        return view('artists.show', compact('artist'));
    }

    public function edit(Artist $artist)
    {
        return view('artists.edit', compact('artist'));
    }

    public function update(StoreArtistRequest $request, Artist $artist)
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('artists', 'public');
            $data['image'] = $path;
        }

        $artist->update($data);

        return redirect()->route('artists.index')->with('success', 'Artista atualizado com sucesso!');
    }

    public function destroy(Artist $artist)
    {
        $artist->delete();
        return redirect()->route('artists.index')->with('success', 'Artista deletado com sucesso!');
    }
}
