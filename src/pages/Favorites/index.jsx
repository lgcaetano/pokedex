import Layout from "../../components/Layout"
import * as S from "./styles"
import PokemonGrid from "../../components/PokemonGrid"
import FavoritesButton from "../../components/FavoritesButton"
import { useSelector } from "react-redux"
import GoBackButton from "../../components/GoBackButton"

const Favorites = () => {

    const { favorites } = useSelector(({ favorites }) => favorites)

    return (
      <Layout>
        <S.FavoritesBar>
          <GoBackButton></GoBackButton>
          <FavoritesButton alwaysShowTitle={true}></FavoritesButton>
        </S.FavoritesBar>
        <PokemonGrid
          filterFunction={(e) => favorites.includes(e.name)}
          static={true}
        ></PokemonGrid>
      </Layout>
    );
}

export default Favorites