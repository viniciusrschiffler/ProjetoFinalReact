import React, { useState, useEffect } from 'react'
import { FiMinusCircle } from 'react-icons/fi'

import './style.css'


const Table = ({ movies }) => {

    const [data, setData] = useState([])
    const keys = ['#', 'Título', 'Preço', 'Tipo de compra']

    


    useEffect(() => {
        setData(movies)
    }, [movies])
    

    function handleRemoveItem(id, type) {
        let filmes = JSON.parse(localStorage.getItem('filmes'))

        filmes = filmes.filter(filme => {
            if (filme.idFilme === id) {
                if (filme.tipo === type) {
                }
            }
            return filme
        })

        setData(filmes)
        localStorage.setItem('filmes', JSON.stringify(filmes))
    }

    const Row = ({ filme }) => {
        const keys = Object.keys(filme)

        return (
            <tr key={`${filme.idFilme}=${filme.tipo}`}>
                {
                    keys.map(key => {
                        if (key === 'idFilme') {
                            return <td className='linhaTab' key={`${key}-${filme.idFilme}-${filme.tipo}`}>{filme.idFilme}</td>

                        } else if (key === 'preco') {
                            return <td className='linhaTab' key={`${key}-${filme.idFilme}-${filme.tipo}`}>R$ {filme[key]}</td>

                        }

                        return <td className='linhaTab' key={`${key}-${filme.idFilme}-${filme.tipo}`}>{filme[key]}</td>
                    })
                }
                <td
                    className='linhaTab'
                    key={`removeItem-${filme.idFilme}-${filme.tipo}`}
                    onClick={() => handleRemoveItem(filme.idFilme, filme.tipo)}
                >
                    {
                        <FiMinusCircle
                            color='#dd0000'
                            size={25}
                            style={{ cursor: 'pointer' }}
                        />
                    }
                </td>
            </tr>
        )
    }

    return (
        <table id='tabela'>
            <thead>
                <tr key={'Header'}>
                    {
                        keys.map(key => <th className='linhaTab' key={key}>{key}</th>)
                    }
                    <th className='linhaTab' key={'removeItem'}></th>
                </tr>
            </thead>
            <tbody>
                {
                    data ? data.map(filme => <Row filme={filme} />) : null
                }

            </tbody>
        </table>
    )
}
export default Table