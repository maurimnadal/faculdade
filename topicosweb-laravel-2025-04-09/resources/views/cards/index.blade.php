<h1>Cards</h1>

<div>
    <a href="{{ route("cards.create") }}">👌 Add Card</a>
</div>

<div>
    Card list goes here
</div>

<div>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Image</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        @foreach ($cards as $card)
        <tr>
            <td>{{ $card["id"] }}</td>
            <td>{{ $card["name"] }}</td>
            <td>
                <img src="{{ asset("storage/energies/".$card["type"].".png") }}" width="22">
            </td>
            <td><img src="{{ asset("storage/".$card["picture"])}}" width="40"></td>
            <td>{{ $card["description"] }}</td>
            <td>
                <a href="{{ route("cards.edit", $card->id) }}">Edit</a>
            </td>
            <td>
                <a href="{{ route("cards.delete", $card->id) }}">Delete</a>
            </td>
        </tr>
        @endforeach
    </table>
</div>