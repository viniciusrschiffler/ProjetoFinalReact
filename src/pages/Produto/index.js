//import axios from "axios";
import { useEffect, useState } from "react";

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

function Produto() {

    const [item, setItem] = useState();

  useEffect(() => {
    api
      .get("/9297?api_key=345411636508e2b74308228fcfc87973")
      .then((response) => setItem(response.data))
      .catch((err) => {
        console.error("Base de dados não encontrada" + err);
      });
      
  }, []);

  const [isVisible, setIsVisible] = useState(false);



//poster_path               CAPA ok
//title                     TITULO ok
//vote_average              AVALIAÇÂO ok
//backdrop_path             BACKGROUND POSTER ok
//overview                  DESCRIÇÃO ok
//("R$ " + preco)           PREÇO ok

   return (

       
        <Container> 
            <Background src={"https://www.themoviedb.org/t/p/w220_and_h330_face" + item?.backdrop_path}/>
            <ProdutoContainer>
                <Foto src={"https://www.themoviedb.org/t/p/w220_and_h330_face/" + item?.poster_path} />
                <div>
                    <Title>{item?.title}</Title>
                </div>
                <div>
                    {/* <Button onClick={e =>handleAdd(e)}> */}
                        <Button  onClick={() => {
                            setIsVisible(v => !v);
                            setTimeout(() => {
                                setIsVisible(false)
                            }, 1000)
                        }}>
                            
                        <div id="iconBuy">
                            <ImgCompra src={imgCompra} />
                        </div>
                        <div id="price">
                            R$ 1,99
                        </div>
                    </Button>
                    <Button2 onClick={() => {
                            setIsVisible(v => !v);
                            setTimeout(() => {
                                setIsVisible(false)
                            }, 1000)
                        }}>
                        <div id="iconRent">
                            <ImgAluguel src={imgAluguel} />
                        </div>
                        <div id="price2">
                            R$ 1,99
                        </div>
                    </Button2>
                    <ButtonADM>
                        <ImgAdicionar src={imgAdicionar} />
                    </ButtonADM>
                </div>
                <div>
                    <Rating>
                        {"Avaliação " + item?.vote_average}
                    </Rating>
                </div>
                <div>
                    <Description>
                            {item?.overview}
                    </Description>
                </div>
                <div>
                        {isVisible ? <Circle></Circle> : ''}
                </div>
            </ProdutoContainer>
        </Container>
   )
}
export default Produto;