import './Table.scss';

const Table = ({ someData }) => {
  // const renderList = () => {
  //   return someData.map((data) => (
  //     <tr key={data.id}>
  //       <td>{today}</td>
  //       <td>{data.name}</td>
  //       <td>{data.quantity}</td>
  //       <td>{data.distance}</td>
  //     </tr>
  //   ));
  // };

  const list = renderList();

  return (
    <div className='table-container'>
      <table className='table'>
        <tbody>
          <tr>
            <th>Дата</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Расстояние</th>
          </tr>
          {/* {list} */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
