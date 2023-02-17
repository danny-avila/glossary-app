import React, { useState } from 'react';
import axios from 'axios';

export default function Form({ fetchWords }) {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [required, setRequired] = useState(false);

  const postWord = async (onSuccess) => {
    try {
      const res = await axios.post('http://localhost:3000/words', {
        word,
        definition
      });

      if (onSuccess) {
        onSuccess(res.data);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const disabledProp = disabled ? { disabled: true } : {};
  const requiredProp = required ? { required: true } : {};
  const inputProps = `block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500`;

  if (word.length > 0 && definition.length > 0 && disabled) {
    setDisabled(false);
  } else if ((word.length === 0 || definition.length === 0) && !disabled) {
    setDisabled(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word.length === 0 || definition.length === 0) {
      setRequired(true);
    } else {
      postWord((res) => {
        console.log('callback', res);
        fetchWords({ onSuccess: (words) => console.log(words) });
        setRequired(false);
        setWord('');
        setDefinition('');
      });
    }
  };

  const changeHandler = (e) => {
    if (!!required) {
      setRequired(false);
    }

    if (e.target.name === 'word') {
      setWord(e.target.value);
    } else if (e.target.name === 'definition') {
      setDefinition(e.target.value);
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <form className="m-2 flex flex-col items-center">
        <input
          type="text"
          name="word"
          id="word"
          placeholder="Word"
          value={word}
          onChange={changeHandler}
          className={`m-2 rounded border-2 p-1 ${inputProps}`}
          {...requiredProp}
        />
        <textarea
          name="definition"
          id="definition"
          cols="30"
          rows="10"
          placeholder="Definition"
          value={definition}
          onChange={changeHandler}
          className={`m-2 h-36 resize-none overflow-y-auto rounded border-2 p-1 text-sm ${inputProps}`}
          {...requiredProp}
        ></textarea>
        <button
          className="m-2 w-3/4 rounded border-2 p-1 py-2 px-4 font-bold hover:bg-gray-100 disabled:cursor-not-allowed disabled:border-gray-50 disabled:bg-gray-200 disabled:text-gray-400"
          {...disabledProp}
          onClick={handleSubmit.bind(this)}
        >
          Add
        </button>
      </form>
    </div>
  );
}
