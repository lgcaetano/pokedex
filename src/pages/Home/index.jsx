
import Layout from '../../components/Layout'
import PokemonGrid from '../../components/PokemonGrid'
import SearchBar from '../../components/SearchBar'
import { useState } from 'react'

const Home = () => {

    const [filter, setFilter] = useState("")

    return (
        <Layout>
            <SearchBar changeFilter={e => setFilter(e.target.value)}></SearchBar>
            <PokemonGrid filter={filter}></PokemonGrid>
        </Layout>
    )
}

export default Home