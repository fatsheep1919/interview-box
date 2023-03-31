import React from 'react';

import './tag.css';

const BOX_TAG_COLOR = {
  'event': '#DAD7FE',
  'festival': '#FFE5D3',
  'general': '#E2FBD7',
}

const PRODUCT_COLOR = {
  'published': '#32936f29',
};

const TAG_COLOR_MAP = {
  ...BOX_TAG_COLOR,
  ...PRODUCT_COLOR,
}

const TAG_NAMES = Object.keys(BOX_TAG_COLOR).map(it => it.charAt(0).toUpperCase() + it.substring(1));

const Tag = (props) => {
  const { name, color } = props;
  const lowerCaseName = (name || '').toLowerCase();
  return lowerCaseName && (
    <div
      className="tag"
      style={{
        backgroundColor: TAG_COLOR_MAP[lowerCaseName] || 'none',
        color: color || '#000',
      }}
    >
      { name }
    </div>
  );
}

export default Tag;
export {
  TAG_NAMES
}
