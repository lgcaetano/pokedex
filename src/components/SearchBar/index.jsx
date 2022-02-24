import * as S from "./styles"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import FavoritesButton from "../FavoritesButton"
import searchIconSrc from "../../assets/icons/SearchIcon.svg"
import clearSearchSrc from "../../assets/icons/ClearSearch.svg"

const SearchBar = ({ changeFilter }) => {

    const [searchValue, setSearchValue] = useState("")
    
    const { darkMode } = useSelector(({ theme }) => theme)

    useEffect(() => {
        changeFilter(searchValue)
    }, [searchValue, changeFilter])

    return (
      <S.Container dark={darkMode}>
        <div className="search-title">Buscar</div>
        <S.SearchBar onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
        <button
          className="search-icon"
          disabled={!searchValue}
          onClick={() => setSearchValue("")}
        >
          <img src={searchValue ? clearSearchSrc : searchIconSrc} alt="" />
        </button>
        <FavoritesButton/>
      </S.Container>
    );
}

export default SearchBar