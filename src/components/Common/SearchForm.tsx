import * as React from 'react';
import Form from '../Form';
import * as styles from './style.css';
import { SearchInput, SubmitSearchButton } from '../Form/Field';

export default class SearchForm extends Form {
  protected async submitForm(): Promise<boolean> {
    return true;
  }

  protected renderFields(): React.ReactNode {
    return (
      <div className={styles.searchForm}>
        <SubmitSearchButton />
        <SearchInput id="search" placeholder={this.state.submitButtonText} fieldStyle={styles.searchInput} />
      </div>
    );
  }
}
