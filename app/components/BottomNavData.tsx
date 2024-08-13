"use client"

import {useEffect} from "react";
import Image from 'next/image'
import { useAppSelector } from "../../lib/hooks";
import tw from "tailwind-styled-components";
import PercentageBar from "./PercentageBar";
import PercentageDisplayItem from "./PercentageDisplayItem";
import axios from "axios";


const BottomNavItem = tw.div`
flex
gap-2
items-center
py-2
px-8

border-r-4
border-grey-500
relative
`

interface Props  {
  cryptoData:any
}

export default function BottomNavData({cryptoData} :Props) {
 const coinData =  cryptoData.filter(
    (data:any)=>{
      if(data.id == "ethereum"){
        return data;
        }else if(data.id == "bitcoin") {
         return data
        }
      return
    }
  )
  return (
    <div className="flex p-3 justify-start gap-3 border border-opacity-10 border-black">
    <BottomNavItem>  
coins:
</BottomNavItem>
<BottomNavItem>
Exchange 
</BottomNavItem>
<BottomNavItem>

</BottomNavItem>
<PercentageDisplayItem hasImage={false} coin={"bitcoin"} coinData={coinData}/> 
<PercentageDisplayItem hasImage coin={"bitcoin"} coinData={coinData}/> 
<PercentageDisplayItem hasImage coin={"ethereum"} coinData={coinData}/> 

    </div>
  );
}