import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";
import * as S from "./styles";
import pokeballImg from "../../assets/pokeball/Pokeball.png";
import PokemonData from "../../components/PokemonData";
import GoBackButton from "../../components/GoBackButton";
import NoPokemonFound from "../../components/NoPokemonFound";
import PokeballLoader from "../../components/PokeballLoader";
import PokemonMainInfo from "../../components/PokemonMainInfo";

const Pokemon = () => {
  const { id } = useParams();
  
  const storeData = useSelector(({ pokemons }) => Object.values(pokemons.allPokemonData).find(e => e.id === parseInt(id)))

  const [data, setData] = useState(storeData);

  const [dataLoaded, setDataLoaded] = useState(false)

  const [error, setError] = useState(false);

  useEffect(() => {

    async function fetchPokemonData() {
      try{

        const { data: pokemonData } = storeData ? { data: storeData } : await api.get(`/pokemon/${id}`);

        setData({ ...pokemonData });

      } catch(e){
        setError(true)
      }
      try{

        const { data: flavor_text_entries } = await api.get(`/pokemon-species/${id}`);

        setData(data => ({ ...data, bio: flavor_text_entries }))

      } catch(e){
        console.log(e)
      }

      setDataLoaded(true)
    }
    fetchPokemonData()
  }, [id, storeData]);

  const mainType = data?.types[0].type.name;

  const pokemonImgSrc = data?.sprites.other.dream_world.front_default;


  if(error)
    return (
      <Layout>
        <NoPokemonFound/>
      </Layout>
    )

  if(!dataLoaded)
      return (
        <Layout>
          <PokeballLoader/>
        </Layout>
      )


  return (
    <Layout color={mainType} pokemonPage={true}>
      <S.Pokemon color={mainType}>
        <S.StyledPanel>
          <div className="buttons-container">
            <div className="go-back-container">
              <GoBackButton />
            </div>
            <div className="main-info-container">
              <PokemonMainInfo data={data} />
            </div>
          </div>
          <img src={pokeballImg} alt="" className="pokeball" />
          <img src={pokemonImgSrc} alt="" className="pokemon-photo" />
        </S.StyledPanel>
        <PokemonData data={data} color={mainType} />
      </S.Pokemon>
    </Layout>
  );
};

export default Pokemon;
