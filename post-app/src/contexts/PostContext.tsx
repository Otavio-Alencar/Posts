import { PostActions, PostReducer } from "@/reducers/postReducer";
import { Post } from "@/types/postType";
import {Dispatch, ReactNode, createContext, useContext, useReducer,} from "react";

type PostContextType =  {
    posts : Post[]
    dispatch: Dispatch<PostActions>
}
export const PostContext = createContext<PostContextType | null>(null)

export const PostProvider = ({children}: {children : ReactNode})=>{
    const [posts, dispatch] = useReducer(PostReducer, [])

    return(
        <PostContext.Provider value={{posts, dispatch}}>
            {children}
        </PostContext.Provider>
    )
}

export const usePostContext = ()=> useContext(PostContext)