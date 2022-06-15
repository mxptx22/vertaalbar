import React, { useState, useRef, useEffect } from 'react'
import { useContext } from 'react'
import {availableLanguages} from '../App'
import Config from '../pages/Config'
import PageContext from '../PageContext'

function Config3() {

  const availableColours = ["crimson","springgreen","lightpink","lightskyblue", "blanchedalmond", "lightsalmon","palevioletred","thistle","dodgerblue","yellowgreen","paleturquoise", "lightgreen"]
  const {leftAccentColour, setLeftAccentColour} = useContext(PageContext)
  const {rightAccentColour, setRightAccentColour} = useContext(PageContext)
  const {leftLanguage, rightLanguage} = useContext(PageContext)
  let leftAvailableColours = availableColours.filter(colour => colour !== rightAccentColour)
  let rightAvailableColours = availableColours.filter(colour => colour !== leftAccentColour)
  const refsLeft = useRef([])
  const refsRight = useRef([])
  const refRibbon1 = useRef()
  const refRibbon2 = useRef()
  const [ribbonIndicator, setRibbonIndicator] = useState('3')
  const [mainWindowAnimation, setMainWindowAnimation] = useState('largeCardSlideRightEntry')
  const [defaultSelectionClass, setDefaultSelectionClass] = useState('colourUnitSquare')
  const {screen, setScreen} = useContext(PageContext)

  const indexLeftLanguage = availableLanguages.findIndex(object => {
    return object.code === leftLanguage;
  });
  const leftHeaderPrompt = availableLanguages[indexLeftLanguage].chooseAccentPrompt

  const indexRightLanguage = availableLanguages.findIndex(object => {
    return object.code === rightLanguage;
  });
  const rightHeaderPrompt = availableLanguages[indexRightLanguage].chooseAccentPrompt

  const configExit = (() => {
    setMainWindowAnimation('mainWindowSlideDown');
    setTimeout(() => {
      setScreen('Four')
    }, 1500);
  })

  useEffect(() => {
    leftAvailableColours.map((colourName, i) => {refsLeft.current[i].className = 'colourUnitSquare'})
    rightAvailableColours.map((colourName, i) => {refsRight.current[i].className = 'colourUnitSquare'})
    console.log(leftAccentColour)
    console.log(rightAccentColour)
    leftAvailableColours.map((colourName, i) => {
      if (leftAccentColour === refsLeft.current[i].style.backgroundColor) {refsLeft.current[i].className = 'colourUnitSquare colourUnitSquareSelection'}})
    rightAvailableColours.map((colourName, i) => {
      if (rightAccentColour === refsRight.current[i].style.backgroundColor) {refsRight.current[i].className = 'colourUnitSquare colourUnitSquareSelection'}})
    if (leftAccentColour !== null && rightAccentColour !== null) {
      refRibbon1.current.style.width = '100%'; 
      refRibbon1.current.style.backgroundColor = 'limegreen'; 
      refRibbon2.current.style.backgroundColor = 'limegreen'; 
      refRibbon2.current.style.width = '100%'; 
      refRibbon1.current.scrollIntoView({behavior: "smooth"})
      setRibbonIndicator('➔')}
  })

  return (
    <div id="card3" className="largeCard daytime-scheme" style={{animationName:mainWindowAnimation}}>
    <div className="ribbon ribbonTop" ref={refRibbon1} onClick={() => {configExit()}}></div>
    <div className="ribbon ribbonBottom" ref={refRibbon2} onClick={() => {configExit()}}>{ribbonIndicator}</div>
    <div id="accentColourTable">
        <div id="accentColourLeft">
            <div id="accentColourLeftHeader" className="cardTitle">{leftHeaderPrompt}</div>
            <div id="accentColourSelectionLeft" className="accentColourSelection">
            {
               leftAvailableColours.map((colourName, i) => <div key={i} ref={(e) => {refsLeft.current[i] = e}} className={defaultSelectionClass} onClick={() => {setLeftAccentColour(colourName)}} style={{backgroundColor: colourName}}></div>)
            }
            </div>
        </div>
        <div id="accentColourRight">
            <div id="accentColourRightHeader" className="cardTitle">{rightHeaderPrompt}</div>
            <div id="accentColourSelectionRight" className="accentColourSelection">
            {
               rightAvailableColours.map((colourName, i) => <div key={i} ref={(e) => {refsRight.current[i] = e}} className={defaultSelectionClass} onClick={() => {setRightAccentColour(colourName)}} style={{backgroundColor: colourName}}></div>)
            }
            </div>
        </div>
    </div>
</div>
  )
}

export default Config3