import React from 'react'

import './style.css'

const Row = ({ record }) => {
    const keys = Object.keys(record)
    return (
        <tr key={record.id}>
            {
                keys.map(key => <td className='linhaTab' key={key}>{record[key]}</td>)
            }
        </tr>
    )
}
const Table = ({ data }) => {
    const keys = Object.keys(data[0])
    return (
        <table id='tabela'>
            <thead>
                <tr>
                    {
                        keys.map(key => <th className='linhaTab' key={key}>{key}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map(record => <Row record={record} />)
                }

            </tbody>
        </table>
    )
}
export default Table