import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Filme(props){
  
  var {srcimg, id} = props;
  const {ide} = useParams();
  
  return (
    <>
     <Link to="/sessoes">
     <div className="filme">
        <img src= {srcimg}/>
    </div>
    </Link>
    </>
  );
}
