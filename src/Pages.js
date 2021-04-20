import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = () => pug`h1.py-3 Home`;

const Books = () => pug`h1.py-3 Books`;

const Mobile = () => pug`h1.py-3 Mobile Phone`;

const Electronics = () => pug`
  div
    h1.py-3 Electronics

    Switch
      Route(path="/electronics/mobile" component=Mobile)
`;

const Desktop = () => pug`h1.py-3 Desktop PC`;

export { Home, Books, Electronics, Mobile, Desktop }