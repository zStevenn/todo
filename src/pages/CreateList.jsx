import useFadeIn from '../hooks/useFadeIn';
import { useState } from 'react';
import Input from '../components/Input';
import Alert from '../components/Alert';

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

  const handleDismissPopup = () => {
    setPopup(false);
  };

  const createList = () => {
    setPopupTitle('Title');
    setPopupStatus('danger');
    setPopupMessage('Popup bericht inhoud blabla xx');
    setPopup(true);
  };

  return (
    <>
      {popup && (
        <Alert
          title={popupTitle}
          status={popupStatus}
          message={popupMessage}
          handleClick={handleDismissPopup}
        />
      )}
      <div
        ref={addRef}
        className="px-8 py-3 transition-all duration-1000 opacity-0 -translate-x-32 shadow-[15px_-1px_5px_-5px_rgba(0,0,0,0.3)]"
      >
        <h1 className="text-2xl font-semibold text-neutral-900">
          Maak nieuwe lijst
        </h1>
        <div className="grid grid-cols-1 gap-2 py-6">
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
          type="button"
          onClick={createList}
        >
          Maak nieuwe lijst
        </button>
      </div>
    </>
  );
}
