import imgCompra from "../../img/carrinho.png";
import imgAluguel from "../../img/alugar.png";
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
    Description
} from "./styles";

import Navbar from "../../components/Navbar";

function Produto() {
    return (
        <>
            <Navbar />
            <Container>

                <Background src="https://media.gazetadopovo.com.br/2021/07/15104526/2_guaranC3A1_mauC3A9s_IG_bom_gourmet-960x540.jpg" />

                <ProdutoContainer>

                    <Foto src="https://www.saudaveleforte.com.br/wp-content/uploads/2019/11/guarana00-1.jpg" />

                    <div>
                        <Title>Pó de Guaraná</Title>

                    </div>

                    <div>

                        <Button>
                            <div id="iconBuy">
                                <ImgCompra src={imgCompra} />
                            </div>
                            <div id="price">
                                R$ 0,99
                            </div>
                        </Button>
                        <Button2>
                            <div id="iconRent">
                                <ImgAluguel src={imgAluguel} />
                            </div>
                            <div id="price2">
                                R$ 1,99
                            </div>
                        </Button2>

                    </div>
                    <Rating>
                        Avaliação : 12389
                    </Rating>
                    <div>
                        <div>
                            <Description>
                                Há relatos sobre alguns alunos do
                                Serratec que utilizam deste produto para
                                se manterem acordados.
                                Testemunhas confirmam que o usuário é
                                integrante do sexto grupo da turma 06.
                            </Description>
                        </div>
                    </div>
                </ProdutoContainer>
            </Container>
        </>
    )
}

export default Produto;