import logo from "../assets/images/logo.svg";
import Container from "./Container";

export default function Header() {
  const navItems = [
    {
      label: "55 CURRENCIES",
      path: "#",
    },
    {
      label: "EOD",
      path: "#",
    },
  ];

  return (
    
    <Container>
    <header className="w-full flex flex-col items-center">
      <div className="flex items-center justify-between p-1 py-2 md:px-2 w-full">
        {/*remove border*/}
        <div className="">
          <img src={logo} className="max-w-30" alt="FX_CHECKER" />
        </div>
        <div className="flex gap-3 md:gap-15 text-neutral-500 px-3">
          {navItems.map((item) => {
            return (
              <li key={item.label} className="list-none text-sm md font-medium">
                {item.label}
              </li>
            );
          })}
        </div>
      </div>
      <div>
        hi
      </div>
    </header>
          </Container>
  );
}
