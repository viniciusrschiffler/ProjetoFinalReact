//import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

import imgCompra from "../../img/carrinho.png";
import imgAluguel from "../../img/alugar.png";
import imgAdicionar from "../../img/adicionar.svg";

import {
    Title,
    Background,
    Container,
    ProdutoContainer,
    Foto,
    Button,
    ImgCompra,
    ImgAluguel,
    Button2,
    Rating,
    Description,
    ButtonADM,
    ImgAdicionar,
    Circle,
} from "./styles";

import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";

function Produto() {
    var params = useParams();
    var idFilme = params.idFilme;

    const API_KEY = '345411636508e2b74308228fcfc87973'


    const [produto, setProduto] = useState();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        api
            .get(`/${params.type}/${params.idFilme}?api_key=${API_KEY}&language=pt-BR`)
            .then((response) => setProduto(response.data))
            .catch((err) => {
                console.error("Base de dados não encontrada" + err);
            });

    }, [params.type, params.idFilme]);



    var calculo = produto?.vote_average * 2.3;

    if (calculo < 1) {
        calculo = calculo + 5
    }
    else if (calculo < 2 && calculo > 1) {
        calculo = calculo + 4
    }
    else if (calculo < 3 && calculo > 2) {
        calculo = calculo + 3
    }
    else if (calculo < 4 && calculo > 3) {
        calculo = calculo + 2
    }
    else if (calculo < 5 && calculo > 4) {
        calculo = calculo + 1
    }
    else if (calculo > 20) {
        calculo = 20
    }

    var parse = parseFloat(calculo).toFixed(2);
    var preco = parse;

    var parseCalc = parse / 2;
    var parseTwo = parseFloat(parseCalc).toFixed(2);
    var RentPrice = parseTwo;

    //{ id: 1, Filme: 'Titanic', Preço: 'R$29,99', Tipo: 'Compra' }
    if (produto === undefined) {
        return (
            <Loading />
        );
    }

    function handleAddInCart(preco, tipo) {
        const title = {
            title: produto.title
        }

        if (params.type === "tv") {
            title.title = produto.title
        }

        filmes.push({
            idFilme,
            title: title.title ,
            preco,
            tipo
        })

        localStorage.setItem('filmes', JSON.stringify(filmes));
    }

    const filmes = JSON.parse(localStorage.getItem("filmes")) || [];



    return (

        <>
            <Navbar />

            <Container>
                <Background src={"https://www.themoviedb.org/t/p/original" + produto?.backdrop_path} />
                <ProdutoContainer>
                    <Foto src={"https://www.themoviedb.org/t/p/original/" + produto?.poster_path} />
                    <div>
                        {
                            params.type === "movie"
                            ? <Title>{produto?.title}</Title>
                            : <Title>{produto?.name}</Title>
                        }
                    </div>
                    <div>
                        <Button onClick={() => {
                            setIsVisible(v => !v);
                            setTimeout(() => {
                                setIsVisible(false)
                            }, 1000)

                            handleAddInCart(preco,"Compra")

                        }}>

                            <div id="iconBuy">
                                <ImgCompra src={imgCompra} />
                            </div>
                            <div id="price">
                                R$ {preco}
                            </div>
                        </Button>
                        <Button2 onClick={() => {
                            setIsVisible(v => !v);
                            setTimeout(() => {
                                setIsVisible(false)
                            }, 1000)

                            handleAddInCart(RentPrice,"Alguel")
                        }}>
                            <div id="iconRent">
                                <ImgAluguel src={imgAluguel} />
                            </div>
                            <div id="price2">
                                R$ {RentPrice}
                            </div>
                        </Button2>
                        <ButtonADM>
                            <ImgAdicionar src={imgAdicionar} />
                        </ButtonADM>
                    </div>
                    <div>
                        <Rating>
                            {"Pontos " + produto?.vote_average}
                        </Rating>
                    </div>
                    <div>
                        <Description>
                            {produto?.overview}
                        </Description>
                    </div>
                    <div>
                        {isVisible ? <Circle></Circle> : ''}
                    </div>
                </ProdutoContainer>
            </Container>
        </>
    )
}
export default Produto;