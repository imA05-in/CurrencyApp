import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Converter({
  label,
  amount = 0,
  amountColor = "text-neutral-50",
  oncurrencyChange,
  onAmountChange,
  readonly,
  curr = "usd",
}) {

  const dispatch = useDispatch()

  const currencies = useSelector((state) => state.currencyRate?.["usd"]);
  const [currncyOptions, setCurrncyOptions] = useState([]);

  useEffect(() => {
    if (currencies) {
      setCurrncyOptions(Object.keys(currencies));
    }
  }, [currencies]);

  return (
    <div className="bg-neutral-600 rounded-2xl w-full ">
      <div className=" p-3">
        <div className="text-neutral-100">{label}</div>
        <div className="flex justify-between ">
          <input
            type="text"
            className={`${amountColor} outline-none font-bold text-lg lg:text-xl rounded-2xl w-50 md:w-full md:text-2xl`}
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
