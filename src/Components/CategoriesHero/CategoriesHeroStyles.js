import styled from "styled-components/macro";

export const RestaurantItems = [
  {
    id: 0,
    title: "Restaurants",
    category: "restaurants",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants@2x.yji-7cef764a214416ca9991e53ceb108b5c.png",
  },
  {
    id: 1,
    title: "Shopping",
    category: "shopping",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_shopping@2x.yji-559f23226d9f9f651812ddc5d6e3d1b2.png",
  },
  {
    id: 2,
    title: "Nightlife",
    category: "nightlife",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_nightlife@2x.yji-925cd32ac4c934d465c664f140c5b629.png",
  },
  {
    id: 3,
    title: "Active Life",
    category: "active",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_active_life@2x.yji-2df9fcd6a68eb739e68a026778dd7a3f.png",
  },
  {
    id: 4,
    title: "Beauty & Spas",
    category: "beautysvc",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_beauty@2x.yji-3cfb4e602ac139443228f090ec71b84f.png",
  },
  {
    id: 5,
    title: "Automotive",
    category: "auto",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_automotive@2x.yji-c73bd70791375ec60256243055745f63.png",
  },
  {
    id: 6,
    title: "Home Services",
    category: "homeservices",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_home_services@2x.yji-20723ad0e5ee302de563935be68c6638.png",
  },
  {
    title: "More Categories",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_more_categories@2x.yji-e7be9a50bf8cf4a2eea9f7d7e2b5f194.png",
  },
];

export const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  bottom: 20px;
`;

export const HeaderText = styled.h3`
  font-weight: 700;
  font-size: 21px;
  color: #f43939;
  text-align: center;
  margin: 20px;

  @media (max-width: 968px) {
    font-size: 17px;
  }
`;

export const BannerWrapper = styled.div`
  display: flex;
  min-height: 410px;
  max-height: 420px;
  background-color: #f5f5f5;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;

  @media (max-width: 968px) {
    display: none;
  }
`;

export const IconTileContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-template-rows: repeat(2, minmax(100px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 0.3rem;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
  align-items: stretch;
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    grid-column-gap: 1rem;
    min-width: auto;
  }
`;

export const IconTileContainer = styled.div`
  display: flex;
  grid-gap: 1px;
  justify-self: center;
  align-self: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;

  @media (max-width: 968px) {
    margin: 0 auto;
  }
`;

export const TileMain = styled.div`
  display: flex;
  padding: 1rem;
  min-width: 180px;
  max-width: 190px;
  background-color: white;
  border: 1.5px solid #e6e6e6;
  text-align: center;
  border-radius: 4px;
  margin: 5px 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 968px) {
    min-width: 180px;
    min-height: 120px;
  }

  @media (max-width: 330px) {
    margin: 0.3rem 2rem;
  }
`;

export const IconMain = styled.img`
  height: 65px;
  width: 65px;
  justify-self: center;
  @media (max-width: 624px) {
    height: 40px;
    width: 40px;
  }
`;

export const TiteTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  padding: 2px 0;
  margin-top: 2px;
  @media (max-width: 624px) {
    font-size: 12px;
  }
`;
