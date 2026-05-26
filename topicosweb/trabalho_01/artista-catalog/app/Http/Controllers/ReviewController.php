<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Http\Requests\StoreReviewRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    public function store(StoreReviewRequest $request)
    {
        $validated = $request->validated();
        $validated['user_id'] = Auth::id();

        Review::updateOrCreate(
            ['user_id' => Auth::id(), 'artist_id' => $validated['artist_id']],
            ['rating' => $validated['rating']]
        );

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'message' => 'Avaliacao salva!']);
        }

        return redirect()->back()->with('success', 'Avaliacao salva com sucesso!');
    }

    public function destroy(Review $review, Request $request)
    {
        if ($review->user_id !== Auth::id()) {
            abort(403);
        }
        $review->delete();

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'message' => 'Avaliacao removida!']);
        }

        return redirect()->back()->with('success', 'Avaliacao removida com sucesso!');
    }
}
