import { useState } from "react";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";

export default function Button({ buttonText }) {
  //Popup style
  const contentStyle = {
    color: "black",
    background: "white",
    height: "700px",
    width: "800px",
    borderRadius: "12px",
    padding: "10px",
  };
  const overlayStyle = { background: "rgba(0, 0, 0, 0.7)" };

  //State handling & Variables
  const [isClicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(isClicked ? false : true);
  }

  const googleCalenderLink = import.meta.env.VITE_GOOGLE_CALENDAR_LINK;

  return (
    <>
      <button
        className="my-2 rounded-md bg-violet-800 px-4 py-2 tracking-widest hover:bg-violet-700 focus:ring-1 focus:ring-violet-300 active:bg-violet-700"
        onClick={handleClick}
      >
        {buttonText}
      </button>

      <Popup
        open={isClicked}
        closeOnDocumentClick
        closeOnEscape
        onClose={() => handleClick}
        position="top center"
        contentStyle={contentStyle}
        overlayStyle={overlayStyle}
      >
        <div className="bg-white text-right">
          <button
            className="text-2xl font-thin"
            onClick={() => setClicked(false)}
          >
            &times;
          </button>
          <h3 className="mb-3 text-center text-2xl font-bold">
            Finde heraus, was für Dich möglich ist.
          </h3>
          <iframe
            src={googleCalenderLink}
            width="100%"
            height="600px"
            frameBorder="0"
          />
        </div>
      </Popup>
    </>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
