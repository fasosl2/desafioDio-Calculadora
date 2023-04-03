import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FAFAFA;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: white;
    width: 80%;
    min-height: 450px;
`

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
`

export const NumbersContainer = styled.div`
    grid-row-start: 2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr
`

export const RightOperatorsContainer = styled.div`
    grid-row-start: 2;
    display: grid;
    grid-template-columns: 1fr
`
export const TopOperatorsContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr
`