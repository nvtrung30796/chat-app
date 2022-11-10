import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom"
import { RouteItems } from './router-option';

const SlackPublicRoutes = (props) => {
    

    return (
      <Suspense fallback={null}>
      <Routes>
        {RouteItems.map(Item => {
          return (
            <Route
              key={`${Item.path}_${Item.id}`}
              exact={Item.exact}
              path={Item.path}
              component={Item.component}
              element={Item.element}
            />
          )
        })}
        </Routes>
        </Suspense>
    );
  };
  
  export default SlackPublicRoutes;