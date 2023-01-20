import LinksBar from "../Molecules/LinksBar";
import SearchBar from "../Molecules/SearchBar";

const NavBar: React.FC = () => {
    return (
        <>
            <div className="searchBar">
                <SearchBar></SearchBar>
            </div>
            <div className="linksBar">
                <LinksBar></LinksBar>
            </div>
        </>


    )
}

export default NavBar;