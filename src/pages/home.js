import React from 'react'
import { useState } from 'react'

import Button from '../componentsForms/button';
import Input from '../componentsForms/input';

import * as STYLE from '../repo/styled'

function Home(props) {
  const [ user, setUser ] = useState('')

  return (  
    <>
      <STYLE.Title>{props.title}</STYLE.Title>
      <Input setUser={setUser}/>
      <Button user={user}/>
    </>
  )
}

export default Home;