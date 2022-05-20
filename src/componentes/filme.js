import React, { useEffect } from "react";

export default function Filme(props){
  var {srcimg} = props;
  return (
    <>
    <div className="filme">
        <img src= {srcimg} />
    </div>
    </>
  );
}
