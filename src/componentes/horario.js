import React, { useEffect } from "react";

export default function Horario(props){

    return (
          <div className="horario">
            <h4>
              {props.diadasemana} - {props.data}
            </h4>
              <div className="horas">
                <div className="caixalaranja">
                  <h5>
                    15:00
                  </h5>
                </div>
              <div className="caixalaranja">
                <h5>
                  15:00
                </h5>
              </div>
            </div>
          </div>
    );
}