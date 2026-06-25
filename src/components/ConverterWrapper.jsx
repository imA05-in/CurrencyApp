import { Converter } from "./index";
import swapV from "../assets/images/icon-exchange-vertical.svg";
import swap from "../assets/images/icon-exchange.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCurrencyHook from "../hooks/useCurrencyHook";
import { useRef } from "react";
import { setfrom, setto } from "../store/currencySlice";

export default function ConverterWrapper() {
  const dispatch = useDispatch();
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [fromAmount, setFromAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState("inr");
  const [toAmount, setToAmount] = useState(0);
  const currencies = useSelector((state) => state.currencyRate?.usd);
  function handleSwap() {
    setFromAmount(toAmount);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setToAmount(fromAmount);
  }

  useEffect(() => {
    const fromCurr = currencies?.[fromCurrency];
    const toCurr = currencies?.[toCurrency];
    const result = (toCurr / fromCurr) * fromAmount || 0;
    setToAmount(result.toFixed(2));
  }, [fromCurrency, fromAmount, toCurrency]);

 useEffect(()=>{
  console.log("fa: ", fromAmount, "ta: ", toAmount);
  
    dispatch(setfrom({ fAmount: fromAmount, fCurrency: fromCurrency }));
    dispatch(setto({ tAmount: toAmount, tCurrency: toCurrency }));
  },[ toCurrency, toAmount])

  return (
    <div className=" ConverterWrapper w-full p-3 bg-neutral-700 mt-2 rounded-2xl">
      <p className="">CHECK THE RATE</p>
      <div className="converter-wrapper flex flex-col md:flex-row items-center w-full">
        <div className="top-converter w-full">
          <Converter
            label={"From"}
            oncurrencyChange={(e) => setFromCurrency(e.target.value)}
            onAmountChange={(e) => setFromAmount(e.target.value)}
            amount={fromAmount}
            curr={fromCurrency}
          />
        </div>
        <div
          className="bg-neutral-600 border-neutral-500 p-2 my-1 rounded-lg"
          onClick={() => handleSwap()}
        >
          <img src={swapV} className="md:hidden block" alt="" />
          <img src={swap} className="hidden md:flex " alt="" />
        </div>
        <div className="bottom-converter w-full">
          <Converter
            label={`To`}
            amountColor="text-lime-500"
            oncurrencyChange={(e) => setToCurrency(e.target.value)}
            amount={toAmount}
            curr={toCurrency}
            readonly={true}
          />
        </div>
      </div>
    </div>
  );
}
