import Layout from "../../components/Layout"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../../services/api"
import * as S from "./styles"
import pokeballImg from "../../assets/pokeball/Pokeball.svg"
import goBackSrc from "../../assets/icons/DownwardsArrow.svg"
import PokemonData from "../../components/PokemonData"
import { Link } from "react-router-dom"

const Pokemon = () => {

    const { id } = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchPokemonData(){
            const { data } = await api.get(`/pokemon/${id}`)
            const { data: flavor_text_entries } = await api.get(`/pokemon-species/${id}`)
            setData({...data, bio: flavor_text_entries})
            console.log(data)
            console.log(flavor_text_entries)
        }
        fetchPokemonData()
    }, [id])

    const mainType = data?.types[0].type.name

    const pokemonImgSrc = data?.sprites.other.dream_world.front_default

    return (
      <Layout color={mainType}>
        <S.Pokemon color={mainType}>
          <div className="left-panel">
            <Link to="/" className="go-back">
              <div className="img-container">
                <img src={goBackSrc} alt="" className="arrow"/>
              </div>
              <div className="text">
                  Voltar
              </div>
            </Link>
            <button className="about"></button>
            <img src={pokeballImg} alt="" className="pokeball" />
            <img src={pokemonImgSrc} alt="" className="pokemon-photo" />
          </div>
          <PokemonData data={data} color={mainType} />
        </S.Pokemon>
      </Layout>
    );
}

export default Pokemon