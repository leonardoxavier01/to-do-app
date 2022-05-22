import styled from 'styled-components'

export const TaskContainer = styled.div`
    background-color: rgb(243, 250, 248);
    width: 90%;
    height: 2rem;
    border-radius: 0.50rem;
    margin-top: 0.90rem;
    box-shadow: 1px 1px 2px 2px rgb(236, 236, 236);
    outline: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`
export const TextCheckbox = styled.div`
    margin-left: 1.5rem;
    display: flex;
    align-items: center;
    span{
        margin-left: 0.50rem;
        margin-right: 4rem;
        font-size: 1rem;
        font-weight: 500;
        text-decoration: ${(props) => props.decoration};
    }
`

export const WrapperButtons = styled.div`
    margin-right: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    button{
        outline: none;
        border: 0;
        background-color: transparent;
        cursor: pointer;
        margin-left: 0.50rem;
    }
`
