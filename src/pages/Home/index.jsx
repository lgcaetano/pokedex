
import Layout from '../../components/Layout'
import PokemonGrid from '../../components/PokemonGrid'
import SearchBar from '../../components/SearchBar'
import { useState } from 'react'

const Home = () => {

    const [filter, setFilter] = useState("")

    return (
        <Layout>
            <SearchBar changeFilter={setFilter}></SearchBar>
            <PokemonGrid filterFunction={e => e.name.includes(filter.toLowerCase())}></PokemonGrid>
        </Layout>
    )
}

export default Home