import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import Marker from "./Marker";
import { googleMapsAPIKey } from "../../Config/config";

const Wrapper = styled.main`
  display: flex;
  width: 100%;
  top: 131px;
  min-height: 100vh;
  position: sticky;
  top: 0;
  margin-top: 5.5rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: top 0.4s ease, margin-top 0.4s ease, height 0.4s ease;
  @media screen and (max-width: 967px) {
    min-height: 17rem;
    margin-top: 0;
  }
`;

const Maps = ({ items }) => {
  const [defaultLocation, setDefaultLocation] = useState([]);

  useEffect(() => {
    let getLatLong =
      items &&
      items.businesses &&
      Object.entries(items.businesses).map(([k, v]) => ({
        lat: v.coordinates.latitude,
        lng: v.coordinates.longitude,
        id: k,
        name: v.name,
        image: v.image_url,
        loc_id: v.id,
        review_count: v.review_count,
        rating: v.rating,
        categories: v.categories,
      }));
    setDefaultLocation(
      getLatLong &&
        getLatLong.slice(0, 10).map((i, index) => {
          return {
            lat: i.lat,
            lng: i.lng,
            id: index + 1,
            name: i.name,
            image_url: i.image,
            loc_id: i.loc_id,
            review_count: i.review_count,
            rating: i.rating,
            categories: i.categories,
          };
        })
    );
  }, [items]);

  const centerCords = {
    lat: defaultLocation && defaultLocation[0] && defaultLocation[0].lat,
    lng: defaultLocation && defaultLocation[0] && defaultLocation[0].lng,
  };

  return (
    <>
      <Wrapper>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: googleMapsAPIKey,
          }}
          center={centerCords}
          defaultZoom={13}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={""}
          onChildClick={""}
        >
          {defaultLocation &&
            defaultLocation.map(
              ({
                lat,
                lng,
                id,
                name,
                image_url,
                loc_id,
                review_count,
                rating,
                categories,
              }) => {
                return (
                  <Marker
                    key={id}
                    carditems={{
                      name,
                      image_url,
                      review_count,
                      rating,
                      categories,
                    }}
                    lat={lat}
                    lng={lng}
                    number={id}
                    locationId={loc_id}
                  />
                );
              }
            )}
        </GoogleMapReact>
      </Wrapper>
    </>
  );
};

export default Maps;
