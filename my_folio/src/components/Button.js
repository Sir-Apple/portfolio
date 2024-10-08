import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Button({ btnLink, btnText }) {
  return (
    <div>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </div>
  );
}
