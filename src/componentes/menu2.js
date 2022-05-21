import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Horario from "./horario";

export default function Menu2(props){
  
  const [sessoes, setSessoes] = React.useState({});
  const {idfilme} = useParams(); 
  
  useEffect(() => {
    const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies/"+idfilme+"/showtimes");
    request.then( response => {
      setSessoes(response.data);
    });
  }, []);

  return(
      <>
        <div className="topo">
          <h2>
            Selecione o horário
          </h2>
        </div> 
        <div className="horarios">
          {(sessoes.days !== undefined) && sessoes.days.map((sessao, index) => <Horario diadasemana = {sessao.weekday} data = {sessao.date} key = {index} times = {sessao.showtimes}/>)}
        </div>
        <footer>
          <div className="caixinha">
            <img src= {sessoes.posterURL}/>
          </div>
          <h3>
            {sessoes.title}
          </h3>
        </footer> 
      </>
    );
}