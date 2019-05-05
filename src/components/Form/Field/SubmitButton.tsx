import * as React from 'react';

interface ISubmitButton {
  styles: string;
  text: string;
}

export const SubmitButton = ({ styles, text }: ISubmitButton) => {
  return (
    <button type="submit" className={styles}>
      {text}
    </button>
  );
};
