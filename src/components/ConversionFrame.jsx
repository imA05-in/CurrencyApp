import { useSelector } from "react-redux";

export default function ConversionFrame({ label = "text", amount = 94 }) {

 
  return (
    
    <div className="bg-neutral-700 border-2 border-neutral-600 p-2 rounded-2xl min-w-30 items-center w-full ">
      <div className="text-neutral-50">{label}</div>
      <div
        className={`text-lime-500 font-medium md:text-2xl`}
      >
        {amount}
      </div>
    </div>
  );
}
