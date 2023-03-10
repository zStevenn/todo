const Popup = ({ children, title, closePopup }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <h2>{title}</h2>
          <button onClick={closePopup}>Close</button>
        </div>
        <div className="popup-content">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
