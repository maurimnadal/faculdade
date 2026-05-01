<h1>Pagina de Login</h1>
<hr>
@if (session("erro"))
<h2>{{session("erro")}}</h2>
@endif

<form action="{{ route('login') }}" method="post">
    @csrf
    <input type="text" name="user">
    <br>
    <input type="password" name="pass">
    <br>
    <input type="submit" value="Acessar">
</form>