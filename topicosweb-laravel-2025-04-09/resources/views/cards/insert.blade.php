<h1>Cartas</h1>

<form action="{{ route("cartas.gravar") }}" method="post" enctype="multipart/form-data">
    @csrf
    <input type="text" name="name" placeholder="Nome">
    <br>
    <select name="type">
        <option value="fire">Fogo</option>
        <option value="electric">Elétrico</option>
    </select>
    <br>
    <input type="file" name="picture">
    <br>
    <input type="text" name="description" placeholder="Descrição">
    <br>
    <input type="submit" value="Gravar">
</form>