import React from 'react';
import { Link } from 'react-router-dom';

export default function PaginaCadastro() {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <form method="POST" className="border bg-secondary-subtle rounded p-5 text-center">
        <h1 className="mb-4">BoardTasks</h1>
        <p className="mb-4">📝 Cadastro</p>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="email" name="email"/>
          <label htmlFor="email">Nome completo</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="email" name="email"/>
          <label htmlFor="email">E-mail</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="senha" name="senha"/>
          <label htmlFor="senha">Senha</label>
        </div>
        <button className="btn btn-lg btn-primary w-100" type="submit">Cadastrar</button>
      </form>
      <div className="mt-3 text-center">
        <span>Já tem uma conta? </span>
        <Link to="/login" title="Clique aqui para se logar">Logar-se</Link>
      </div>
    </div>
  );
}
