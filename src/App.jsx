import React, { useEffect, useState } from 'react';

import PostsList from './components/PostsList';

import './App.css';

// https://jsonplaceholder.typicode.com/posts

const App = () => {
  const [searchKey, setSearchKey] = useState('');

  return (
    <div className='App'>
      <h1>Users</h1>

      <input
        type='text'
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />

      <PostsList search={searchKey} />
    </div>
  );
};

export default App;
