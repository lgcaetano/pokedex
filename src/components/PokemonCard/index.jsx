import { useState, useEffect } from "react"
import axios from "axios"
import * as S from "./styles"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function upperCaseFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}


function formatId(id){
    let str = id.toString()
    while(str.length < 3){
        str = "0" + str
    }
    return str
}

const PokemonCard = (props) => {

    const { darkMode } = useSelector(({ theme }) => theme)

    const [data, setData] = useState()
    const [types, setTypes] = useState([])

    useEffect(() => {
        const getData = async () => {
            const pokemonData = await axios.get(props.url)
            setData(pokemonData.data)
            setTypes(pokemonData.data.types.map(e => e.type.name))
        }
        getData()
    }, [props])

    const imgSrc = data?.sprites.other.dream_world.front_default 


    return (
      <Link to={`pokemon/${data?.id}`}>
        <S.StyledPokemonCard {...data} type={types[0] ?? ""} dark={darkMode}>
          <div className="img-container">
            <div className="id-container">
                {`#${formatId(data?.id || "")}`}
            </div>
            <img src={imgSrc} alt="" />
          </div>
          <div className="name">{upperCaseFirstLetter(props.name)}</div>
        </S.StyledPokemonCard>
      </Link>
    );
}

export default PokemonCard