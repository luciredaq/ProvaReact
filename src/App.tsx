import {Cartao} from "./components/cartoes/"
import { Counter } from "./components/Counter"

function App() {
  return (
    <>
    <h1>ProvaProway</h1>
    <Cartao descricao="Olá! Me chamo Luciano e sou uma pessoa sempre em busca de novos desafios e aprendizados.
     Gosto de explorar novas ideias, compartilhar conhecimento e trocar experiências.
     Sou movido(a) por curiosidade, criatividade e determinação.
     Acredito que cada dia é uma nova oportunidade para crescer e evoluir.
     Vamos conectar e construir algo incrível juntos!" titulo="Luciano Hostin" />

    <Counter/>
    </>
  )
}

export default App
