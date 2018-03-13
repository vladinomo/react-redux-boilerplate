import React from 'react';
import ProjectList from './pages/ProjectList';

const AppMain = props => (
  <div
    style={{
      fontSize: 'large',
    }}
  >
    <ProjectList props={props} />
  </div>
);

export default AppMain;
