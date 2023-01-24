import LinksBar from "../Molecules/LinksBar";
import SearchBar from "../Molecules/SearchBar";

const NavBar: React.FC = () => {
    return (
        <div className="navBar">
            <div className="searchBar">
                <SearchBar></SearchBar>
            </div>
            <div className="linksBar">
                <LinksBar></LinksBar>
            </div>
        </div>


    )
}

export default NavBar;