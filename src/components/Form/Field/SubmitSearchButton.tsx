import * as React from 'react';

import { SearchIcon } from '../../../assets/img';

export const SubmitSearchButton = () => {
  return (
    <button type="submit">
      <img src={SearchIcon} />
    </button>
  );
};
