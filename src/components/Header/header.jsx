import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from '../../pages/inicio/Inicio';
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados';
import QueroDoar from '../../pages/queroDoar/QueroDoar';
import logoLivro from '../../assets/logoLivro.png';
import lupa from '../../assets/lupa.png';
import s from './header.module.scss';
export default function Header() {
  return (
    <BrowserRouter>
      <header className={s.header}>
        <section className={s.logoHeader}>
          <img
            src={logoLivro}
            alt="Imagem de ilustração de livro aberto com capa azul"
          />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={s.navHeader}>
          <ul>
            <li><Link className={s.link} to="/">Início</Link></li>
            <li><Link className={s.link} to="/livrosdoados">Livros Doados</Link></li>
            <li><Link className={s.link} to="/querodoar">Quero Doar</Link></li>
          </ul>
        </nav>
        <div className={s.barraDeBusca}>
                <input type="text" placeholder='O que você procura?' />
                <img src={lupa} alt="Ícone de Lupa" />
            </div>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/livrosdoados" element={<LivrosDoados />} />
        <Route path="/querodoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
