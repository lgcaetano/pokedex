import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 15px;
    margin-left: 50px;
    img{
        height: 21px;
    }
    span{
        color: ${({ theme }) => theme.colors.ioasys.secondary};
        display: ${({ hideTitle }) => hideTitle ? "none" : "initial"};
        font-weight: 500;
        font-size: 14px;
    }
`

export { Container }