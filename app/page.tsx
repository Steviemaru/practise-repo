"use client"
import { useEffect } from "react"; 
import { useAppSelector } from "../lib/hooks";
import BarChart from "./components/BarChart";
import CurrencyCarousel from "./components/CurrencyCarousel";

const InitialCall = async ()=> {
  const currency = useAppSelector((state) => state.currencySelector.currency );
  const API_KEY="CG-VFS3YbUpmcb6ErDZ1UevHwSv";
  const API_ROOT = "https://api.coingecko.com/api/v3/"; 
  const ENDPOINT = "x_cg_demo_api_key=";
  const COIN_LIST = "coins/markets";
  const options = {method: 'GET', headers: {accept: 'application/json'}};
    try {
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
      console.log( "COin LISt");
    } catch (error) {
      console.error(error);
    }
  }

export default function Home() {
  


  return (
<div className="flex flex-col justify-center items-center">
<CurrencyCarousel/>
<BarChart/>
</div>  
  );
}
