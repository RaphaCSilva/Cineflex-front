import React, { useEffect } from "react";

export default function Horario(props){
    
    return (
          <div className="horario">
            <h4>
              {props.diadasemana} - {props.data}
            </h4>
              <div className="horas">
                {props.times.map((hora, index) => {
                    return (
                        <div className="caixalaranja" key = {hora.id}>
                        <h5>
                          {hora.name}
                        </h5>
                      </div>
                    );
                })}
            </div>
          </div>
    );
}