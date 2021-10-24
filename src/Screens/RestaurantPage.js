import React from "react";
import { useGetResultByIdQuery } from "../Services/rtkApi";
import BusinessDetailsCard from "../Components/BusinessDetailsCard/BusinessDetailsCard";
import BusinessDetailsCardSkeleton from "../Components/BusinessDetailsCard/BusinessDetailsCardSkeleton";
import { useParams } from "react-router-dom";
const RestaurantPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetResultByIdQuery(id);

  return (
    <>
      {isLoading ? (
        <BusinessDetailsCardSkeleton />
      ) : (
        <BusinessDetailsCard items={data} />
      )}
    </>
  );
};

export default RestaurantPage;
