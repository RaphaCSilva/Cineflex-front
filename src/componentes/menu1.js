import React, { useEffect } from "react";
import axios from "axios";
import Filme from "./filme";

export default function Menu(props){
  
  const [filmes, setFilmes] = React.useState([]);
  useEffect(() => {
    const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    request.then( response => {
      setFilmes(response.data);
    });
  }, []);
     

    return(
      <>
        <div className="topo">
          <h2>
            Selecione o filme
          </h2>
        </div>  
        <div className="filmes">
          {filmes.map((filme, index) => <Filme srcimg = {filme.posterURL} key = {index} />)}
        </div>
      </>
    );
}