import { Compare, Favorites, History, Log } from "../components/index";
import { NavLink, useNavigate } from "react-router";
export default function SectionBar() {
  const navigate = useNavigate();
  const SectionBarItems = [
    {
      label: "History",
      path: "/content/history",
    },
    {
      label: "Compare",
      path: "/content/compare",
    },
    {
      label: "Favourties",
      path: "/content/favourites",
    },
    {
      label: "Log",
      path: "/content/log",
    },
  ];

  return (
    <div className="SectionBar flex items-center gap-5 p-3">
      {SectionBarItems.map((item) => {
        return (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-b-lime-500 transition-all duration-300"
                : "border-b-2 border-b-neutral-900"
            }
            to={item.path}
          >
            {item.label}
          </NavLink>
        );
      })}
    </div>
  );
}
