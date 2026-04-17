<h1>Cartas</h1>

<div>
    <a href="{{ route("cartas.inserir") }}">👌 Adicionar Carta</a>
</div>

<div>
    Aqui fica a lista de cartas
</div>

<div>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Foto</th>
            <th>Descrição</th>
            <th>Editar</th>
            <th>Excluir</th>
        </tr>
        @foreach ($cards as $card)
        <tr>
            <td>{{ $card["id"] }}</td>
            <td>{{ $card["name"] }}</td>
            <td>
                <img src="{{ asset("storage/energias/".$card["type"].".png") }}" width="22">
            </td>
            <td><img src="{{ asset("storage/".$card["picture"])}}" width="40"></td>
            <td>{{ $card["description"] }}</td>
            <td>
                <a href="{{ route("cartas.editar", $card["id"]) }}">Editar</a>
            </td>
            <td>
                <a href="{{ route("cartas.excluir", $card["id"]) }}">Deletar</a>
            </td>
        </tr>
        @endforeach
    </table>
</div>