import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route, Link } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
import routes from './routes';

const Home = () => pug`h1.py-3 Home`;

const Books = () => pug`h1.py-3 Books`;

const Mobile = (props) => {
  console.log(props);
  return pug`h1.py-3 Mobile Phone`
};

const Electronics = ({ route, location }) => {
  let matchedRoutes = matchRoutes(routes, location.pathname);
  console.log('matchedRoutes in Electronics', matchedRoutes);

  matchedRoutes = [
    {
      route: {
        path: '/',
        breadcrumbName: 'Home'
      }
    },
    ...matchedRoutes
  ];

  return (
    <div>
      <h1 className="py-3">Electronics</h1>
      <nav>
        <ol>
          {matchedRoutes.map((matchRoute, i) => {
            const { path, breadcrumbName } = matchRoute.route;

            const isActive = path === location.pathname;

            return isActive ? (
              <li key={i}>
                {breadcrumbName}
              </li>
            ) : (
              <li key={i}>
                <Link to={path}>{breadcrumbName} </Link>
              </li>
            );
          })}
        </ol>
      </nav>

      {renderRoutes(route.routes)}
    </div>
  );
};

Electronics.propTypes = {
  route: PropTypes.object,
  location: PropTypes.object,
}

const Desktop = () => pug`h1.py-3 Desktop PC`;

export { Home, Books, Electronics, Mobile, Desktop }