import React, { useContext, useEffect } from 'react'
import PageContext from '../PageContext'


function Printing() {
  const {conversation, setConversation} = useContext(PageContext)
  const {leftLanguage, rightLanguage} = useContext(PageContext)
  const {setScreen} = useContext(PageContext)

  useEffect(() => {
    window.print();
  
  }, [])
  

  return (
    <>
    <div>---</div>
    <table style={{width:'100%', color:'black', border:'1px solid black', textAlign:'center', fontSize:'1.2em'}}>
    <tr>  
      <th>{leftLanguage}</th>
      <th>-DIR-</th>
      <th>{rightLanguage}</th>
    </tr>
    {conversation.map((ele,id) => {
      return(
      <tr>
        <td style={{borderRadius:'20px', border:(ele.sender !== 'right' ? '1px solid black' : 'none') }}>{ele.sender !== 'left' ? ele.translation : ele.original}</td>
        <td>{ele.sender !== 'left' ? '◀' : '▶'}</td>
        <td style={{borderRadius:'20px', border:(ele.sender !== 'left' ? '1px solid black' : 'none') }}>{ele.sender !== 'right' ? ele.translation : ele.original}</td>
      </tr>
      )
      })}
    </table>
    <div></div>
  </>
  )
}

export default Printing