import { ChangeEvent, Component } from 'react';

interface SearchBarProperties {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export class SearchBar extends Component<SearchBarProperties, unknown> {
  override render(): JSX.Element {
    return (
      <input
        className="SearchBox"
        placeholder="Search monsters."
        type="search"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
