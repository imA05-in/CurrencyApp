import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Converter({
  label,
  amount,
  amountColor = "text-neutral-50",
  oncurrencyChange,
  onAmountChange,
  readonly,
  curr = "usd",
}) {
  const currencies = useSelector((state) => state.currencyRate?.["usd"]);
  const [currncyOptions, setCurrncyOptions] = useState([]);
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    if (currencies) {
      setCurrncyOptions(Object.keys(currencies));
    }
  }, [currencies]);

  return (
    <div className="bg-neutral-600 rounded w-full ">
      <div className=" p-3">
        <div className="text-neutral-100">{label}</div>
        <div className="flex justify-between ">
          <input
            type="text"
            className={`${amountColor} outline-none font-bold text-lg lg:text-xl rounded w-50 md:w-full`}
            onChange={(e) => onAmountChange(e)}
            value={amount}
            readOnly={readonly}
          />

          <select
            value={curr}
            onChange={(e) => oncurrencyChange(e)}
            className="bg-neutral-500 rounded border-neutral-400 px-1"
          >
            {currncyOptions.map((currency) => (
              <option
                value={currency}
                key={currency}
                className="text-neutral-50"
              >
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
