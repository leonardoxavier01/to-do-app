import styled from "styled-components";

export const AppStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin-bottom: 3rem;
`
export const ConatinerApp = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: white;
    justify-content: center;
    width: 55rem;
    height: 33rem;
    border-radius: 1%;
    -webkit-box-shadow: 0px 10px 23px -1px rgba(0, 0, 0, 0.43);
    -moz-box-shadow: 0px 10px 23px -1px rgba(0, 0, 0, 0.43);
    box-shadow: 0px 10px 23px -1px rgba(0, 0, 0, 0.43);
`

export const ListsStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 25rem;
    width: 20rem;
    padding-left: 2rem;
    overflow: auto;
`

export const ListPageStyled = styled.div`
    background-color: rgb(218, 236, 232);
    height: 23rem;
    width: 30rem;
    border-radius: 1%;
    padding: 2rem 2rem 4rem 5rem;
    overflow: auto;
`