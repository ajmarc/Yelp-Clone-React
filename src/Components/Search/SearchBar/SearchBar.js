import React, { useState } from "react";

import {
  SearchBarContainer,
  SearchUnitOne,
  SearchSuggestionMainInput,
  LocationInputAside,
  SearchIcon,
  Line,
  SearchLocationInput,
  SearchUnit2,
  Line3,
} from "./SearchBarStyles";
import { useHistory, withRouter } from "react-router-dom";

const SearchBar = ({ buttonColor, iconColor }) => {
  let history = useHistory();

  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("San Francisco,CA");

  const onSubmit = (e) => {
    e.preventDefault();
    const searchObj = {
      searchTerm: term || "",
      locations: location || "San Fransisco",
      defaultTerm: "",
      defaultLocation: "Boston",
    };
    window.localStorage.setItem("searchObj", JSON.stringify(searchObj));
    history.push(`/search/${term}`);
    setTerm("");
    setLocation("");
  };

  return (
    <SearchBarContainer onSubmit={onSubmit}>
      <SearchUnitOne>
        <SearchSuggestionMainInput
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="plumbers,delivery,takeout..."
        />
      </SearchUnitOne>

      <SearchUnit2>
        <Line />
        <SearchLocationInput
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="address,city,state,or zip"
        />
        <Line3 />
      </SearchUnit2>
      <LocationInputAside color={buttonColor} type="submit">
        <SearchIcon iconColor={iconColor} size="21" />
      </LocationInputAside>
    </SearchBarContainer>
  );
};

export default withRouter(SearchBar);
