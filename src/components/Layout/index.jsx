import * as S from './styles'
import TopBar from '../TopBar'
import { useSelector } from 'react-redux'

const Layout = (props) => {

    const { darkMode } = useSelector(({ theme }) => theme)


    return (
      <S.StyledLayout dark={darkMode} curColor={props.color}>
        <div className="container">
          <TopBar pokemonPage={props.pokemonPage}/>
          <div className="content">{props.children}</div>
        </div>
      </S.StyledLayout>
    );
}

export default Layout