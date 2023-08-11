import { CiSearch } from "react-icons/ci";
import "./style.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      {/* <div className="searcIcon"> */}
      <CiSearch className="searchIcon" />
      {/* </div> */}
      <form>
        <input type="text" placeholder="Search" />
      </form>
    </div>
  );
};

export default SearchBar;
