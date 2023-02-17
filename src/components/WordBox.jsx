import React, { useState } from 'react';

function WordBox({ word = 'Hello world!', definition }) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(definition);

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };
  const changeHandler = (e) => {
    setValue(e.target.value)
  };

  return (
    <div className="container m-5 flex max-h-72 w-72 flex-col justify-center rounded-lg p-2 pl-4">
      <h1 className="text-2xl font-bold m-1">{word}</h1>
      <div className="overflow-y-auto overflow-x-hidden m-1">
        {edit ? (
          <textarea
            value={value}
            className="h-48 w-full resize-none text-sm"
            onChange={changeHandler}
          ></textarea>
        ) : (
          <p className="text-sm">{value}</p>
        )}
      </div>
      <span className="flex justify-end m-1">
        <button
          className="rounded py-2 px-4 font-bold hover:bg-gray-100"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button className="rounded py-2 px-4 font-bold hover:bg-gray-100">Delete</button>
      </span>
    </div>
  );
}

export default WordBox;
