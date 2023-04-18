import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Input from '../components/Input';
import Alert from '../components/Alert';
import { db, auth } from '../firebase';
import { getFirestore, doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../components/Loading';

export default function EditList() {
  // Hold values for form input
  const [listName, setListName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  // Hold values for popup
  const [popup, setPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupStatus, setPopupStatus] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [popupRedir, setPopupRedir] = useState(false);
  // Hold values for displaying list information
  const [user, loading, error] = useAuthState(auth);
  const { listId } = useParams();
  const [value, docLoading, docError] = useDocument(doc(db, 'lists', listId));
  // Navigate
  const navigate = useNavigate();

  const handleListNameChange = (e) => {
    setListName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  if (!user) {
    return <>Je moet eerst inloggen.</>;
  }

  if (loading || docLoading) {
    return <Loading />;
  }

  if (error || docError) {
    return <>{error || docLoading}</>;
  }

  if (user) {
    return (
      <>
        {popup && (
          <Alert
            title={popupTitle}
            status={popupStatus}
            message={popupMessage}
            redir={popupRedir}
          />
        )}
        <div>{listId}</div>
        <div className="px-8 shadow-[15px_-1px_5px_-5px_rgba(0,0,0,0.3)] flex flex-col flex-start gap-8 h-[80vh]">
          <h1 className="text-2xl font-semibold text-neutral-900 pt-8">
            Wijzig lijst
          </h1>
          <div className="grid grid-cols-1 gap-2">
            <Input
              type="text"
              value={listName}
              onChange={handleListNameChange}
              placeholder="Lijstnaam"
            />
            <Input
              type="text"
              value={date}
              onChange={handleDateChange}
              placeholder="Datum (Optioneel)"
            />
            <Input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Omschrijving (Optioneel)"
            />
            <Input
              type="text"
              value={tag}
              onChange={handleTagChange}
              placeholder="Tags (Optioneel)"
            />
          </div>
          <button
            className="inline-flex items-center justify-center rounded-md px-4 py-2 cursor-pointer transition-colors duration-300 w-full bg-primary hover:bg-primary-hover text-white"
            type="submit"
            // onClick={handleSubmit}
          >
            Maak nieuwe lijst
          </button>
        </div>
      </>
    );
  }
}
