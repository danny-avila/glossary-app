import React from 'react';
import WordBox from './components/WordBox';
import Form from './components/Form';
const def = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget
ultricies tincidunt, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Donec
auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, nec aliquet nisl nisl
sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, sdddddddddddddddddddddddddddd`;

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline m-2">Glossary</h1>
      <div className="flex h-full sm:h-auto">
      <Form />
      <div className="flex w-full flex-wrap justify-center">
        <WordBox definition={def} />
        <WordBox definition={def} />
      </div>
      </div>
    </div>
  );
};

export default App;
