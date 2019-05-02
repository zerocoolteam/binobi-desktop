import * as React from 'react';

import { SearchIcon } from '../../../../docs/img';

export const SubmitSearchButton = () => {
  return (
    <button type="submit">
      <img src={SearchIcon} />
    </button>
  );
};
