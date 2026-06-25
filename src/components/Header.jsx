import logo from "../assets/images/logo.svg";
import { Container, CurrnecyPair } from "./index";
import useCurrencyHook from "../hooks/useCurrencyHook";
import { useSelector, useDispatch } from "react-redux";
import { setCurrencyRate } from "../store/currencySlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate()
  const currencyRates = useCurrencyHook("usd");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrencyRate({currencyRate : currencyRates}));
  }, [currencyRates])
  const currencyLiveRates = useSelector((state)=>(state?.currencyRate))
  
  
  const navItems = [
    {
      label: "All CURRENCIES",
      path: "#",
    },
    {
      label: "EOD",
      path: "#",
    },
  ];

  const toCurrItems = Object.keys(currencyLiveRates?.usd || {})

  return (
    <Container>
      <header className="w-full flex flex-col items-center">
        <div className="flex items-center justify-between p-1 py-2 md:px-2 w-full">
          <div className="">
            <img src={logo} className="max-w-30" alt="FX_CHECKER" onClick={()=>navigate("/")}/>
          </div>
          <div className="flex gap-3 md:gap-15 text-neutral-200 px-3">
            {navItems.map((item) => {
              return (
                <li
                  key={item.label}
                  className="list-none text-sm md font-medium"
                >
                  {item.label}
                </li>
              );
            })}
          </div>
        </div>
        <div className="flex w-full justify-between px-1">
          <div className="left-0 bg-lime-500 text-black flex items-center justify-center px-1">
            <p className="text-sm">LIVE MARKETS</p>
          </div>
          <div className="flex gap-2 items-center justify-center overflow-scroll scrollbar-none w-full">
            {toCurrItems.map((curr) => (
              <CurrnecyPair fromCurr={`usd`} toCurr={curr} key={curr} />
            ))}
          </div>
        </div>
      </header>
    </Container>
  );
}
