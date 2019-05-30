import * as React from 'react';
import MaskedInput from 'react-text-mask';

interface TextMaskProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const TextMask = (props: TextMaskProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' - ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' - ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' - ',
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
};

export default TextMask;
