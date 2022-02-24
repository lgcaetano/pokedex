
import Layout from '../../components/Layout'
import PokemonGrid from '../../components/PokemonGrid'
import SearchBar from '../../components/SearchBar'
import { useState } from 'react'

const Home = () => {

    const [filter, setFilter] = useState("")

    return (
        <Layout>
            <SearchBar changeFilter={setFilter}/>
            <PokemonGrid filterFunction={e => e.name.includes(filter.toLowerCase())}/>
        </Layout>
    )
}

export default Home