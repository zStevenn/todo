import Button from '../components/Button';
import { MdEdit, MdDelete, MdViewList } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { collection, query, where } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Title } from '../components/Dashboard';

export default function Lists() {
  const [user, userLoading, userError] = useAuthState(auth);

  const deleteList = () => {
    console.log('delete list');
  };

  if (!user) {
    return <p>User is not logged in!</p>;
  }

  const listsRef = collection(db, 'lists');
  const userListQuery = query(listsRef, where('userUID', '==', user.uid));
  const [value, loading, error] = useCollection(userListQuery);

  return (
    <div className="px-8 md:max-w-screen-md md:mx-auto">
      {/* Header + Create button */}
      <div className="flex flex-row flex-nowrap justify-between items-center py-3">
        <Title>List overview</Title>
        <Button text="Create list" variant="melon" to="/lists/create" />
      </div>

      {/* List grid */}
      <table className="table-auto w-full py-3 text-neutral-900">
        {/* Grid Header */}
        <thead>
          <tr className="grid grid-cols-3 md:grid-cols-4 place-items-start gap-6">
            <th>Name</th>
            <th>Date</th>
            <th className="hidden md:block">Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* Grid rows */}
        <tbody>
          {error && (
            <tr className="col-span-3 md:col-span-4">
              <td>Error: {JSON.stringify(error)}</td>
            </tr>
          )}
          {loading && (
            <tr className="col-span-3 md:col-span-4">
              <td>Loading data...</td>
            </tr>
          )}
          {value && (
            <>
              {value.docs.map((doc) => (
                <tr
                  key={doc.id}
                  className="grid grid-cols-3 md:grid-cols-4 py-3 gap-6 border-b-2 "
                >
                  <td className="truncate text-lg">{doc.data().name}</td>
                  <td className="truncate text-lg">{doc.data().date}</td>
                  <td className="truncate text-lg hidden md:block">
                    {doc.data().description}
                  </td>
                  <td className="flex gap-4 items-center">
                    <Link to={`/lists/${doc.id}`}>
                      <MdViewList className="text-xl" />
                    </Link>
                    <Link to={`/lists/edit/${doc.id}`}>
                      <MdEdit className="text-xl" />
                    </Link>
                    <button onClick={deleteList}>
                      <MdDelete className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}
