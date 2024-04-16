import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import ResposList from "./components/ReposList"
import { useState } from "react"

function App() {
    
    const [nomeUsuario, setNomeUsuario ] = useState('')
    return (

    <>
        <div className="campo">
            <h1 className="campoTitulo">Busca de usuário GitHub</h1>
        <input className="input" type="text" placeholder="Digite o nome do usuário:" onBlur={(e) => setNomeUsuario(e.target.value)}/>

        </div>
        {nomeUsuario.length > 4 && (
            <>

                <Perfil nomeUsuario={nomeUsuario}/>
                <ResposList nomeUsuario={nomeUsuario}/>

            </>
        )}

    </>
    
    
    )
}

export default App