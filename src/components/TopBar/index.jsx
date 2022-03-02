import * as S from './styles'
import logo from '../../assets/logos/logoioasys.svg'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { TOGGLE_THEME } from '../../store/slices/ThemeSlice'
import { Link } from 'react-router-dom'


const TopBar = ({ pokemonPage, quizPage }) => {

    const { darkMode } = useSelector(({ theme }) => theme)
    const dispatch = useDispatch()

    return (
        <S.StyledTopBar dark={darkMode} pokemon={pokemonPage} quiz={quizPage}>
            <div className="title">
                <img src={logo} alt="" className="logo"/>
                <span>ioasys pokédex</span>
            </div>
            <Link className='quiz-link' to="/quiz">
            <i className="fa-solid fa-gamepad"></i>
            <div className="link-text">
            Play The Quiz!
            </div>
            </Link>
            <button className="toggle-dark-mode" onClick={() => dispatch(TOGGLE_THEME())}>
                <div className="circle"/>
            </button>
        </S.StyledTopBar>
    )
}

export default TopBar