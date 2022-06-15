import { createContext } from "react";
import { useState } from "react";

const PageContext = createContext()

export function PageProvider({children}){
    const [screen, setScreen] = useState('One')
    const [leftLanguage, setLeftLanguage] = useState('')
    const [rightLanguage, setRightLanguage] = useState('')
    const [rightAccentColour, setRightAccentColour] = useState(null)
    const [leftAccentColour, setLeftAccentColour] = useState(null)
    const [conversation, setConversation] = useState([])
    return(
        <PageContext.Provider value={{screen, setScreen, leftLanguage, setLeftLanguage, rightLanguage, setRightLanguage, rightAccentColour , setRightAccentColour, leftAccentColour , setLeftAccentColour, conversation, setConversation}}>
            {children}
        </PageContext.Provider>
    )
}

export default PageContext