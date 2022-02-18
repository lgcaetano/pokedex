import { Tooltip } from "./styles";

const FavoritesTooltip = ({ activated }) => {
    return(
        <Tooltip activated={activated}>
            Sua lista de favoritos está cheia
        </Tooltip>
    )
}

export default FavoritesTooltip