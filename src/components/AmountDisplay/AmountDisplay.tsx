import React from "react";

export interface TipAmountDisplayProps {
  label: string;
  amount: number;
}

export const TipAmountDisplay: React.FC<TipAmountDisplayProps> = ({
  label,
  amount,
}) => {
  return (
    <div className="  w-full font-bold font-['Space_Mono'] grid grid-cols-[auto_1fr] items-end m-[20px_10px] p-2.5 bg-primary-color rounded-[5px] max-w-[566px]">
      <div className="text-[1.25rem] font-normal text-white min-w-[124px] text-left">
        {label} <br />/ person
      </div>
      <div
        className={`text-right font-bold text-secondary-color overflow-x-auto 
                    text-[3rem] xl:text-[2.8rem] lg:text-[2.5rem] md:text-[2.3rem] sm:text-[1.4rem]`}
      >
        ${amount.toFixed(2)}
      </div>
    </div>
  );
};
