import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import axios from 'axios';

function WordBox({ word = 'Hello world!', definition, _id, remove }) {
  const [edit, setEdit] = useState(false);
  const [def, setDef] = useState(definition);
  const [title, setTitle] = useState(word);

  const updateWord = async ({ word, definition, deleteWord = false }) => {
    const endpoint = deleteWord ? 'delete' : 'update';

    try {
      const res = await axios.post(`http://localhost:3000/words/${endpoint}`, {
        _id,
        word,
        definition
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
    if (edit) {
      updateWord({ word: title, definition: def });
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    updateWord({ deleteWord: true });
    remove(_id);
  };

  const changeHandler = (e) => {
    if (e.target.name === 'word') {
      setTitle(e.target.value);
    } else if (e.target.name === 'definition') {
      setDef(e.target.value);
    }
  };

  return (
    <div className="container m-5 flex max-h-72 w-72 flex-col items-center rounded-lg border-4 p-2 p-4 shadow-lg">
      {edit ? (
        <input
          value={title}
          name="word"
          className="m-1 w-3/4 rounded border-2 text-center text-2xl font-bold"
          onChange={changeHandler}
        />
      ) : (
        <h1 className="m-1 text-2xl font-bold">{title}</h1>
      )}
      {edit ? (
        <TextareaAutosize
          autoFocus
          name="definition"
          value={def}
          className="m-1 max-h-52 w-full resize-none rounded border-2 p-1 text-sm  focus:outline-none focus:ring-0 focus-visible:ring-0"
          onChange={changeHandler}
        />
      ) : (
        <p className="text-sm">{def}</p>
      )}
      <span className="m-1 mt-auto flex justify-end">
        <button
          className={`m-1 h-3/4 content-center rounded border-2 border-white py-2 px-4 text-sm font-bold hover:bg-gray-100 ${
            edit ? 'border-gray-400 bg-gray-300' : ''
          }}`}
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="m-1 h-3/4 content-center rounded py-2 px-4 text-sm font-bold hover:bg-gray-100"
          onClick={handleDelete}
        >
          Delete
        </button>
      </span>
    </div>
  );
}

export default WordBox;
