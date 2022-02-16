import goBackSrc from "../../assets/icons/DownwardsArrow.svg"
import { Link } from "react-router-dom"
import * as S from "./styles"

const GoBackButton = (props) => {
    return (
      <S.GoBack>
        <Link to="/" className="go-back">
          <div className="img-container">
            <img src={goBackSrc} alt="" className="arrow" />
          </div>
          <div className="text">Voltar</div>
        </Link>
      </S.GoBack>
    );
}

export default GoBackButton 