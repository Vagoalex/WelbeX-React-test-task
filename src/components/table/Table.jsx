import ErrorMessage from './error-message/ErrorMessage';
import Spinner from './spinner/Spinner';
import './Table.scss';

const Table = ({ data, process }) => {
  // eslint-disable-next-line default-case
  switch (process) {
    case 'loading' || 'waiting':
      return <Spinner />;
    case 'error':
      return <ErrorMessage />;
    case 'confirmed':
      const today = new Date().toISOString().slice(0, 10);

      const renderList = () => {
        return data.map((item) => (
          <tr key={item.id}>
            <td className='table__item'>{today}</td>
            <td className='table__item'>{item.name}</td>
            <td className='table__item'>{item.quantity}</td>
            <td className='table__item'>{item.distance}</td>
          </tr>
        ));
      };

      const list = renderList();

      return (
        <section className='table-container'>
          <table className='table'>
            <tbody>
              <tr>
                <th className='table__title'>Дата</th>
                <th className='table__title'>Название</th>
                <th className='table__title'>Количество</th>
                <th className='table__title'>Расстояние</th>
              </tr>
              {list}
            </tbody>
          </table>
        </section>
      );
  }
};

export default Table;
