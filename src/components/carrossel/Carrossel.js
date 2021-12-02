import React, { useEffect, useState} from 'react';
import Api from "../api/Api";
import"../style/styled.css"
import gif from "../img/gif.gif"
import Destaque from "../destaque/Destaque"
import MovieRow from "../movierow/MovieRow";


function Carrossel(){
    const[data, setData] = useState([]);
    const[destaque, setDestaque] = useState(null);


    useEffect(() =>{
        const loadAll = async () =>{
            let list = await Api.getHomeList();
            setData(list);

         let serie = list.filter(i=>i.slug === "series");
         let randomChosen = Math.floor(Math.random() * (serie[0].itens.results.length -1));
         let chosen = serie[0].itens.results[randomChosen];
         if(chosen.backdrop_path === null && chosen.overview === null  ){
            randomChosen = Math.floor(Math.random() * (serie[0].itens.results.length -1));
            chosen = serie[0].itens.results[randomChosen];
         }else if(chosen.overview.length === 0){
            randomChosen = Math.floor(Math.random() * (serie[0].itens.results.length -1));
            chosen = serie[0].itens.results[randomChosen];
         }
         let chosenInfo = await Api.getMovieInfo(chosen.id, 'tv'); 
         setDestaque(chosenInfo); 
           
        }

        loadAll()
        
    },[])

    return(

        <div>
            {destaque &&
                <Destaque item={destaque}/>
            }       
            <div className="movielist">
                {
                    data.map((item,key) => {
                        return(
                            <section className="listas">
                                <MovieRow key={key} title={item.title} itens={item.itens}/> 
                            </section>
                                   
                        );
                    })};

                
            </div>

            {data.length <= 0 && 
                <div className="loading">
                <img src={gif} alt="loading" />

            </div>
            }        
            
    
        </div>
    )
}

export default Carrossel;