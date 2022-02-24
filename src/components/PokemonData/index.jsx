import * as S from "./styles"
import PokemonType from "../PokemonType"
import BasicPokemonData from "../BasicPokemonData"
import PokemonStat from "../PokemonStat"
import { useSelector } from "react-redux"
import PokemonMainInfo from "../PokemonMainInfo"



function findFirstEnglishBio(entries){
    return entries.find(e => {
        return e.language.name === "en"
    }).flavor_text
}


const PokemonData = ({ data, color }) => {

    const { darkMode } = useSelector(({ theme }) => theme)

    const pokemonBio = data && data.bio ? findFirstEnglishBio(data?.bio?.flavor_text_entries) : ""


    return (
      <S.Container color={color} dark={darkMode}>
        <div className="main-info">
          <PokemonMainInfo data={data}/>
        </div>
        <div className="types">
          {data?.types.map(({ type }) => {
            return <PokemonType type={type.name} key={type.name} />;
          })}
        </div>
        <div className="basic-data">
          <BasicPokemonData data={data} dataType={"weight"}/>
          <BasicPokemonData data={data} dataType={"height"}/>
          <BasicPokemonData data={data} dataType={"abilities"}/>
        </div>
        <div className="bio">{pokemonBio?.replace("\f", " ")}</div>
        <h3 className="colorful">Base Stats</h3>
        <div className="stat-container">
          {data?.stats.map(({ base_stat, stat }) => {
            return (
              <PokemonStat
                statName={stat.name}
                statValue={base_stat}
                key={stat.name}
                color={color}
              />
            );
          })}
        </div>
      </S.Container>
    );
}

export default PokemonData