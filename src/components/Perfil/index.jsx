import styles from './Perfil.module.css';
import { useState } from 'react';

const Perfil = ({ nomeUsuario }) => {
    const [erro, setErro] = useState(false);

    return (
        <header className={styles.header}>
            {erro ? (
                <img className={styles.avatar} src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-1024.png" alt="foto do perfil" />
            ) : (
                <img
                    className={styles.avatar}
                    src={`https://github.com/${nomeUsuario}.png`}
                    alt="foto do perfil"
                    onError={() => setErro(true)} // Define erro como true quando a imagem não puder ser carregada
                />
            )}
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    );
};

export default Perfil;

