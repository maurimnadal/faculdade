<h1>Cards</h1>

<form action="{{ route("cards.store") }}" method="post" enctype="multipart/form-data">
    @csrf
    <input type="text" name="name" placeholder="Name">
    <br>
    <select name="type">
        <option value="fire">Fire</option>
        <option value="electric">Electric</option>
    </select>
    <br>
    <input type="file" name="picture">
    <br>
    <input type="text" name="description" placeholder="Description">
    <br>
    <input type="submit" value="Save">
</form>