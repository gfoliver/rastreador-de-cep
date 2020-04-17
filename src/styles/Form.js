import styled from 'styled-components'

export default styled.form`
    background: #fff;
    border-radius: 15px;
    display: flex;
    max-width: calc(100vw - 30px);
    width: 500px;

    input {
        width: calc(100% - 80px);
        height: 80px;
        margin: 0;
        padding: 20px;
        font-size: 26px;
        font-weight: bold;
        border: none;
        border-radius: 15px;
    }

    button {
        width: 80px;
        height: 80px;
        background-color: #3BC14A;
        color: #fff;
        border-radius: 0 15px 15px 0;
        border: none;
        transition: all .3s ease;
        cursor: pointer;

        &:hover {
            background-color: #4DA167;
        }
    }
`