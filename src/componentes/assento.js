import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Assento(props){
  
  const [corbolinha, setCorbolinha] = React.useState("");
  const [arr, setArr] = React.useState([]);

  useEffect(() => {
    if(props.disponibilidade){
      setCorbolinha("bolinha cinza");
    }else{
      setCorbolinha("bolinha amarela");
    }
  }, []);

  function seleciona(){
    if(corbolinha === "bolinha cinza"){
      setCorbolinha("bolinha azul");
      setArr(props.id);
    }else if(corbolinha === "bolinha azul"){
      setCorbolinha("bolinha cinza");   
    }
  }

  return (
          <div className= {corbolinha} onClick= {seleciona} >
            <h6>
              {props.numero}
            </h6>
          </div>
    );  
}