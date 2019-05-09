import * as React from 'react';
import IconHandler, { Icon } from './IconHandler';

class IconClockHandler extends IconHandler {
  private readonly activeIconColor: string = '#FF7D00';

  public handle(request: Icon): boolean | React.ReactNode {
    if (request.type === 'clock') {
      switch (request.value) {
        case 'half-an-hour':
          return this.halfAnHour(request);
        case 'hour':
          return this.hour(request);
        case 'two-hour':
          return this.twoHour(request);
        case 'four-hour':
          return this.fourHour(request);
        case 'eight-hour':
          return this.eightHour(request);
        default:
          return this.customHour(request);
      }
    }

    return super.handle(request);
  }

  private colorIcon = (baseIconColor: string, isActive: boolean) => {
    return isActive ? this.activeIconColor : baseIconColor;
  }

  private halfAnHour = ({isActive}: Icon) => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="10" fill={this.colorIcon('#FFF4E5', isActive)} stroke="#FF7D00" />
        <path
          d="M11 5V11.6301C11 11.7322 11.1349 11.7687 11.1864 11.6805L14.5 6"
          stroke="#FF7D00"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  private hour = ({isActive}: Icon) => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="10" fill={this.colorIcon('#E8F9E5', isActive)} stroke="#10C971" />
        <path
          d="M11 5V11.7919C11 11.8758 11.097 11.9224 11.1625 11.87L16 8"
          stroke="#10C971"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  private twoHour = ({isActive}: Icon) => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="10" fill={this.colorIcon('#E6F0F7', isActive)} stroke="#46AAF2" />
        <path
          d="M11 5V11.8613C11 11.9295 11.0669 11.9777 11.1316 11.9561L17 10"
          stroke="#46AAF2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  private fourHour = ({isActive}: Icon) => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="10" fill={this.colorIcon('#F0EBFB', isActive)} stroke="#613EEA" />
        <path
          d="M11 5V11.9434C11 11.9785 11.0184 12.0111 11.0486 12.0291L16 15"
          stroke="#613EEA"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  private eightHour = ({isActive}: Icon) => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="10" fill={this.colorIcon('#FBEBEF', isActive)} stroke="#FA2E69" />
        <path
          d="M11 5V11.9586C11 11.9851 10.9895 12.0105 10.9707 12.0293L7 16"
          stroke="#FA2E69"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  private customHour = ({isActive}: Icon): React.ReactNode => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="10" fill={this.colorIcon('#F2F2F2', isActive)} stroke="#808080" />
      </svg>
    );
  }
}

export default IconClockHandler;
