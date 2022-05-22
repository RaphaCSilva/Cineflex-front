import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Menu3(props){
  
  const [lugares, setLugares] = React.useState({});
  const [filme, setFilme] = React.useState({});
  const [horario, setHorario] = React.useState({});
  const {idSessao} = useParams();
 
  useEffect(() => {
    const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/showtimes/"+idSessao+"/seats");
    request.then( response => {
      setLugares(response.data);
      setFilme(response.data.movie);
      setHorario(response.data.day);
    });
  }, []);

  console.log(lugares);
  console.log(filme);
  return(
      <>
        <footer>
          <div className="caixinha">
            <img src= {filme.posterURL}/>
          </div>
          <h3>
            {filme.title}
          </h3>
          <h3>
            {horario.weekday} - {lugares.name}
          </h3>
        </footer>
      </>
    );
}