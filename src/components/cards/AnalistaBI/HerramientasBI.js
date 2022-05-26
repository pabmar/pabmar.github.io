import React from "react";
import cardData from "../cardData.json"

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const HerramientasBI = () =>{

const dataHerramientas =  cardData.BITOOLS
let dataGraph = []
for (let i = 0; i < dataHerramientas.length; i++) {
    const element = {
        name: dataHerramientas[i].tool,
        Exp: dataHerramientas[i].valor,
 
      }
    
    ;
    dataGraph.push(element)
 
}
 
const getIntroOfPage = (label) => {

    for (let index = 0; index < dataHerramientas.length; index++) {
        const element = dataHerramientas[index];
        if(label === dataHerramientas[index].tool){
            return dataHerramientas[index].expertise;
        }
    }
    
    return '';
  };
   
  const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    for (let index = 0; index < dataHerramientas.length; index++) {
        const element = dataHerramientas[index];
        if(label === dataHerramientas[index].tool){
            return (
                <div className="custom-tooltip">
                  <p className="label">{`${label} : ${payload[0].value}`}</p>
                  <p className="intro">{getIntroOfPage(label)}</p>
                  <p className="desc">{dataHerramientas[index].detail}</p>
                </div>
              );
        }
    }
    
  }

  return null;
};

   
      return (<div style={{ width: "70vw", height: "80vh" ,marginLeft:"10"}}>

        <ResponsiveContainer >
          <BarChart
            width={500}
            height={300}
            data={dataGraph}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="Exp" fill="#8884d8" />
          </BarChart>
         
        </ResponsiveContainer>
      </div>
          
 
 
      );
    
}

export default HerramientasBI