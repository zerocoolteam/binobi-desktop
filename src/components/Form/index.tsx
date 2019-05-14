import * as React from 'react';
import { SubmitButton } from './Field';
import * as styles from './style.css';
import classNames from 'classnames';
import { Handler } from '../../helpers/Icon/IconHandler';

export { SearchInput, SubmitButton, SubmitSearchButton, BlockRadio } from './Field';

interface IFormProps {
  formStyles?: string;
  submitButton?: boolean;
  submitButtonText?: string;
  checkedRadioId?: string;
  submitFormButtonStyles?: string;
  iconHandler?: Handler;
}

export interface IValues {
  [key: string]: any;
}

export interface IErrors {
  [key: string]: string;
}

export interface IFormState {
  url?: string;
  values: IValues;
  errors: IErrors;
  formStyles?: string;
  submitButton?: boolean;
  submitSuccess?: boolean;
  submitButtonText?: string;
  checkedRadioId?: string;
  submitFormButtonStyles?: string;
  iconHandler?: Handler;
  [key: string]: any;
}

class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);

    const errors: IErrors = {};
    const values: IValues = {};
    this.state = {
      ...this.props,
      errors,
      values
    };
  }

  protected haveErrors(errors: IErrors) {
    let haveError: boolean = false;
    Object.keys(errors).map((key: string) => {
      if (errors[key].length > 0) {
        haveError = true;
      }
    });
    return haveError;
  }

  protected handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (this.validateForm()) {
      const submitSuccess: boolean = await this.submitForm();
      this.setState({ submitSuccess });
    }
  }

  protected validateForm(): boolean {
    // TODO - validate form
    return true;
  }

  protected async submitForm(): Promise<boolean> {
    // TODO - submit the form
    return true;
  }

  protected renderFields(): React.ReactNode {
    return;
  }

  public render() {
    const {
      submitSuccess,
      errors,
      submitButton,
      formStyles,
      submitButtonText,
      submitFormButtonStyles
    } = this.state;
    return (
      <div className={classNames(styles.formContainer, formStyles)}>
        <form onSubmit={this.handleSubmit} noValidate={true}>
          {this.renderFields()}

          {submitButton && (
            <SubmitButton
              styles={classNames(styles.submitFormButton, submitFormButtonStyles)}
              text={submitButtonText as string}
            />
          )}

          {submitSuccess && (
            <div className="alert alert-info" role="alert">
              The form was successfully submitted!
            </div>
          )}
          {submitSuccess === false && !this.haveErrors(errors) && (
            <div className="alert alert-danger" role="alert">
              Sorry, an unexpected error has occurred
            </div>
          )}
          {submitSuccess === false && this.haveErrors(errors) && (
            <div className="alert alert-danger" role="alert">
              Sorry, the form is invalid. Please review, adjust and try again
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default Form;
