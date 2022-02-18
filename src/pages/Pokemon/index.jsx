import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";
import * as S from "./styles";
import pokeballImg from "../../assets/pokeball/Pokeball.png";
import PokemonData from "../../components/PokemonData";
import GoBackButton from "../../components/GoBackButton";

const Pokemon = () => {
  const { id } = useParams();
  
  const storeData = useSelector(({ pokemons }) => Object.values(pokemons.allPokemonData).find(e => e.id === parseInt(id)))

  const [data, setData] = useState(storeData);

  console.log(data)


  useEffect(() => {

    async function fetchPokemonData() {
      const { data } = storeData ? { data: storeData } : await api.get(`/pokemon/${id}`);
      const { data: flavor_text_entries } = await api.get(
        `/pokemon-species/${id}`
      );
      setData({ ...data, bio: flavor_text_entries });
    }
    fetchPokemonData();
  }, [id, storeData]);

  const mainType = data?.types[0].type.name;

  const pokemonImgSrc = data?.sprites.other.dream_world.front_default;

  return (
    <Layout color={mainType} pokemonPage={true}>
      <S.Pokemon color={mainType}>
        <div className="left-panel">
          <div className="buttons-container">
            <GoBackButton></GoBackButton>
          </div>
          <img src={pokeballImg} alt="" className="pokeball" />
          <img src={pokemonImgSrc} alt="" className="pokemon-photo" />
        </div>
        <PokemonData data={data} color={mainType} />
      </S.Pokemon>
    </Layout>
  );
};

export default Pokemon;
