"use client";

import React from "react";
import Image from "next/image";
import PercentageBar from "./PercentageBar";

interface Props {
  coinData: any;
  coin: string;
  hasImage:  boolean
}

function PercentageDisplayItem({ coinData, coin, hasImage }: Props) {
  return coinData.map((data: any) => {
    if (data.id == coin) {
      return (
        <div
          className="flex gap-2 items-center py-2 px-8 border-r-4 border-grey-500 relative"
>
         { hasImage ?  <Image src={` ${hasImage ? data.image : "/" }`} width={20} height={20} alt="coin-logo" /> : <span>no image</span> }
          <span key={data.atl}>{`${data.atl.toFixed(2)}%`}</span>
          <PercentageBar
            key={data.id}
            fill={"bg-blue-700"}
            progress={parseFloat(data.atl)}
          />
        </div>
      );
    }
  });
}

export default PercentageDisplayItem;
