import React, { useEffect } from "react";

export default function Assento(props){
  
  const [corbolinha, setCorbolinha] = React.useState("");

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
      props.voltaid(props.id);
    }else if(corbolinha === "bolinha azul"){
      setCorbolinha("bolinha cinza");
      props.removeid(props.id);   
    }else{
      alert("Esse assento não está disponível");
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