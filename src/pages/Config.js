import React, { useState } from 'react'
import Config1 from '../components/Config1'
import Config2 from '../components/Config2'
import Config3 from '../components/Config3'
import { useContext } from 'react'
import PageContext from '../PageContext'



function Config() {
    const [configPage, setConfigPage] = useState('One')
    const {screen} = useContext(PageContext)
    console.log(screen)
  return (
    <>
        <div id="cardHolder">
          
          {screen === 'One' && <Config1 />}
          {screen === 'Two' && <Config2 />}
          {screen === 'Three' && <Config3 />}
        </div>
    </>
  )
}

export default Config