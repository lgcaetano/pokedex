import * as S from "./styles"
import { useSelector } from "react-redux"
import FavoritesButton from "../FavoritesButton"

const SearchBar = (props) => {
    
    const { darkMode } = useSelector(({ theme }) => theme)

    return (
        <S.Container dark={darkMode}>
            <div className="search-title">
                Buscar
            </div>
            <S.SearchBar onChange={props.changeFilter}/>
            <FavoritesButton></FavoritesButton>
        </S.Container>
    )
}

export default SearchBar