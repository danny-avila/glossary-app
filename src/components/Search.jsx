import React from 'react';
import { debounce } from 'lodash';
const inputProps = `block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500`;

const Search = ({ fetchWords }) => {
  const debouncedFetch = debounce((e) => {
    fetchWords({ search: e.target.value });
  }, 300);

  return (
    <div className="">
      <input
        className={`rounded border-2 p-1 text-sm ${inputProps}`}
        placeholder="Search"
        onChange={debouncedFetch}
      />
    </div>
  );
};

export default Search;
