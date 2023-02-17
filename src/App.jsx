import React, { useEffect, useState } from 'react';
import Words from './components/Words';
import Form from './components/Form';
import Search from './components/Search';

const App = () => {
  const [data, setData] = useState([]);

  const fetchWords = async ({ search = '', onSuccess = res => console.log(res) }) => {
    try {
      const words = await (
        await fetch(`http://localhost:3000/words${search.length > 0 ? `/${search}` : ''}`)
      ).json();
      onSuccess(words);
      setData(words);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWords({ onSuccess: (words) => console.log(words) });
  }, []);

  return (
    <div>
      <h1 className="m-2 text-3xl font-bold underline">Glossary</h1>
      <div className="flex h-full sm:h-auto">
        <Form setData={setData} fetchWords={fetchWords}/>
        <div className="flex w-full flex-wrap justify-center">
          <div className="flex h-14 w-full items-center justify-center">
            <Search fetchWords={fetchWords} />
          </div>
          <Words words={data} setData={setData}/>
        </div>
      </div>
    </div>
  );
};

export default App;
