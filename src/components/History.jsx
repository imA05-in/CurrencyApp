//use useRef to take reference of the currney and the amount then put values in the conversion frame

import { use, useEffect, useState } from "react"
import {ConversionFrame} from "./index"
import { useSelector } from "react-redux"

export default function History(){

    const from = useSelector((state)=>state?.from )
    const to = useSelector((state)=>state?.to)
    const[historyArr, setHistoryArr] = useState([])

    useEffect(()=>{
        setHistoryArr((prev)=>[{from, to},...prev])
        console.log("from: ", from);
        console.log("to: ", to);
        
    },[from, to])


    return(
        <div className="Conversiont-stats flex justify-evenly p-2 gap-2 flex-col">
            {historyArr.map((item, index)=>(
                <div key={index} className="flex justify-between gap-2 ">
                <ConversionFrame label={item.from.fCurrency} amount={item.from.fAmount}/>
                <ConversionFrame label={item.to.tCurrency} amount={item.to.tAmount}/>
                </div> 
                
            ))}
        </div>
    )
}