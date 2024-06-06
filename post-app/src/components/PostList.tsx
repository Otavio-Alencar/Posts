import { usePostContext } from "@/contexts/PostContext"

export const PostList = ()=>{
    const postCtx = usePostContext()
    const handleRemovePost = (id:number)=>{
        postCtx?.dispatch({
            type: 'remove',
            payload:{id}
        })
    }
    return(
        <div>
            {postCtx?.posts.map(item=>(
                <div key={item.id} className="border">
                    <h1 className="text-2xl font-semibold">{item.title}</h1>
                    <p className="text-lg font-normal">{item.body}</p>
                    <button onClick={()=> handleRemovePost(item.id)}>remover</button>
                </div>
            ))}
        </div>
    )
}