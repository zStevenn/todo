import useFadeIn from '../hooks/useFadeIn';
import { useState } from 'react';
import Input from '../components/Input';
import Alert from '../components/Alert';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Add() {
  const addRef = useFadeIn();
  const [listName, setListName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [popup, setPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupStatus, setPopupStatus] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [popupRedir, setPopupRedir] = useState(false);
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

  // Handle logic for submitting form
  const handleSubmit = async (e) => {
    e.preventDefault;

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
        tags: tag,
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
      <div
        ref={addRef}
        className="px-8 transition-all duration-1000 opacity-0 -translate-x-32 shadow-[15px_-1px_5px_-5px_rgba(0,0,0,0.3)] flex flex-col flex-start gap-8 h-[80vh]"
      >
        <h1 className="text-2xl font-semibold text-neutral-900 pt-8">
          Maak nieuwe lijst
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
          onClick={handleSubmit}
        >
          Maak nieuwe lijst
        </button>
      </div>
    </>
  );
}
