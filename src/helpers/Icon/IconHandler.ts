/**
 * Интерфейс Обработчика объявляет метод построения цепочки обработчиков. Он
 * также объявляет метод для выполнения запроса.
 */

import * as React from 'react';

export type Icon = {
  isActive: boolean;
  type: string;
  value: string;
};

export interface Handler {
  setNext(handler: Handler): Handler;

  handle(data: Icon): boolean | React.ReactNode;
}

/**
 * Поведение цепочки по умолчанию может быть реализовано внутри базового класса
 * обработчика.
 */

abstract class IconHandler implements Handler {
  private nextHandler: Handler | undefined;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    // Возврат обработчика отсюда позволит связать обработчики простым
    // способом, вот так:
    // monkey.setNext(squirrel).setNext(dog);
    return handler;
  }

  public handle(request: Icon): boolean | React.ReactNode {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return false;
  }
}

export default IconHandler;
