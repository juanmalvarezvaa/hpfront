import { Filter } from "../App";
import "./NavBar.css";

type NavBarProps = {
  onChangeFilter: (filter: Filter | undefined) => void;
};

const NavBar = ({ onChangeFilter }: NavBarProps) => {
  return (
    <nav className="navbar">
      <button
        className="btn btn-primary"
        onClick={() => onChangeFilter(undefined)}
      >
        Characters
      </button>
      <button
        className="btn btn-primary"
        onClick={() => onChangeFilter(Filter.STUDENTS)}
      >
        Students
      </button>
      <button
        className="btn btn-primary"
        onClick={() => onChangeFilter(Filter.STAFF)}
      >
        Staff
      </button>
    </nav>
  );
};

export default NavBar;
