import styled from 'styled-components'

export default styled.div`
    background: #CFCFCF;
    border-radius: 15px;
    width: 500px;
    max-width: calc(100vw - 30px);
    position: relative;
    padding: 20px;

    &:before {
        content: '';
        width: 100%;
        height: 30px;
        position: absolute;
        left: 0;
        top: -15px;
        z-index: -1;
        background: #CFCFCF;
    }

    .item {
        display: flex;
        width: 100%;
    
        & + .item {
            margin-top: 20px;
        }

        .iconBox {
            width: 50px;
            height: 50px;
            background: #3bc14a;
            border-radius: 10px;
            line-height: 55px;
            text-align: center;
            margin-right: 20px;
        }

        .text {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .title {
                font-size: 13px;
                color: rgba(0,0,0,0.8);
            }

            .value {
                font-size: 21px;
            }
        }
    }
`