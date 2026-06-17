import { useEffect, useState } from "react";

export default function useCurrencyHook(currency) {
  // const [currency, setCurrency] = useState();
  const [res, setRes] = useState("");
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((response) => {return response.json()})
    .then((jsonRes)=>setRes(jsonRes))
  }, []);
  return res;
}
