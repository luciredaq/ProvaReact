import { JSX } from "react";
import styles from "./cartoes.module.css"

interface CartaoProps {
    titulo: string;
    descricao: string;
}

const Cartao = ({titulo,descricao}: CartaoProps): JSX.Element => {
    return (
        <div>
            <div className={styles.cartao}>
                <h2 className={styles.titulo}>{titulo}</h2>
                <p className={styles.descricao}>{descricao}</p>
            </div>

        </div>
    )
}

export {Cartao};