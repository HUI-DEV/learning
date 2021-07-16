import React, { useRef,useState,useEffect} from 'react'
function Example(){
    const input1=useRef(null)
    const onButtonClick=()=>{
        input1.current.value='Hello,jh'
        console.log(input1)
    }
    const[text,setText] = useState('jh')
    const textRef=useRef()

    useEffect(()=>{
        textRef.current=text
        console.log('textRef.current：',textRef.current)
    })
    return(
      <>
      <input ref={input1} type="text"></input>
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br/>
      <br/>
      <input value={text} onChange={(e)=>{ setText (e.target.value)}}/>
      </>
    )
}
export default Example