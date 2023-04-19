//TP4 => Tranformar página HTML do TP3 para que fique componentizada
//TP5 => Utilizar uma API (no caso, viacep.com.br)

import './App.css';
import FormCadastro from './FormCadastro';

export default function App() {

  return (
    <div className="App">
        
      <section className="form-container">
        <FormCadastro/>
      </section>
    </div>
  );
}

