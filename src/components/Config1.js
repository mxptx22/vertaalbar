import React, { useState } from 'react'
import { useContext } from 'react'
import {availableLanguages} from '../App'
import Config from '../pages/Config'
import PageContext from '../PageContext'


function Config1() {

  
  const [leftLanguagePrompt, setLeftLanguagePrompt] = useState(availableLanguages[0]['chooseLeftLanguagePrompt'])
  // const [leftLanguage, setLeftLanguage] = useState('')
  const {screen, setScreen} = useContext(PageContext)
  const {leftLanguage, setLeftLanguage} = useContext(PageContext)
  // const {setScreen} = useContext(PageContext)

  return (
      <>
    <div id="card1" className="largeCard daytime-scheme">
    <div className="ribbon ribbonTop"></div>
    <div className="ribbon ribbonBottom">1</div>
    <div className="cardTitle" id="cardTitleOne">{leftLanguagePrompt}</div>
    <div id="leftLanguages">
        
        {availableLanguages.map(({ name, flagLocation, chooseLeftLanguagePrompt, code }) => (
        <div id={code} key={code} className='languageCard' onMouseEnter={() => {setLeftLanguagePrompt(chooseLeftLanguagePrompt)}} onClick={() => {setLeftLanguage(code); setScreen('Two');}}>
            <img src={flagLocation} alt=""></img>
            {name}
        </div>
      ))}
    </div>
</div>
</>
  )
}

export default Config1