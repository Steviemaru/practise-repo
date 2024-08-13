"use client";
import { useState, useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { setCurrency } from "@/lib/features/currencySelector/currencySelectorSlice"; 

import UpArrow from  "../../public/upArrow.svg";
import DownArrow from  "../../public/downArrow.svg";

const currencyList = [{currency:"gbp",symbol:"£"}, {currency:"eur", symbol:"€"}, {currency:"usd",symbol:"$"}];



export default function CurrencyList() {
const [showDropdown, setShowDropdown] = useState(false);
// const [currency] = useState("GBP");
const dropDownRef = useRef<HTMLDivElement>(null);



const dispatch = useAppDispatch();
const currency = useAppSelector((state) => state.currencySelector.currency );
useEffect(() => {
  function handler({target}:MouseEvent):void {
    if(!dropDownRef.current?.contains(target as Node)) {
      setShowDropdown(false)
  }  
  }
  window.addEventListener('click', handler)
  return () => window.removeEventListener('click', handler)
}, [])


  return (
    <>
    <div ref={dropDownRef} onClick={()=>{setShowDropdown(!showDropdown)}} className="flex relative py-1 bg-slate-700 text-white" >
   
    {currency}
    <div>
      {showDropdown ? <UpArrow width="18"
    height="18"/> : <DownArrow width="18"
    height="18"/> }
    </div>
    </div>
    {showDropdown &&
        <div  className="absolute p-2 bg-slate-700 text-white" >
          {currencyList.map((item) => {
          return <div className=" flex">
            {/* <span>{item}</span> */}
            <option key={item.currency}onClick={()=>{dispatch(setCurrency(item.currency))}} className="hover:bg-green-300 ">{item.currency}</option>
          </div>;
          })}
        </div>}
     
    </>
  );
}
