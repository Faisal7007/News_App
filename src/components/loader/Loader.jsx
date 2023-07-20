import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
function Loader() {
  return (
    <div style={{display:'flex',justifyContent:'center',fontSize:'15px'}}>
      <Spinner style={{color:'black',fontWeight:'700'}}  animation="border" role="status"></Spinner>
    </div>
  )
}

export default Loader
