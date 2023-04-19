import Input from "./Input";
import { useState } from "react";

export default function FormCadastro() {
    const [endereco, setEndereco] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    function OnBlurCep(ev){
        const cep = ev.target.value;

        if(cep.length === 8 ||
        (cep.length === 9 && cep.includes("-", 5))){
        fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then((res)=> res.json())
        .then((data) => {

            if(!("erro" in data)){
            setEndereco(data.logradouro);
            setEstado(data.uf);
            setCidade(data.localidade);
        
        }})
        
        }
    }
    return(
        <div className='div-container'>
            <h2 className='titulo'>Criar conta</h2>
            <p className='subtitulo'>Preencha o formulário abaixo para criar sua conta na LutasAcessoriosPro.com</p>
       
            <Input inputId="nome-input" inputLabel="Nome completo" 
                 inputPlaceholder="Seu nome completo" inputClass="input-s" />

            <Input inputId="email-input" inputLabel="E-mail" 
                 inputPlaceholder="Seu e-mail" inputClass="input-s"/>
       
            <div className='div-input-block'>

                <Input inputId="cep-input" inputLabel="CEP" 
                    inputPlaceholder="Seu CEP" inputClass="input-b"
                    inputFunction={OnBlurCep}
                    />

                <Input inputId="cidade-input" inputLabel="Cidade" 
                    inputPlaceholder="Sua cidade" inputClass="input-b"
                    inputValue={cidade} inputOnChange={(e) => setCidade(e.target.value)}
                    />

                <Input inputId="estado-input" inputLabel="Estado" 
                    inputPlaceholder="Seu estado" inputClass="input-b"
                    inputValue={estado} inputOnChange={(e) => setEstado(e.target.value)}
                        />

                <Input inputId="pais-input" inputLabel="País" 
                    inputPlaceholder="Seu país" inputClass="input-b"/>
            </div>

            <Input inputId="endereco-input" inputLabel="Endereço" 
                inputPlaceholder="Seu endereço" inputClass="input-s"
                inputValue={endereco} inputOnChange={(e) => setEndereco(e.target.value)}
                />

            <div className='btn'>
                <form >
                    <input type="submit" value="Cadastrar" />
                </form>
            </div>

           
        </div>
    )
} 