"use client"
import {useRef, useEffect} from "react";
import {Chart} from "chart.js/auto"

export default function BarChart() {
const chartRef = useRef(null)

useEffect(()=>{
 if(chartRef.current){
  if(chartRef.current.chart){
  chartRef.current.chart.destroy();
  }

  const context = chartRef.current.getContext("2d")

  const newChart = new Chart(context, {
type:"line",
data: {
  labels: ['Red', 'Blue', 'Purple', 'Yellow'],
datasets: [
  {
    label:"Info",
    data: [345, 655, 235, 45, 555, 223, 555, 998, 445, 332],
    backgroundColor:'red' ,
    borderColor:'blue',
    borderWidth:1,
    fill: true,
  },
],
},
options:{
  tension:0.6,
  scales:{
    x:{
      type:"category"
    },
    y: {
      beginAtZero: true
    }
  }
}
  });
  chartRef.current.chart = newChart
}


}, []);


  return (
<div style={{position:"relative", width:"40vw", height:"80vw" }}>
  <canvas ref={chartRef}/>
</div>




    
  );
}
