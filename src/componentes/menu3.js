import React from "react";
import axios from "axios";
import Assento from "./assento";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Menu3(props){
  
  const [lugares, setLugares] = React.useState([]);
  const [filme, setFilme] = React.useState({});
  const [dia, setDia] = React.useState({});
  const [horario, setHorario] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [cpf, setCPF] = React.useState("");
  const {idSessao} = useParams();
 
  useEffect(() => {
    const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/showtimes/"+idSessao+"/seats");
    request.then( response => {
      setLugares(response.data.seats);
      setFilme(response.data.movie);
      setDia(response.data.day);
      setHorario(response.data.name);
    });
  }, []);

  return(
      <>
        <div className="topo">
          <h2>
            Selecione o(s) assento(s)
          </h2>
        </div> 
        <div className="bolinhas">      
          {(lugares !== undefined) && lugares.map((lugar, index) => <Assento key = {index} numero = {lugar.name} disponibilidade = {lugar.isAvailable} id = {lugar.id}/>)}
        </div>
        <div className="amostra">
          <div className="separa">
            <div className="bolinha azul">
            </div>
            Selecionado
          </div>
          <div className="separa">
            <div className="bolinha cinza">
            </div>
            Disponivel
          </div>
          <div className="separa">
            <div className="bolinha amarela">
            </div>
            Indisponível
          </div>
        </div>
        <div className="inputs">
          <h4>
            Nome do comprador:
          </h4>
          <input placeholder="Digite seu nome..." value={nome} onChange={e => setNome(e.target.value)} />
          <h4>
            CPF do comprador:
          </h4>
          <input placeholder="Digite seu CPF..." value={cpf} onChange={e => setCPF(e.target.value)} />
          <button>
            <h5>
              Reservar assento(s)
            </h5>
          </button>
        </div>
        <footer>
          <div className="caixinha">
            <img src= {filme.posterURL}/>
          </div>
          <h3>
            {filme.title}
          </h3>
          <h3>
            {dia.weekday} - {horario}
          </h3>
        </footer>
      </>
    );
}