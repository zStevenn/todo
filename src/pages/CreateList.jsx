import { useState } from 'react';
import Input from '../components/Input';
import Alert from '../components/Alert';
import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';

export default function Add() {
  const [listName, setListName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [popup, setPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupStatus, setPopupStatus] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [popupRedir, setPopupRedir] = useState(false);
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const handleListNameChange = (e) => {
    setListName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // Handle logic for submitting form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if listname is set
    if (!listName) {
      // Display error alert if no listname
      setPopupTitle('Oeps! Een foutje...');
      setPopupStatus('danger');
      setPopupMessage('Je moet een geldige lijstnaam invoeren.');
      setPopup(true);
      setTimeout(() => {
        setPopup(false); // set the showAlert state back to false after 5 seconds
      }, 5000);
      return;
    }

    try {
      const newListRef = await addDoc(collection(db, 'lists'), {
        name: listName,
        date: date,
        description: description,
        userUID: user.uid,
      });
      // See if document is created or not
      console.log('Document written with ID: ', newListRef.id);

      // Set success popup and redirect to lists if document is created
      if (newListRef.id) {
        setPopupTitle('Woohoo, gelukt!');
        setPopupStatus('success');
        setPopupMessage('Je lijst is aangemaakt.');
        setPopupRedir(true);
        setPopup(true);
        setTimeout(() => {
          setPopup(false); // set the showAlert state back to false after 5 seconds
          navigate('/lists');
        }, 5000);
      }
    } catch (err) {
      // Display error message and console log if err
      setPopupTitle('Oeps! Een foutje...');
      setPopupStatus('danger');
      setPopupMessage(JSON.stringify(err));
      setPopupRedir(false);
      setPopup(true);
      setTimeout(() => {
        setPopup(false); // set the showAlert state back to false after 5 seconds
      }, 5000);
      console.log(err);
    }
  };

  if (!user) {
    return <p>Not logged in!</p>;
  }

  if (loading) {
    return <p>User is loading</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

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
      <div className="px-8 flex flex-col flex-start gap-8 md:max-w-screen-md md:mx-auto">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-2xl font-semibold text-neutral-900 pt-8">
            Maak nieuwe lijst
          </h1>
          <button onClick={() => navigate('/lists')}>
            <MdKeyboardDoubleArrowLeft className="text-3xl" />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <Input
            type="text"
            value={listName}
            onChange={handleListNameChange}
            placeholder="Lijstnaam"
          />
          <Input
            type="date"
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
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md px-4 py-2 cursor-pointer transition-colors duration-300 w-full bg-primary hover:bg-primary-hover text-white"
          type="submit"
          onClick={handleSubmit}
        >
          Maak nieuwe lijst
        </button>
      </div>
    </>
  );
}
