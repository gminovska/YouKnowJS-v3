import React from 'react';

const TextField = ({ input, meta: { touched, error } }) => (
  <div>
    <input type="text" {...input} />
    <div>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default TextField;
