import React from 'react';

const DemoOutput = (props) => {
  return <p>{props.show ? 'This is new!' : ''}</p>;
};

// tells react that it should look at the props and check their value
// and only if the value changes the component is re-evaluated
export default React.memo(DemoOutput);
