import React, { useEffect } from "react";
import axios from "axios";

export default function Menu2(props){
  
  const [sessoes, setSessoes] = React.useState({});
  
  let id = 1;
  let arr =[];

  useEffect(() => {
    const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies/"+id+"/showtimes");
    request.then( response => {
      setSessoes(response.data);
    });
  }, []);
  
  arr = sessoes.days;

  return(
      <>
        <div className="topo">
          <h2>
            Selecione o horário
          </h2>
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