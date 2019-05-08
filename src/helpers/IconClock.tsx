import * as React from 'react';

interface IIcon {
  isActive: boolean;
  type: string;
}

export default ({ type, isActive }: IIcon) => {
  const activeIconColor: string = '#FF7D00';

  const colorIcon = (baseIconColor: string) => {
    return isActive ? activeIconColor : baseIconColor;
  };

  const halfAnHour = () => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="10" fill={colorIcon('#FFF4E5')} stroke="#FF7D00" />
        <path
          d="M11 5V11.6301C11 11.7322 11.1349 11.7687 11.1864 11.6805L14.5 6"
          stroke="#FF7D00"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  const hour = () => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="10" fill={colorIcon('#E8F9E5')} stroke="#10C971" />
        <path
          d="M11 5V11.7919C11 11.8758 11.097 11.9224 11.1625 11.87L16 8"
          stroke="#10C971"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  const twoHour = () => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="10" fill={colorIcon('#E6F0F7')} stroke="#46AAF2" />
        <path
          d="M11 5V11.8613C11 11.9295 11.0669 11.9777 11.1316 11.9561L17 10"
          stroke="#46AAF2"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  const fourHour = () => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="10" fill={colorIcon('#F0EBFB')} stroke="#613EEA" />
        <path
          d="M11 5V11.9434C11 11.9785 11.0184 12.0111 11.0486 12.0291L16 15"
          stroke="#613EEA"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  const eightHour = () => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="10" fill={colorIcon('#FBEBEF')} stroke="#FA2E69" />
        <path
          d="M11 5V11.9586C11 11.9851 10.9895 12.0105 10.9707 12.0293L7 16"
          stroke="#FA2E69"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  const customHour = () => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="10" fill={colorIcon('#F2F2F2')} stroke="#808080" />
      </svg>
    );
  };

  switch (type) {
    case 'half-an-hour':
      return halfAnHour();
    case 'hour':
      return hour();
    case 'two-hour':
      return twoHour();
    case 'four-hour':
      return fourHour();
    case 'eight-hour':
      return eightHour();
    default:
      return customHour();
  }
};
