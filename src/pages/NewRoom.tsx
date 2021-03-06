// import { useContext } from "react";
import { Link } from "react-router-dom";

import illustratrionImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import "../styles/auth.scss";

import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

export function NewRoom() {
  // const { user } = useAuth();
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustratrionImg}
          alt="ilustração simbolizando perguntas e respostas"
        />
        <strong>Crei salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique Aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
