import styled from "styled-components/macro";

export const RestaurantCategoryItems = [
  {
    id: 0,
    title: "Restaurants",
    category: "restaurants",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/restaurants.yji-bd314b2e68342d8df2208cbee9603c6b.png",
  },
  {
    id: 1,
    title: "Reservations",
    category: "shopping",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/reservation.yji-e7b364f45667e948a9eb45f91afadc4a.png",
  },
  {
    id: 2,
    title: "Takeout",
    category: "takeout",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/takeout.yji-87dd205d75f8de519f05f9e9fd31ea4a.png",
  },
  {
    id: 3,
    title: "Auto Repair",
    category: "auto",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/auto_repair.yji-5782212a6cdee64684eecefe621208a5.png",
  },
  {
    id: 4,
    title: "Shipping",
    category: "beautysvc",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/mover.yji-0fe5286f3747f1e9f807fb45e55569cf.png",
  },
  {
    id: 5,
    title: "Plumers",
    category: "auto",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/plumbers.yji-f94be003dd9a738fec49b4a55ebf47ae.png",
  },
  {
    id: 6,
    title: "Cleaners",
    category: "homeservices",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/home_cleaning.yji-5459570b2e69c3ca3390238991fb4a0c.png",
  },
  {
    title: "Other",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_more_categories@2x.yji-e7be9a50bf8cf4a2eea9f7d7e2b5f194.png",
  },
];

export const MobileBannerContaier = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 0.8;
  height: ${(props) => (props.mobileHeight ? "10rem" : "7rem")};
  @media screen and (min-width: 967px) {
    display: none;
  }
`;

export const MainMobileLogo = styled.img`
  width: 100%;
  height: 2rem;
`;

export const SearchWrapper = styled.form`
  display: flex;
  height: 5rem;
  flex-direction: column;
  padding: 1rem 0;
  height: 100%;
  justify-content: space-evenly;
`;

export const SearchBarContainerItem = styled.input`
  width: 100%;
  height: 2rem;
  background-color: white;
  padding: 0 15px;
  border-radius: 0.3rem;
  font-size: 11px;
  outline: none;
`;

export const SearchBarContainerLocation = styled.input`
  width: 100%;
  height: 2rem;
  margin-top: 0.4rem;
  background-color: white;
  padding: 0 15px;
  border-radius: 0.3rem;
  font-size: 11px;
  outline: none;
  display: ${(props) => (props.visibility ? "none" : "flex")};
`;

export const MobileHeroBanner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 20px;
  padding: 0.5rem;
  @media screen and (min-width: 967px) {
    display: none;
  }
`;

export const IconItemsContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const IconImage = styled.img`
  height: 40px;
  width: auto;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export const IconTitle = styled.h3`
  font-weight: 500;
  font-size: 12px;
`;
