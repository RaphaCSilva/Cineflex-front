import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Filme(props){
  
  var {srcimg, id} = props;
  
  return (
    <>
     <div className="filme">
      <Link to= {`/sessoes/${id}`}>
        <img src= {srcimg}/>
      </Link>
    </div>
    
    </>
  );
}
