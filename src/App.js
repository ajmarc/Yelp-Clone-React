import Home from "./Screens/Home";
import GlobalStyles from "./GlobalStyles";
import React, { lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import WebPageNavbar from "./Components/PagesNavBar/WebPageNavbar";

function App() {
  const location = useLocation();

  const LocationPage = lazy(() => import("./Screens/LocationPage"));
  const RestaurantPage = lazy(() => import("./Screens/RestaurantPage"));
  const Categories = lazy(() => import("./Screens/CategoriesPage"));
  return (
    <>
      {location.pathname === "/" ? null : <WebPageNavbar />}

      <ChakraProvider>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Suspense fallback={<></>}>
          <Switch>
            <Route path="/search" component={LocationPage} />
            <Route path="/businesses/:id" component={RestaurantPage} />
            <Route path="/categories" component={Categories} />
          </Switch>
        </Suspense>
      </ChakraProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
