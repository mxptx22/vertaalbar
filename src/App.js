
import './App.css';
import Config from './pages/Config'
import Conversation from './pages/Conversation'
import {deFlag, enFlag, esFlag, frFlag, itFlag, nlFlag, ptFlag, ruFlag, svFlag, trFlag} from './components/flags/flagDirectory'
import { useContext } from 'react'
import PageContext from './PageContext'
import Printing from './pages/Printing';


export let availableLanguages = [
  {
    "code": "en",
    "name": "English",
    "flagLocation": enFlag,
    "chooseLeftLanguagePrompt": "Choose the first language",
    "chooseRightLanguagePrompt": "Choose the second language",
    "emoji": "🇬🇧",
    "sendPrompt":"Send",
    "chooseAccentPrompt":"Choose accent colour",
  },
  {
    "code": "nl",
    "name": "Nederlands",
    "flagLocation": nlFlag,
    "chooseLeftLanguagePrompt": "Kies de eerste taal",
    "chooseRightLanguagePrompt": "Kies de tweede taal",
    "emoji": "🇳🇱",
    "sendPrompt":"Verzenden",
    "chooseAccentPrompt":"Kies de accentkleur",
  },
  {
    "code": "fr",
    "name": "Français",
    "flagLocation": frFlag,
    "chooseLeftLanguagePrompt":"Choisissez la première langue",
    "chooseRightLanguagePrompt":"Choisissez la deuxième langue",
    "emoji": "🇫🇷",
    "sendPrompt":"Envoyer",
    "chooseAccentPrompt":"Choisissez la couleur d'accent",
  },
  {
    "code": "de",
    "name": "Deutsch",
    "flagLocation": deFlag,
    "chooseLeftLanguagePrompt":"Wählen Sie die erste Sprache",
    "chooseRightLanguagePrompt":"Wählen Sie die zweite Sprache",
    "emoji": "🇩🇪",
    "sendPrompt":"Senden",
    "chooseAccentPrompt":"Wählen Sie die Akzentfarbe",
  },
  {
    "code": "it",
    "name": "Italiano",
    "flagLocation": itFlag,
    "chooseLeftLanguagePrompt":"Scegli la prima lingua",
    "chooseRightLanguagePrompt":"Scegli la seconda lingua",
    "emoji": "🇮🇹",
    "sendPrompt":"Invia",
    "chooseAccentPrompt":"Scegli il colore dell'accento",
  },
  {
    "code": "pt",
    "name": "Português",
    "flagLocation": ptFlag,
    "chooseLeftLanguagePrompt":"Escolha o primeiro idioma",
    "chooseRightLanguagePrompt":"Escolha o segundo idioma",
    "emoji": "🇵🇹",
    "sendPrompt":"Mandar", 
    "chooseAccentPrompt":"Escolha a cor de destaque",     
  },
  {
    "code": "ru",
    "name": "Русский",
    "flagLocation": ruFlag,
    "chooseLeftLanguagePrompt":"Выберите первый язык",
    "chooseRightLanguagePrompt":"Выберите второй язык",
    "emoji": "🇷🇺",
    "sendPrompt":"Отправить",
    "chooseAccentPrompt":"Выберите цвет акцента",
  },
  {
    "code": "es",
    "name": "Español",
    "flagLocation": esFlag,
    "chooseLeftLanguagePrompt":"Elige el primer idioma",
    "chooseRightLanguagePrompt":"Elige el segundo idioma",
    "emoji": "🇪🇸",
    "sendPrompt":"Envía",
    "chooseAccentPrompt":"Elige el color de acento",
  },
  {
    "code": "sv",
    "name": "Svenska",
    "flagLocation": svFlag,
    "chooseLeftLanguagePrompt":"Välj det första språket",
    "chooseRightLanguagePrompt":"Välj det andra språket",
    "emoji": "🇸🇪",
    "sendPrompt":"Skicka",
    "chooseAccentPrompt":"Välj accentfärg",
  },
  {
    "code": "tr",
    "name": "Türkçe",
    "flagLocation": trFlag,
    "chooseLeftLanguagePrompt":"İlk dili seçin",
    "chooseRightLanguagePrompt":"İkinci dili seçin",
    "emoji": "🇹🇷",
    "sendPrompt":"Gönder",
    "chooseAccentPrompt":"Vurgu rengini seçin",
  },
]

function App() {
  const {screen} = useContext(PageContext)
  return (
    <>
    {screen === 'One' && <Config />}
    {screen === 'Two' && <Config />}
    {screen === 'Three' && <Config />}
    {screen === 'Four' && <Conversation />}
    {screen === 'Five' && <Printing />}
    </> 
  );
}


export default App;
