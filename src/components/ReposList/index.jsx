import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ResposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(null)


    useEffect(() => {
        setEstaCarregando(true)
        setErro(null)

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('OPS. Ocorreu um erro, Usuário não encontrado...');
                }
                return res.json();
            })
            .then(resJson => {
                setTimeout(() => {
                    setRepos(resJson);
                    setEstaCarregando(false);
                }, 2000);
            })
            .catch(error => {
                setErro(error.message); 
                setEstaCarregando(false); 
            });
    }, [nomeUsuario]);

    // Verifica se ainda está carregando
    return (
        
        <>
        <div className="container">
        {estaCarregando ? (
            <h1>Carregando...</h1>
        ) :  erro ? (
            <h1 className={styles.erro}>{erro}</h1>
        ) : (
            <ul className={styles.list}>
                {repos.map(({id, name, language, html_url}) => (
                    <li className={styles.listItem} key={id}>

                        <div className={styles.itemName}>
                            <b>Nome:</b> 
                            {name} 
                        </div>

                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b> 
                            {language} 
                        </div>


                        <a className={styles.itemLink} target="_blank" href={html_url}> Visitar no github</a> 
                </li>
                ))}
            </ul>

        ) }
        
        

        </div>
        </>
        
    );
};

export default ResposList;
