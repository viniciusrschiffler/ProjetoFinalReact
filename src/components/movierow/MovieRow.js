import React,{useState} from 'react';
import img from '../img/Imagem1.png';
import '../style/styled.css'



// eslint-disable-next-line import/no-anonymous-default-export
export default ({title,itens}) => {

    const [scrollx, setScrollx] = useState(0);

    const handleLeft = () => {

        let x = scrollx + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0
        }
        setScrollx(x);
    }
    
    const handlerigth = () => {
        let x = scrollx - Math.round(window.innerWidth / 2);
        let listw = itens.results.length * 150;
        if((window.innerWidth - listw) > x ){
            x = (window.innerWidth - listw) - 60;
        }
        setScrollx(x) 
    }
    
    return(
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movierow--left" onClick={handleLeft}>
               <img src={img} alt="img"/>
            </div>

            <div className ="movierow--rigth" onClick={handlerigth}>
                <img src={img} alt="img"/>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{marginLeft: scrollx, width: itens.results.length * 150}}>
                    {itens.results.map((item, key) => {
                        return(
                        <div key={key} className="movierow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />

                        </div>
                        );   
                    
                    })}
                        
                </div>
            </div>
            {/* // <Carrosel >
            //     {itens.results.length > 0 && itens.results.map((item, key) => {
            //         return (
            //             <Item>
            //                 <Img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_name} />

            //             </Item>
            //         );
            //     })}

            // </Carrosel> */}

            
            </div>
              
    );   
       
}
