import React from 'react';
import"../style/styled.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default ({item}) =>{
    let fristData= new Date(item.first_air_date);
    let genres = []
    for( let i in  item.genres ){
        genres.push(item.genres[i].name)
    }

    let descricao = item.overview;
    if(descricao.length > 200){
        descricao = descricao.substring(0, 200) + '...';
    }
    return(
        <section className="destaque" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
            <div className="destaque--vertical">
                <div className="destaque--horizontal">
                    <div className="destaque--nome">{item.name}</div>
                    <div className="destaque--info">
                        <div className="destaque--points">{item.vote_average} pontos</div>
                        <div className="destaque--ano">{fristData.getFullYear()}</div>
                        <div className="destaque--temporadas">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="destaque--descricao">{descricao}</div>
                    <div className="destaque--buttons">
                        <a  hrf="#"className="btn--saibamais">+Saiba Mais</a>
                    </div>
                    <div className="destaque--genres">
                        <strong>Gêneros: </strong>{genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>
    )
}
