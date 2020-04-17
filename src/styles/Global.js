import { createGlobalStyle } from 'styled-components'
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoBold});
        font-weight: 700;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        width: 100%;
        background-color: #4D5057;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
    }

    .App {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
    }

    .map {
        width: 70%;
        height: 70%;
        position: absolute;
        z-index: -2;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: .5;
        object-fit: contain;
    }

    h1 {
        font-size: 50px;
        color: #fff;
        font-weight: bold;
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        text-align: center;
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 34px;
        }

        .mapWrapper {
            overflow: hidden;

            .map {
                width: 130%;
            }
        }
    }
`