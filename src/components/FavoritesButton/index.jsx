import filledHeartSrc from "../../assets/icons/FilledHeart.svg"
import * as S from "./styles"

const FavoritesButton = ({ hideTitle }) => {
    return (
        <S.Container hideTitle={hideTitle}>
            <img src={filledHeartSrc} alt="" />
            <span>
                Meus favoritos
            </span>
        </S.Container>
    )
}

export default FavoritesButton