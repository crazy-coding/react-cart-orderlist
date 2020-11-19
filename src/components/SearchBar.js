import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export default function SearchBar(props) {
  function handleSearch(event) {
    props.setSearch(event.target.value);
  }

  return (
    <InputGroup>
      <FormControl
        placeholder="Search Items (F7) Clear (Esc)"
        value={props.search}
        onChange={handleSearch}
      />
    </InputGroup>
  );
}
