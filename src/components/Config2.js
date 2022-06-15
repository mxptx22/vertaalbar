import React, { useState } from 'react'
import { useContext } from 'react'
import {availableLanguages} from '../App'
import Config from '../pages/Config'
import PageContext from '../PageContext'


function Config2() {

  
  const [rightLanguagePrompt, setRightLanguagePrompt] = useState(availableLanguages[0]['chooseRightLanguagePrompt'])
  const {screen, setScreen} = useContext(PageContext)
  const {leftLanguage, rightLanguage, setRightLanguage} = useContext(PageContext)
  const newAvailableLanguages = availableLanguages.filter(language => language.code !== leftLanguage)
  return (
      <>
    <div id="card2" className="largeCard daytime-scheme">
    <div className="ribbon ribbonTop" onClick={() => {setScreen('One')}}></div>
    <div className="ribbon ribbonBottom" onClick={() => {setScreen('One')}}>2</div>
    <div className="cardTitle" id="cardTitleTwo">{rightLanguagePrompt}</div>
    <div id="rightLanguages">
        
        {
        newAvailableLanguages.map(({ name, flagLocation, chooseRightLanguagePrompt, code }) => (
        <div id={code} key={code} className='languageCard' onMouseEnter={() => {setRightLanguagePrompt(chooseRightLanguagePrompt)}} onClick={() => {setRightLanguage(code); setScreen('Three');}}>
            <img src={flagLocation} alt=""></img>
            {name}
        </div>
      ))
      }
    </div>
</div>
</>
  )
}

export default Config2