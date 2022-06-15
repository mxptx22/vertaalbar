import React, { useEffect, useRef, useState } from 'react'
import {availableLanguages} from '../App'
import { useContext } from 'react'
import PageContext from '../PageContext'
import Config1 from '../components/Config1'
import Printing from './Printing'




function Conversation() {

    const {leftAccentColour} = useContext(PageContext)
    const {rightAccentColour} = useContext(PageContext)
    const {leftLanguage, rightLanguage} = useContext(PageContext)
    const [message, setMessage] = useState('')
    const {conversation, setConversation} = useContext(PageContext)
    const {screen, setScreen} = useContext(PageContext)
    const messageContainerRef = useRef()
    const scrollToRef = (ref) => ref.current.scrollIntoView({block: "end"})   

    useEffect(() => {
      scrollToRef(messageContainerRef)
    
    }, [conversation])
    


    function leftLanguageMessageSend() {
        const options = {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '5c7ef54236msh4e77c55f2c97e22p1f7c4djsn167cc81ac7ec',
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
          },
          body: '[{"Text":"' + message + '"}]'
        };
        
        fetch('https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=' + rightLanguage + '&api-version=3.0&profanityAction=NoAction&textType=plain', options)
          .then(response => response.json())
          .then((response) => {
            console.log(response[0].translations[0].text)
            setConversation((pastMessages) => [...pastMessages, {'sender':'left', 'original':message, 'translation':response[0].translations[0].text}])
            console.log(conversation)
          })
          .catch(err => console.error(err));
    }

    function rightLanguageMessageSend() {
      
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '5c7ef54236msh4e77c55f2c97e22p1f7c4djsn167cc81ac7ec',
          'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        body: '[{"Text":"' + message + '"}]'
      };
      
      fetch('https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=' + leftLanguage + '&api-version=3.0&profanityAction=NoAction&textType=plain', options)
        .then(response => response.json())
        .then((response) => {
          console.log(response[0].translations[0].text)
          setConversation((pastMessages) => [...pastMessages, {'sender':'right', 'original':message, 'translation':response[0].translations[0].text}])
          console.log(conversation)
          
        })
        .catch(err => console.error(err));


  }

  
// General scroll to element function



    const indexLeftLanguage = availableLanguages.findIndex(object => {
        return object.code === leftLanguage;
      });
      const leftLanguageName = availableLanguages[indexLeftLanguage].name
      const leftEmoji = availableLanguages[indexLeftLanguage].emoji
      const leftLanguageMessageSendPrompt = availableLanguages[indexLeftLanguage].sendPrompt
    
      const indexRightLanguage = availableLanguages.findIndex(object => {
        return object.code === rightLanguage;
      });
      const rightLanguageName = availableLanguages[indexRightLanguage].name
      const rightEmoji = availableLanguages[indexRightLanguage].emoji
      const rightLanguageMessageSendPrompt = availableLanguages[indexRightLanguage].sendPrompt

  return (
    <>
    
    <div id="space">
    <div id="mainwindow">
        <div id="topBar" className="daytime-scheme" style={{position:'relative'}}>
          {/* <div style={{position:'absolute', left:'0', color:'red'}} onClick={()=>{setScreen('Five')}}>◀</div> */}
          <div style={{position:'absolute', left:'0%', marginLeft:'1em', cursor:'pointer', fontSize:'2.50em'}} onClick={()=>{setScreen('Five')}}>◀</div>
            <div id="leftLanguagePicture" style={{backgroundColor:leftAccentColour}} className="languagePicture">{leftEmoji}</div>
            <div id="leftLanguageNameHeader" className="languageNameHeader">{leftLanguageName}</div>
            ⇄
            <div id="rightLanguagePicture" style={{backgroundColor:rightAccentColour}} className="languagePicture">{rightEmoji}</div>
            <div id="rightLanguageNameHeader" className="languageNameHeader">{rightLanguageName}</div>
        </div>
        <div id="middleSection" className="daytime-scheme-2" ><div id="messageContainer" >
          {conversation.map((ele,id) => {return(<div className='messageBubbleStyling' style={{backgroundColor: (ele.sender !== 'right' ? leftAccentColour : rightAccentColour), alignSelf: (ele.sender !== 'right' ? 'flex-start' : 'flex-end')}}>{ele.translation}</div>)})}
          <div ref={messageContainerRef}></div>
          </div>
          
          </div>
        <div id="bottomSection" className="daytime-scheme">
            <button id="leftLanguageSend" style={{backgroundColor:leftAccentColour, marginRight:'1em'}} className="sendButton" onClick={() => {leftLanguageMessageSend()}}>{leftLanguageMessageSendPrompt}</button>
            <textarea maxLength="5000" id="messageContentInput" className="messageInput" name="messageInputArea" rows="4" onInput={e => setMessage(e.target.value)}></textarea>
            <button id="rightLanguageSend" style={{backgroundColor:rightAccentColour, marginLeft:'1em'}} className="sendButton" onClick={() => {rightLanguageMessageSend()}}>{rightLanguageMessageSendPrompt}</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Conversation