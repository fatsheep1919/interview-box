import React from 'react';
import { Input } from '@arco-design/web-react';
import { IconSearch } from '@arco-design/web-react/icon';

import './search.css';

const Search = () => {
  return (
    <div className="search">
      <Input style={{ width: 350 }} prefix={<IconSearch />} placeholder='Search' />
    </div>
  );
}

export default Search;
