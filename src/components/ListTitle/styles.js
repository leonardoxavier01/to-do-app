import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 4rem;
    `
export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    h1{
        margin-left: 1rem;
        margin-right: 0.10rem;
        color: black;
        font-weight: 600;
        font-size: 2.4rem;
    }
`
export const ButtonEditStyled = styled.div`
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
`