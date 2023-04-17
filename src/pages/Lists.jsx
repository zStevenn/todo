import Button from '../components/Button';
import { MdEdit, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';

export default function Lists() {
  const [value, loading, error] = useCollectionOnce(collection(db, 'lists'));

  const deleteList = () => {
    console.log('delete list');
  };

  return (
    <>
      {/* Header + Create button */}
      <div className="flex flex-row flex-nowrap justify-between items-center px-8 py-3">
        <h1 className="text-neutral-900">List overview</h1>
        <Button text="Create list" variant="melon" to="/lists/create" />
      </div>

      {/* List grid */}
      <table className="table-auto w-full md:px-8 py-3 text-neutral-900">
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
          {error && (
            <tr>
              <td>Error: {JSON.stringify(error)}</td>
            </tr>
          )}
          {loading && (
            <tr>
              <td>Collection: Loading...</td>
            </tr>
          )}
          {value && (
            <>
              {value.docs.map((doc) => (
                <tr
                  key={doc.id}
                  className="grid grid-cols-4 px-2 py-2 gap-6 border-b-2"
                >
                  <td className="truncate">{doc.data().name}</td>
                  <td className="truncate">{doc.data().date}</td>
                  <td className="truncate">
                    {JSON.stringify(doc.data().tags)}
                  </td>
                  <td className="flex gap-4 items-center">
                    <Link to={`/lists/${doc.id}`}>
                      <MdEdit />
                    </Link>
                    <button onClick={deleteList}>
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </>
  );
}
