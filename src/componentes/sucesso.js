import React, { useEffect } from "react";
import { Navigate, useParams, useNavigate, useLocation, Link } from "react-router-dom";

export default function Sucesso(props){

  const location = useLocation();
  const [obj, setObj] = React.useState({});
  
  useEffect(() => {
    if(location.state !== null){
    setObj(location.state.telasucesso);
    }
  }, []);

    return (
      <>
        <div className="sucess">
          <h6>
            Pedido feito com sucesso!
          </h6>
        </div>
        <div className="caixota">
          <h6>
            Filme e sessão
          </h6>
          <p>
              {obj.titulo}
          </p>
          <p>
              {obj.dia} {obj.horario}
          </p>
        </div>
        <div className="caixota">
          <h6>
            Ingressos    
          </h6>
          {obj.id.map((id, index) => <p key={index}> Assento {id}</p>)}
        </div>
        <div className="caixota">
          <h6>
            Comprador    
          </h6>
          <p>
              Nome: {obj.nome}
          </p>
          <p>
              CPF: {obj.cpf}
          </p>
        </div>
        <div className="final">
        <Link to= {`/`}>
          <button>
            <h5>
              Voltar pra Home
            </h5>
          </button>
          </Link>
        </div>
      </>
  )
}
