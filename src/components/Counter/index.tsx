import { useState } from "react";
import style from "./Counter.module.css"

function Counter(){
    const [clicked, setClicked] = useState(0)

    const addButton = () => {
        setClicked(clicked + 1)
    }

    const decrementarButton = () => {
        setClicked(clicked - 1)
    }

    return (
        <>

        <div className={style.Numero}>
        <h2>{clicked}</h2>
        </div>

        <div className={style.Botao}>
        <button className={style.Add} onClick={addButton}>Aumentar</button>
        <button className={style.Menos} onClick={decrementarButton}>Diminuir</button>
        </div>
        </>
    )
}

export {Counter}