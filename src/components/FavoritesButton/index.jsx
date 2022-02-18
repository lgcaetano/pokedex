import filledHeartSrc from "../../assets/icons/FilledHeart.svg"
import * as S from "./styles"
import { Link } from "react-router-dom"

const FavoritesButton = ({ hideTitle, favoritesPage }) => {
    return (
      <Link to="/favorites">
        <S.Container hideTitle={hideTitle} favoritesPage={favoritesPage}>
          <img src={filledHeartSrc} alt="" />
          <span>Meus favoritos</span>
        </S.Container>
      </Link>
    );
}

export default FavoritesButton