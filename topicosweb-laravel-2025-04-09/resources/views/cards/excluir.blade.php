<h1>Cartas</h1>
<p>certeza? {{$card->name}}</p>

<form action="{{ route("cartas.deletar", $card->id) }}" method="post">
    @csrf
    @method("delete")
    <input type="submit" value="Sim, Excluir">
    <a href="{{ route("cartas.index") }}">Cancelar</a>
</form>