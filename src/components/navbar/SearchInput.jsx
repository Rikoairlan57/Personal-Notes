import React from "react";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState(() => {
      return {
        keyword: event.target.value,
      };
    });

    this.props.searchKeyword(event.target.value);
  }

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          value={this.state.keyword}
          id="search"
          onChange={this.onChangeHandler}
          placeholder="Search your notes"
        />
      </div>
    );
  }
}

export default SearchInput;
