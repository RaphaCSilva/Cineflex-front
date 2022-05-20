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
  console.log(filmes);     
    return(
      <>
        <div className="topo">
          <h2>
            Selecione o filme
          </h2>
        </div>  
        <div className="filmes">
          <div className="filme">
            <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"/>
          </div>
        </div>
      </>
    );
}