import React from 'react';

import {GameProvider} from './game';

const AppProvider: React.FC = ({children}) => (
  <GameProvider>{children}</GameProvider>
);

export default AppProvider;
