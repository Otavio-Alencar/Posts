import { PostActions, PostReducer } from "@/reducers/postReducer";
import { Post } from "@/types/postType";
import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";

type postContextType = {
    posts: Post[]
    dispatch: Dispatch<PostActions>
}
export const postContext = createContext<postContextType| null>(null)

export const PostProvider = ({children}:{children: ReactNode})=>{
    const [posts,dispatch]= useReducer(PostReducer,[])
    return(
        <postContext.Provider value={{posts,dispatch}}>
            {children}
        </postContext.Provider>
    )
}

export const UsePostContext = ()=> useContext(postContext)