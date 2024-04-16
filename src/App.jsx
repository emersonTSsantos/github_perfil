import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import ResposList from "./components/ReposList"
import { useState } from "react"

function App() {
    
    const [nomeUsuario, setNomeUsuario ] = useState('')
    return (

    <>
        <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

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