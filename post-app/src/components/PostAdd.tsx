import { usePostContext } from "@/contexts/PostContext"
import { useState } from "react"

export const PostAdd = ()=>{
    const postCtx = usePostContext()
    const [titleInput,setTitleInput] = useState('')
    const [bodyInput,setBodyInput] = useState('')

    const handleAddButton = ()=>{
        if(titleInput && bodyInput){
            postCtx?.dispatch({
                type: 'add',
                payload:{
                    title: titleInput,
                    body: bodyInput
            }}
        )}
        setTitleInput('')
        setBodyInput('')
        
    }

    return(
        <div>
            <h1>Faça sua postagem</h1>
            <div className="max-w-xl border border-dotted border-gray-400 p-3 flex flex-col gap-3 my-4">
                <input type="text" placeholder="Digite um Titulo" className="border border-gray-300 p-2 text-black text-xl" 
                value={titleInput} 
                onChange={e => setTitleInput(e.target.value)} />

                <textarea placeholder="Digite um corpo" className="border border-gray-300 p-2 text-black text-xl h-24" value={bodyInput} 
                onChange={e => setBodyInput(e.target.value)}></textarea>
                <button onClick={handleAddButton} className="bg-blue-500 p-3 text-white rounded-md">Funcionar</button>
            </div>
        </div>
    )
}