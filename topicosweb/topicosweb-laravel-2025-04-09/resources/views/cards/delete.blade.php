<h1>Cards</h1>
<p>Are you sure? {{$card->name}}</p>

<form action="{{ route("cards.destroy", $card->id) }}" method="post">
    @csrf
    @method("delete")
    <input type="submit" value="Yes, Delete">
    <a href="{{ route("cards.index") }}">Cancel</a>
</form>