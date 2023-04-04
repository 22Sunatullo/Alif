import React, { Fragment, useState } from "react";
import { Windowm } from "./Windowm/Windowm";

export const Modal = () => {
  const [showWindow, setShowmodal] = useState(false);

  return (
    <Fragment>
      <div>
        <button onClick={() => setShowmodal(true)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Добавить Данные
        </button>
      </div>
      <Windowm isviSible={showWindow} onClose={()=> setShowmodal(false)}/>
    </Fragment>
  );
};
