import styled from 'styled-components'

export const FormContainer = styled.form`
    margin-top: 0.90rem;
    background-color: rgb(243, 250, 248);
    width: ${(props) => props.width}%;
    height: 2rem;
    border-radius: 26.25rem;
    box-shadow: 1px 1px 2px 2px rgb(236, 236, 236);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border: 1px solid rgba(0, 0, 0, 0.322);
`
export const InputStyled = styled.input`
    width: 80%;
    border: 0;
    font-size: 1.063rem;
    outline: none;
    background-color: transparent;
`
export const ButtonSaveStyled = styled.button`
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
`