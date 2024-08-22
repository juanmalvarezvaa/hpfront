import { Filter } from "../App";

type NavBarProps = {
  onChangeFilter: (filter: Filter | undefined) => void;
};

const NavBar = ({ onChangeFilter }: NavBarProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/">
          Home
        </a> */}
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
      </div>
    </nav>
  );
};

export default NavBar;
