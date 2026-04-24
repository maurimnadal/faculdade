<h1>Edit Card</h1>

<form action="{{ route("cards.update", $card->id) }}" method="post" enctype="multipart/form-data">
    @csrf
    @method("PUT")
    <input type="text" name="name" placeholder="Name" value="{{ $card->name}}">
    <br>
    <select name="type">
        <option value="fire"  {{ $card->type === "fire" ? "selected" : ""}}>Fire</option>
        <option value="electric" {{ $card->type === "electric" ? "selected" : ""}}>Electric</option>
    </select>
    <br>
    @if($card->picture)
        <img src="{{ asset('storage/' . $card->picture) }}" width="100" alt="Current image">
        <p>Current image</p>
    @endif
    <input type="file" name="picture" accept="image/*">
    <br>
    <input type="text" name="description" placeholder="Description" value="{{ $card->description }}">
    <br>
    <input type="submit" value="Update">
    <a href="{{ route("cards.index") }}">Cancel</a>
</form>