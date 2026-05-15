@extends('layouts.app')

@section('title', 'Login')

@section('extra-css')
<style>
    .auth-container {
        max-width: 400px;
        margin: 60px auto;
        background: white;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }

    .auth-container h1 {
        color: #667eea;
        text-align: center;
        margin-bottom: 30px;
        font-size: 28px;
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 600;
        color: #333;
    }

    .form-group input {
        width: 100%;
        padding: 12px;
        border: 2px solid #eee;
        border-radius: 5px;
        font-size: 14px;
        transition: border-color 0.3s;
    }

    .form-group input:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .form-group.has-error input {
        border-color: #f94144;
    }

    .error-list {
        list-style: none;
        margin-top: 5px;
        padding: 0;
    }

    .error-list li {
        color: #f94144;
        font-size: 13px;
        margin-bottom: 3px;
    }

    .submit-btn {
        width: 100%;
        padding: 12px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 5px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        margin-top: 10px;
    }

    .submit-btn:hover {
        background: #764ba2;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }

    .auth-link {
        text-align: center;
        margin-top: 20px;
        color: #666;
    }

    .auth-link a {
        color: #667eea;
        text-decoration: none;
        font-weight: 600;
    }

    .auth-link a:hover {
        text-decoration: underline;
    }
</style>
@endsection

@section('content')
<div class="auth-container">
    <h1>🔐 Login</h1>

    <form action="{{ route('login') }}" method="POST">
        @csrf

        <div class="form-group @error('email') has-error @enderror">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" value="{{ old('email') }}" required>
            @error('email')
                <ul class="error-list">
                    <li>{{ $message }}</li>
                </ul>
            @enderror
        </div>

        <div class="form-group @error('password') has-error @enderror">
            <label for="password">Senha</label>
            <input type="password" id="password" name="password" required>
            @error('password')
                <ul class="error-list">
                    <li>{{ $message }}</li>
                </ul>
            @enderror
        </div>

        <button type="submit" class="submit-btn">Entrar</button>
    </form>

    <div class="auth-link">
        Não tem conta? <a href="{{ route('register') }}">Cadastre-se</a>
    </div>
</div>
@endsection
