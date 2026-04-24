<h1>Cartas Editar</h1>

<form action="{{ route("cartas.atualizar", $card->id) }}" method="post" enctype="multipart/form-data">
    @csrf
    @method("PUT")
    <input type="text" name="name" placeholder="Nome" value="{{ $card->name}}">
    <br>
    <select name="type">
        <option value="fire"  {{ $card->type === "fire" ? "selected" : ""}}>Fogo</option>
        <option value="electric" {{ $card->type === "electric" ? "selected" : ""}}>Elétrico</option>
    </select>
    <br>
    @if($card->picture)
        <img src="{{ asset('storage/' . $card->picture) }}" width="100" alt="Foto atual">
        <p>Foto atual</p>
    @endif
    <input type="file" name="picture" accept="image/*">
    <br>
    <input type="text" name="description" placeholder="Descrição" value="{{ $card->description }}">
    <br>
    <input type="submit" value="Gravar">
</form>