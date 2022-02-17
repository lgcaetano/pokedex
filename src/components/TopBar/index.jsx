import * as S from './styles'
import logo from '../../assets/logos/logoioasys.svg'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { TOGGLE_THEME } from '../../store/slices/ThemeSlice'


const TopBar = ({pokemon}) => {

    const { darkMode } = useSelector(({ theme }) => theme)
    const dispatch = useDispatch()

    return (
        <S.StyledTopBar dark={darkMode} pokemon={pokemon}>
            <div className="title">
                <img src={logo} alt="" className="logo"/>
                <span>ioasys pokédex</span>
            </div>
            <button className="toggle-dark-mode" onClick={() => dispatch(TOGGLE_THEME())}>
                <div className="circle"/>
            </button>
        </S.StyledTopBar>
    )
}

export default TopBar