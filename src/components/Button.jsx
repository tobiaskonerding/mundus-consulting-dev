import { useState } from "react";
import Popup from "reactjs-popup";

export default function Button(props) {
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

  //State handling
  const [isClicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(isClicked ? false : true);
  }

  return (
    <>
      <button
        className="py-2 px-4 my-2 rounded-md bg-violet-800 hover:bg-violet-700 active:bg-violet-700 focus:ring-1 focus:ring-violet-300"
        onClick={handleClick}
      >
        {props.buttonText}
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
          <h3 className="text-2xl text-center font-bold mb-3">
            Finde heraus, was für Dich möglich ist.
          </h3>
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1-XqEe3AtU27vH78sArIv5wJCPyBvSUAXlyqv1o3ZS_OCi27Ut5-25C-4OT7UWETznyWaso6bP?gv=true"
            width="100%"
            height="600px"
            frameBorder="0"
          />
        </div>
      </Popup>
    </>
  );
}
