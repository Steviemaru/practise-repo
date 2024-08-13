"use client"

import {useEffect, useState} from "react";
import HalfCircle from "../../public/halfCircle.svg";
import NavButtons from "../components/NavButtons";
import CurrencyList from "../components/CurrencyList";
import SearchInput from "../components/SearchInput";
import BottomNavData from "./BottomNavData";
import { useAppSelector } from "../../lib/hooks";
import axios from "axios";

export default function Navbar() {
  const [navBarData, setNavBarData] = useState([]as string[]);
  const currency = useAppSelector((state) => state.currencySelector.currency );

  const InitialCall = async ()=> {
    const API_KEY = "CG-VFS3YbUpmcb6ErDZ1UevHwSv";
    const API_ROOT = "https://api.coingecko.com/api/v3/"; 
    const ENDPOINT = "x_cg_demo_api_key=";
    const COIN_LIST = "coins/markets";
    const options = {method: 'GET', headers: {accept: 'application/json'}}; 
      try {
      const { data } = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`, options)
      
      

const ethereum = data.map((crypto:any) => 
  crypto.id == "ethereum")

const bitcoin = data.filter((crypto:any) => 
      crypto.id == "bitcoin" 
)

let cryptoData = data;

      setNavBarData(cryptoData)
      // const { atl, market_cap
      // } = data[0]
      
        console.log(cryptoData, "new test crypto")
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(()=>{
      InitialCall()
      }, [
      ]);
      useEffect(()=>{
    InitialCall()
    }, [currency]);
    // useEffect(()=>{
    //   InitialCall()
    //   }, [setCryptoData]);


  return (
    <div className=" bg-black bg-opacity-20">
            <div className="flex px-10 py-4 justify-between">
            <div className="flex items-center">
              <NavButtons />
            </div>
            <div className="flex items-center gap-6 border-1">
              <SearchInput/>
              <div className="py-2 m-1 rounded-t-xl rounded-b-xl bg-slate-700">
                <CurrencyList />
              </div>
              <div className="rounded-t-xl rounded-b-xl bg-slate-700">
                <HalfCircle className=" py-0 m-2.5 bg-slate-700 text-white h-7 w-7" />
              </div>
            </div>
            </div>
            <div>
            <BottomNavData cryptoData={navBarData} />
            </div>
          </div>
  );
}