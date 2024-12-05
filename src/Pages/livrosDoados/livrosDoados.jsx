import S from './livrosDoados.module.scss'
import livro from '../../assets/livro_Protagonista.png'

export default function livrosDoados(){
    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxBooks}>
                <article>
                <img src={livro} alt="Imagem do livro O protagonista" />
                <h3>O protagonista</h3>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
                </article>
                <article>
                <img src={livro} alt="Imagem do livro O protagonista" />
                <h3>O protagonista</h3>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
                </article>
            </section>
        </section>


    )
}