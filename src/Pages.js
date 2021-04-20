import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

const Home = () => pug`h1.py-3 Home`;

const Books = () => pug`h1.py-3 Books`;

const Mobile = () => pug`h1.py-3 Mobile Phone`;

const Electronics = ({ route }) => {
  return (
    <div>
      <h1 className="py-3">Electronics</h1>
      {renderRoutes(route.routes)}
    </div>
  );
};

Electronics.propTypes = {
  route: PropTypes.object,
}

const Desktop = () => pug`h1.py-3 Desktop PC`;

export { Home, Books, Electronics, Mobile, Desktop }