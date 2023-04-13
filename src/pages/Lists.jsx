import Button from '../components/Button';
import { MdEdit, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Lists() {
  const deleteList = () => {
    console.log('delete list');
  };

  return (
    <>
      {/* Header + Create button */}
      <div className="flex flex-row flex-nowrap justify-between items-center px-8 py-3">
        <h1 className="text-neutral-900">List overview</h1>
        <Button text="Create list" variant="melon" to="/lists/add" />
      </div>

      {/* List grid */}
      <table className="table-auto mx-8 py-3 text-neutral-900">
        {/* Grid Header */}
        <thead>
          <tr className="grid grid-cols-4 place-items-start px-2 gap-6">
            <th>Naam</th>
            <th>Datum</th>
            <th>Tags</th>
            <th>Acties</th>
          </tr>
        </thead>
        {/* Grid rows */}
        <tbody>
          <tr className="grid grid-cols-4 px-2 gap-6 border-b-2">
            <td className="truncate">
              Lorem ips pawepjg ijpwaeg ijpawiejg paijwepg oajweg{' '}
            </td>
            <td className="truncate">26-3-2023</td>
            <td className="truncate">awega</td>
            <td className="flex gap-4 items-center">
              <Link to="/lists/{id}">
                <MdEdit />
              </Link>
              <button onClick={deleteList}>
                <MdDelete />
              </button>
            </td>
          </tr>
          <tr className="grid grid-cols-4 px-2 gap-6 border-b-2">
            <td className="truncate">
              Lorem ips pawepjg ijpwaeg ijpawiejg paijwepg oajweg{' '}
            </td>
            <td className="truncate">26-3-2023</td>
            <td className="truncate">awega</td>
            <td className="flex gap-4 items-center">
              <Link to="/lists/{id}">
                <MdEdit />
              </Link>
              <button onClick={deleteList}>
                <MdDelete />
              </button>
            </td>
          </tr>
          <tr className="grid grid-cols-4 px-2 gap-6 border-b-2">
            <td className="truncate">
              Lorem ips pawepjg ijpwaeg ijpawiejg paijwepg oajweg{' '}
            </td>
            <td className="truncate">26-3-2023</td>
            <td className="truncate">awega</td>
            <td className="flex gap-4 items-center">
              <Link to="/lists/{id}">
                <MdEdit />
              </Link>
              <button onClick={deleteList}>
                <MdDelete />
              </button>
            </td>
          </tr>
          <tr className="grid grid-cols-4 px-2 gap-6 border-b-2">
            <td className="truncate">
              Lorem ips pawepjg ijpwaeg ijpawiejg paijwepg oajweg{' '}
            </td>
            <td className="truncate">26-3-2023</td>
            <td className="truncate">awega</td>
            <td className="flex gap-4 items-center">
              <Link to="/lists/{id}">
                <MdEdit />
              </Link>
              <button onClick={deleteList}>
                <MdDelete />
              </button>
            </td>
          </tr>
          <tr className="grid grid-cols-4 px-2 gap-6 border-b-2">
            <td className="truncate">
              Lorem ips pawepjg ijpwaeg ijpawiejg paijwepg oajweg{' '}
            </td>
            <td className="truncate">26-3-2023</td>
            <td className="truncate">awega</td>
            <td className="flex gap-4 items-center">
              <Link to="/lists/{id}">
                <MdEdit />
              </Link>
              <button onClick={deleteList}>
                <MdDelete />
              </button>
            </td>
          </tr>
          <tr className="grid grid-cols-4 px-2 gap-6 border-b-2">
            <td className="truncate">
              Lorem ips pawepjg ijpwaeg ijpawiejg paijwepg oajweg{' '}
            </td>
            <td className="truncate">26-3-2023</td>
            <td className="truncate">awega</td>
            <td className="flex gap-4 items-center">
              <Link to="/lists/{id}">
                <MdEdit />
              </Link>
              <button onClick={deleteList}>
                <MdDelete />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
