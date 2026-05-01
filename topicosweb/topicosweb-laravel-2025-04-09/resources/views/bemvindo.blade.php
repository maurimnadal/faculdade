<h1>Página Inicial</h1>
@if (auth()->user())
    Olá, {{auth()->user()->name}}. Você está autenticado.
    <a href="{{ route('logout')}}">Sair</a>
@else
    Você <strong>não</strong> está autenticado
@endif
