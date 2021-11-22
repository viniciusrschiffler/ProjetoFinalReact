import React from 'react'

const Row = ({ record }) => {
    const keys = Object.keys(record)
    return (
        <tr key={record.id}>
            {
                keys.map(key => <td className='tab1' key={key}>{record[key]}</td>)
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
                        keys.map(key => <th className='tab' key={key}>{key}</th>)
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