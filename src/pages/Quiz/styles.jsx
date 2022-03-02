import styled from "styled-components";



const Quiz = styled.div`
    transition: 500ms all;
    height: auto;
    width: 600px;
    
  width: ${({ theme }) => theme.dimensions.gridWidth};
    border: 1px solid ${({ theme }) => theme.colors.ioasys.secondary};
    margin-bottom: 30px;
    border-radius: 30px;
    display: flex;
    .image-container{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-self: stretch;
        justify-content: space-between;
        align-items: center;
        img{
            transition: 500ms all;
            filter: ${({ answered }) => answered ? "brightness(100%)" : "brightness(0%)"};
            max-width: 80%;
            max-height: 80%;
        }
        .score, .record{
            padding: 30px;
            align-self: flex-start;
            font-weight: 700;
        }
    }
    .buttons-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        height: 100%;
        padding: 20px 40px;
        .who{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                max-width: 80%;
            }
        }
        .next{
            display: ${({ answered }) => answered ? "initial" : "none"};
            padding: 10px;
            align-self: flex-end;
            border: 1px solid ${({ theme }) => theme.colors.ioasys.secondary};
            box-shadow: 0px 0px 5px 5px #111111;
            margin-top: 10px;

        }
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.mid}){
    width: ${({ theme }) => theme.dimensions.midGridWidth};
  }

  
  @media (max-width: ${({ theme }) => theme.breakpoints.midSmall}) {
    width: ${({ theme }) => theme.dimensions.midSmallGridWidth};
  }

  
  @media (max-width: ${({ theme }) => theme.breakpoints.pokemonPage}) {
    width: ${({ theme }) => theme.dimensions.smallGridWidth};
    flex-direction: column;
    height: auto;
    .image-container{
        width: 100%;
    }
    .buttons-container{
        width: 100%;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: ${({ theme }) => theme.dimensions.verySmallGridWidth};
  }
`


const AnswerButton = styled.button`
    transition: 500ms all;
    padding: 10px;
    width: 100%;
    border: 1px solid ${({ theme, correct, answered, clicked }) => {
        if(correct && answered){
            return "green"
        }
        return theme.colors.ioasys.secondary
    }};

    background: ${({ theme, correct, answered, clicked }) => {
        if(correct && answered){
            return "green"
        }
        if(clicked)
            return theme.colors.ioasys.secondary
        return "transparent"
    }};
    border-radius: 9999px;
    margin: 5px;
`

export { Quiz, AnswerButton }