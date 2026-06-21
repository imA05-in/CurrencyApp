import { Outlet } from "react-router";
import { ConverterWrapper } from "../components";
import SectionBar from "./SectionBar";
export default function Content() {
  return (
    <div className="w-full px-2">
      <ConverterWrapper/>
      <SectionBar/>
      <Outlet/>
    </div>
  );
}
