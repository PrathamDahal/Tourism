import React from "react";
import { stayOptions } from './../../Data/stayOptions';

const StayOptions = () => {
  return (
    <div className=" bg-gray-200 -mt-[15px] mb-10 py-2 px-8">
      <div className="flex justify-around gap-8 p-4">
        {stayOptions.map((option, index) => (
          <div key={index} className="flex flex-col p-1 items-center">
            <div
              className="w-14 h-14 flex items-center justify-center rounded-full"
              style={{ backgroundColor: option.color }}
            >
              <span className="text-white text-[28px]">{option.icon()}</span>
            </div>
            <span className="mt-2 text-base font-Open">{option.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StayOptions;
