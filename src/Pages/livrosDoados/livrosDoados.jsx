import S from './livrosDoados.module.scss'
import livro from '../../assets/livro_Protagonista.png'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function livrosDoados(){
    const [livros, setLivros] = useState([])

    const getLivros = async () => {
        try {
            const response = await axios.get("https://projeto-api-2-zkp9.onrender.com/livros")
            setLivros(response.data)    
        } catch (error) {
            console.error("Erro ao buscar livro:", error)
        }
    }

    useEffect (() =>{
        getLivros()
    }, [])

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

                {livros.map((item) => (
                    <article key={item.id}>
                        <img src={item.imagem_url} alt={item.titulo} />
                        <h3>{item.titulo}</h3>
                        <p>{item.autor}</p>
                        <p>{item.categoria}</p>
                    </article>
                ))}
            </section>
        </section>


    )
}