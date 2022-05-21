import styled from 'styled-components';

export const ListNameContainer = styled.div`
    background-color: rgb(243, 250, 248);
    width: 90%;
    height: 2rem;
    border-radius: 0.50rem;
    margin-bottom: 0.70rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    :hover{
        background-color: rgb(183, 216, 205)
    }
`
export const Content = styled.div`
    margin-left: 0.625rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    span{
        margin-left: 0.438rem;
        color: rgb(44, 71, 62);
    }
`
export const ButtonDelStyled = styled.button`
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    margin-right: 0.75rem;
    margin-left: 0.60rem;
`