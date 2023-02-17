import React from 'react';

export default function Form() {
  return (
    <div className="flex flex-col items-center ">
      <form className="m-2 flex flex-col items-center">
        {/* <label htmlFor="word">Word</label> */}
        <input
          type="text"
          name="word"
          id="word"
          placeHolder="Word"
          className="m-2 p-1"
        />
        {/* <label htmlFor="definition">Definition</label> */}
        <textarea
          name="definition"
          id="definition"
          cols="30"
          rows="10"
          placeHolder="Definition"
          className="m-2 resize-none p-1 overflow-y-auto h-36"
        ></textarea>
        <button className="m-2 rounded p-1 py-2 px-4 font-bold hover:bg-gray-100">Add</button>
      </form>
    </div>
  );
}
