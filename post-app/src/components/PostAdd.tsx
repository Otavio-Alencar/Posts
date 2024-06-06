import { UsePostContext } from "@/contexts/PostContext"
import { useState } from "react"

export const PostAdd = ()=>{
    const postCtx = UsePostContext()
    const [logged, setLogged] = useState(false)
    const [user,setUser] = useState('')
    const [text,setText] = useState('')
    const handleLoginButton= ()=>{
        if(user !== ''){
            setLogged(true)
        }
        
    }
    const handleSendButton = ()=>{
        postCtx?.dispatch({
            type: 'add',
            payload:{
                title: user,
                body: text
            }
        })
        setText('')
    }
    return(
        <div>
            {!logged && 
            <div className="container mx-auto border-b border-gray-400/15 flex flex-col items-end">
                <input type="text" className="w-full py-10 text-2xl bg-transparent placeholder:text-gray-500 placeholder:text-2xl outline-none" placeholder="Quem é você?" value={user}
                onChange={e=> setUser(e.target.value)} />
                <button className="bg-blue-500 px-3 py-2 rounded-lg w-24" onClick={handleLoginButton}>Login</button>
                </div>}
            {logged && 
            <div className="container mx-auto border-b border-gray-400/15 flex flex-col items-end">
                <input type="text" placeholder="O que está acontecendo?" className="w-full py-10 text-2xl bg-transparent placeholder:text-gray-500 placeholder:text-2xl outline-none" value={text}
                onChange={e=> setText(e.target.value)} />
                <button onClick={handleSendButton} className="bg-blue-500 px-3 py-2 rounded-lg w-24 mb-2">Postar</button>
                </div>}
        </div>
    )
}