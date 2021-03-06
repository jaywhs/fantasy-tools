/** @jsx jsx */
import { jsx } from '@emotion/core';
// eslint-disable-next-line
import React from 'react';
import { CircularProgress } from '@material-ui/core';

const FullPageLoader = () => (
  <div
    css={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}
  >
    <CircularProgress />
  </div>
);
export default FullPageLoader;
