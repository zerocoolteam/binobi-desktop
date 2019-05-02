import * as React from 'react';

interface IFormProps {
  url: string;
  submitButton: boolean;
  formStyles?: string;
  render: () => React.ReactNode;
}

export interface IValues {
  [key: string]: any;
}

export interface IErrors {
  [key: string]: string;
}

export interface IFormState {
  values: IValues;
  errors: IErrors;
  formStyles?: string;
  submitButton: boolean;
  submitSuccess?: boolean;
}

class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);

    const errors: IErrors = {};
    const values: IValues = {};
    this.state = {
      submitButton: this.props.submitButton,
      formStyles: this.props.formStyles,
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

  public render() {
    const { submitSuccess, errors, submitButton, formStyles } = this.state;
    return (
      <form onSubmit={this.handleSubmit} noValidate={true} className={formStyles}>
        {this.props.render()}

        {submitButton && (
          <div className="form-group">
            <button type="submit" className="btn btn-primary" disabled={this.haveErrors(errors)}>
              Submit
            </button>
          </div>
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
    );
  }
}

export default Form;
