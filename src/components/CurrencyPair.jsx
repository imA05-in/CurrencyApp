import { useEffect, useState } from "react";
import useCurrencyHook from "../hooks/useCurrencyHook";
export default function CurrnecyPair({ fromCurr, toCurr }) {
  const [valColor, setValColor] = useState("red");
  const [val, setVal] = useState(0.0);
  const currencyRates = useCurrencyHook(fromCurr);
  const [fromVal, setFromVal] = useState("");
  const [toVal, setToVal] = useState("");

  useEffect(() => {
    const fromVal = currencyRates?.[fromCurr]?.[fromCurr];
    const toVal = currencyRates?.[fromCurr]?.[toCurr];
    setVal(Number((fromVal / toVal).toFixed(2)));
  }, [currencyRates, fromCurr, toCurr]);

  return (
    <div className="bg-[#2E2E2E] px-1 h-full flex items-center justify-center text-sm md:text rounded">
      <div className="text-[#9D9D9D] flex w-50 justify-center gap-1 ">
        <div className="">{`${fromCurr}/${toCurr}`}</div>
        <p
          className={`${val > 0 ? "text-[#42EB05]" : "text-[#FF4141]"} flex gap-1`}
        >
          <p className="text-white ml-2 mr-1">
            {Number(currencyRates?.[fromCurr]?.[toCurr]).toFixed(2)}
          </p>{" "}
          {val > 0 ? "+" : "-"}
          {val}
        </p>
      </div>
    </div>
  );
}
