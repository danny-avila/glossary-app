import React from 'react';
import WordBox from './WordBox';

const Words = ({ words, setData }) => {
  const remove = (_id) => {
    setData((prev) => prev.filter((word) => word._id !== _id));
  };

  return (
    <>
      {words.map((word) => (
        <WordBox key={word._id} _id={word._id} word={word.word} definition={word.definition} remove={remove}/>
      ))}
    </>
  );
};

export default Words;
