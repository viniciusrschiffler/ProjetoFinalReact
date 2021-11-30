import styled from "styled-components";


    export const Container = styled.div `
        margin-top: 0px;
        padding: 0px;
    `;

    export const Title = styled.div `
        position: relative;
        color: white;
        font-size: 260%;
        //padding-top: 10vw;
        text-align: center;
        top: 20vh;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;

        @media(max-width: 1000px) {
            position: relative;
            color: white;
            text-align: center;
            text-decoration: none;
            font-family: Arial, Helvetica, sans-serif;
            top: 7.5vh;
        
        }
        
        @media(max-width: 650px) {
            position: relative;
            color: white;
            text-align: center;
            text-decoration: none;
            font-family: Arial, Helvetica, sans-serif;
            top: 4vh;
            font-size: 225%;
        
        }

        @media (max-width: 495px) {
            top: 2vh;
        }

        @media (max-width: 340px) {
            top: 5.5vh;
        }
        
        
    `;

    export const Background = styled.img `
        position: absolute;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        filter: brightness(25%);
        background-repeat: no-repeat;
        background-attachment: fixed;

    `;

    export const ProdutoContainer = styled.div `

    `;

    export const Foto = styled.img `
            position: absolute;
            border-radius: 25px;
            height: 45vh;
            width: 22vw;
            object-fit: cover;
            border: 2.5px solid;
            border-color: #440753;
            margin-left: 7.5vw;
            margin-top: 27vh;
            z-index: 1;
            
            transition: 1s;
            
            
            
                &:hover {
                    
                    height: 50vh;
                    width: 27vw;
                    margin-left: 12vw;
                    transform: scale(1.34);
                    z-index: 2;
                    border-radius: 13px;
                    border: 2px solid #850aa3;

            }

        @media(max-width: 1000px){
            margin-left: 5.5vw;
            width: 24vw;
            &:hover {
                    
                height: 50vh;
                width: 35vw;
                margin-left: 14vw;

            }
        }

        @media (max-width: 800px) {
            margin-left: 4.6vw;
            width: 26vw;
            &:hover {
                width: 40vw;
            }
        }

        @media (max-width: 650px) {
            margin-top: 22.5vh;
            margin-left: 30vw;
            height: 33vh;
            width: 40vw;

            &:hover {
                    
                height: 50vh;
                width: 50vw;
                margin-left: 25vw;
    
            }
        }

        @media (max-width: 550px) {
            width: 42vh;
            margin-left: 26vw;
            margin-top: 21vh;
        }

        @media (max-width: 530px) {
            &:hover {
                height: 50vh;
                width: 58vw;
                margin-left: 21vw;
            }
        }

        @media (max-width: 512px) {
            margin-left: 24.5vw;
        }

        @media (max-width: 495px) {
            margin-top: 18vh;
            margin-left: 22.5vw;

            &:hover {
                margin-top: 24vh;
            }
        }

        @media (max-width: 465px) {
            margin-left: 21.7vw;
        }

        @media (max-width: 445px) {
            margin-left: 20.6vw;
        }

        @media (max-width: 435px) {
            margin-left: 20vw;
        }

        @media (max-width: 400px) {
            margin-left: 17.5vw;
            margin-top: 17.9vh;

            &:hover {
                height: 42vh;
                margin-top: 28vh;
            }
        }

        @media (max-width: 355px) {
            margin-left: 13vw;
            margin-top: 20vh;
        }

        @media (max-width: 340px) {
            margin-left: 7vh;

            &:hover {
                height: 37vh;
                margin-top: 33vh;
            }
        }
    `;
    export const Button = styled.button`
        position: absolute;
        border-radius: 25px;
        width: 12.7vw;
        height: 8.4vh;
        border: none;
        color: white;
        font-size: 1.2vw;
        padding-left:35px;
        top: 78%;
        left: 35%;
        background: linear-gradient(273.41deg, #900AB1 0%, #4A14E4 100%);

        transition: 0.1s;
        
        #iconBuy {
            position: relative;
            transform: translateY(57%) translateX(-43%);
        }

        #price {
            position: relative;
            text-transform: uppercase;
            align-items: center;
            transform: translateY(-70%) translateX(6%);
        }
        
        @keyframes circleGrow {
        0% {
            transform: scale(.95);
            opacity: 0.7;
            } 
        50% {
            opacity: 0.8;
            }
        100% {
            transform: scale(1);
            opacity: 1;
            }
        }
        
        &:focus:not(:active){
        animation: circleGrow 0.2s linear;
        }

        &:hover {
            transform: scale(1.09);
            cursor: pointer;
        }

        @media(max-width: 1000px) {
            position: absolute;
            border-radius: 25px;
            width: 13vw;
            height: 8.4vh;
            border: none;
            color: white;
            font-size: 1.5vw;
            padding-left:35px;
            top: 78%;
            left: 35%;
            background: linear-gradient(273.41deg, #900AB1 0%, #4A14E4 100%);

            transition: 0.1s;

            #iconBuy {
                position: relative;
                transform: translateY(60%) translateX(-55%);
            }

            #price {
                position: relative;
                text-transform: uppercase;
                align-items: center;
                transform: translateY(-70%) translateX(-5%);
            }

            
        }

        @media(max-width: 830px) {
            #iconBuy {
                position: relative;
                transform: translateY(65%) translateX(-57%);
            }

            #price {
                position: relative;
                text-transform: uppercase;
                align-items: center;
                transform: translateY(-60%);
            }
        }

        @media (max-width: 650px) {
            top: 85vh;
            left: 29vw;
            width: 17.5vw;

            #iconBuy {
                position: relative;
                transform: translateY(60%) translateX(-57%);
            }

            #price {
                position: relative;
                text-transform: uppercase;
                align-items: center;
                transform: translateY(-70%) translateX(-4%);
                font-size: 130%;
            }
        }

        @media (max-width: 550px) {
            #iconBuy {
                transform: translateY(63%) translateX(-68%);
            }
            #price {
                transform: translateY(-70%) translateX(-7.5%);
                font-size: 140%;
            }
        }

        @media (max-width: 495px) {
            width: 21vw;
            height: 8.4vh;
            #iconBuy {
                transform: translateY(54%) translateX(-61%);
            }
            #price {
                transform: translateY(-70%) translateX(-1%);
                font-size: 170%;
            }
        }

        @media (max-width: 400px) {
            border-radius: 13px;
            width: 24vw;
            height: 8.4vh;
            left: 20vw;
            #iconBuy {
                transform: translateY(59%) translateX(-68%);
            }
            #price {
                transform: translateY(-70%) translateX(-1%);
                font-size: 195%;
            }
        }

        @media (max-width: 340px) {
            width: 27vw;
            height: 8.4vh;

            #price {
                font-size: 235%;
            }
        }

        

    `;

    export const ImgCompra = styled.img`
        width: 3.2vw;
        margin: -9.5px 0px 0px 0px;

        @media (max-width: 1000px ) {
            width: 4vw;
            margin: -9.5px 0px 0px 0px;
        }

        @media (max-width: 650px) {
            width: 50%;
        }

        @media (max-width: 550px) {
            width:57.5%;
        }

        @media (max-width: 495px) {
            width:63%;
        }
    `;

    export const Button2 = styled.button `
        position: absolute;
        border-radius: 25px;
        width: 12.7vw;
        height: 8.4vh;
        border: none;
        color: white;
        font-size: 1.2vw;
        padding-left:35px;
        top: 78%;
        left: 52.5%;
        background: linear-gradient(273.41deg, #900AB1 0%, #4A14E4 100%);

        transition: 0.1s;
        
        #iconRent {
            position: relative;
            transform: translateY(57%) translateX(-43%);
        }

        #price2 {
            position: relative;
            text-transform: uppercase;
            align-items: center;
            transform: translateY(-70%) translateX(6%);
        }
        
        @keyframes circleGrow {
        0% {
            transform: scale(.95);
            opacity: 0.7;
            } 
        50% {
            opacity: 0.8;
            }
        100% {
            transform: scale(1);
            opacity: 1;
            }
        }
        
        &:focus:not(:active){
        animation: circleGrow 0.2s linear;
        }

        &:hover {
            transform: scale(1.09);
            cursor: pointer;
        }

        @media(max-width: 1000px) {
            position: absolute;
            border-radius: 25px;
            width: 13vw;
            height: 8.4vh;
            border: none;
            color: white;
            font-size: 1.5vw;
            padding-left:35px;
            top: 78%;
            left: 52.5%;
            background: linear-gradient(273.41deg, #900AB1 0%, #4A14E4 100%);

            transition: 0.1s;

            #iconRent {
                position: relative;
                transform: translateY(60%) translateX(-59%);
            }

            #price2 {
                position: relative;
                text-transform: uppercase;
                align-items: center;
                transform: translateY(-70%) translateX(-7%);
            }

            
        }

        @media(max-width: 830px) {
            #iconRent {
                position: relative;
                transform: translateY(70%) translateX(-60%);
            }

            #price2 {
                position: relative;
                text-transform: uppercase;
                align-items: center;
                transform: translateY(-70%) translateX(-3%);
            }

            
        }
        
        @media (max-width: 650px) {
            top: 85vh;
            left: 53vw;
            width: 17.5vw;

            #iconRent {
                position: relative;
                transform: translateY(65%) translateX(-60%);
            }

            #price2 {
                position: relative;
                text-transform: uppercase;
                align-items: center;
                transform: translateY(-70%) translateX(-4%);
                font-size: 130%;
            }
        }

        @media (max-width: 550px) {
            #iconRent {
                transform: translateY(70%) translateX(-68%);
            }
            #price2 {
                transform: translateY(-70%) translateX(-7.5%);
                font-size: 140%;
            }
        }

        @media (max-width: 495px) {
            width: 21vw;
            height: 8.4vh;
            #iconRent {
                transform: translateY(58%) translateX(-68%);
            }
            #price2 {
                transform: translateY(-70%) translateX(-3%);
                font-size: 170%;
            }
        }

        @media (max-width: 400px) {
            border-radius: 13px;
            width: 24vw;
            height: 8.4vh;
            left: 55vw;

            #iconRent {
                transform: translateY(58%) translateX(-68%);
            }
            #price2 {
                transform: translateY(-70%) translateX(-3%);
                font-size: 195%;
            }
        }

        @media (max-width: 340px) {
            width: 27vw;
            height: 8.4vh;

            #price2 {
                font-size: 235%;
            }
        }

    `;

    export const ImgAluguel = styled.img`
    width: 3.2vw;
    margin: -9.5px 0px 0px 0px;

    @media (max-width: 1000px ) {
        width: 4vw;
        margin: -9.5px 0px 0px 0px;
    }

    @media (max-width: 650px) {
        width: 50%;
    }

    @media (max-width: 550px) {
        width: 57.5%;
    }

    @media (max-width: 495px) {
            width:63%;
    }
`;

    export const Rating = styled.div `
        position: relative;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        font-size: 110%;
        text-align: center;
        transform: translateX(-5%);
        margin-top: 22.5vh;

        @media (max-width: 1000px) {
            position: relative;
            text-decoration: none;
            font-family: Arial, Helvetica, sans-serif;
            color: white;
            text-align: center;
            margin-top: 12vh;
            margin-left: 9vw;
        }
        @media (max-width: 650px) {
            position: relative;
            margin-top: 7vh;
            margin-left: 9vw;
        }

        @media (max-width: 495px) {
            top: -2.5vh;
        }

        @media (max-width: 400px) {
            top: -2.9vh;
        }

        @media (max-width: 360px) {
            top: -2vh;
        }
    `;

    export const Description = styled.div `
        position: relative;
        text-align: center;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        padding: 15vh 30vw 0px 33vw;

        @media (max-width: 650px) {
            top: 28vh;
        }
        @media (max-width: 550px) {
            top: 25.5vh;
        }
        @media (max-width: 495px) {
            top: 28vh;
            font-size: 90%;
            padding: 120px 100px 0px 100px;
        }
        @media (max-width: 400px) {
            top: 28vh;
            padding: 120px 75px 0px 75px;
        }
        @media (max-width: 340px) {
            padding: 110px 60px 0px 60px;
        }
    `;

export const ButtonADM = styled.button `
    position: relative;
    object-fit: cover;
    left: 7.4vw;
    top: 70vh;
    border-radius: 25px;
    width: 22.2vw;
    height: 53px;
    background-color: #0be646;
    border: none;
    transition: 0.1s;

@keyframes circleGrow {
        0% {
            transform: scale(.95);
            opacity: 0.7;
            } 
        50% {
            opacity: 0.8;
            }
        100% {
            transform: scale(1);
            opacity: 1;
            }
        }

        &:focus:not(:active){
        animation: circleGrow 0.2s linear;
        }

        &:hover {
            transform: scale(1.09);
            cursor: pointer;
            
        }
       @media(max-width: 1000px) {
        left: 5.6vw;
        width: 24vw;
       }
       @media(max-width: 1000px) {
        left: 5vw;
        width: 25.5vw;
       }
       @media(max-width: 650px) {
        position:absolute;
        top: 22.5vh;
        left: 19.3vw;
        width: 8vw;
        height: 33vh;
       }
       @media (max-width: 550px) {
        left: 14.2vw;
        width: 8.6vw;
        top: 21.5vh;
       }
       @media (max-width: 510px) {
        left: 12vw;
        width: 9vw;
       }
       @media(max-width: 495px) {
           top: 18.5vh;
           left: 10.5vw;
       }
       @media(max-width: 450px) {
            top: 55vh;
            left: 21vw;
            width: 58vw;
            height: 8vh;
       }
       @media(max-width:400px) {
           width: 63vw;
           left: 18vw;
       }
       @media(max-width:400px) {
           width: 66vw;
       }
       @media(max-width:375px) {
           width: 68vw;
       }
       @media(max-width:360px) {
           width: 70vw;
           border-radius: 12px;
       }
       @media(max-width:355px) {
        width: 71.5vw;
        left: 13.5vw;
       }
       @media(max-width: 335px) {
           width: 75vw;
       }
       @media(max-width: 335px) {
           width: 79vw;
       }
`;


export const ImgAdicionar = styled.img`
    object-fit: cover;
    height: 62%;

    @media (max-width: 650px) {
        height: 21.5%;
        width: auto;
    }
    @media(max-width: 495px) {
        height: 22.8%;
        width: 90%;
    }
    @media(max-width: 485px) {
        width: 22% 22%;
    }
    @media(max-width: 450px) {
        width: auto;
        height: 75%;
    }
    @media(max-width: 450px) {
        width: auto;
        height: 60%;
    }
    @media(max-width: 355px) {
        width: 13%;
        height: 50%;
    }
`;