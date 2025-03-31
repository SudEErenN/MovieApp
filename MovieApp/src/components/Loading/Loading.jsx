/*import React from 'react'
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className='loading'>
      <ReactLoading type={'balls'} color={"#ffcc00"} height={'20%'} width={'20%'} />
    </div>
  )
}

export default Loading*/

import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type = "balls", color = "#ffcc00" }) => (
    <ReactLoading type={type} color={color} height={100} width={100} />
);

export default Loading;