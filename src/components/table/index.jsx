import{
    TableBoots,
    Info,
    
} from './styles';

const Table = props =>(
    <TableBoots>
        <Info bordered>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Filme
      </th>
      <th>
        Preco
      </th>
      <th>
        Tempo Restante
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Titanic
      </td>
      <td>
        R$ 3,00
      </td>
      <td>
        01:01:01
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Crepusculo
      </td>
      <td>
        R$40,00
      </td>
      <td>
        Comprado
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Amanhecer
      </td>
      <td>
        R$11,00
      </td>
      <td>
        Expirado
      </td>
    </tr>
  </tbody>
</Info>
    </TableBoots>

);

export default Table;