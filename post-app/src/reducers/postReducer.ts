import { Post } from "@/types/postType";


type AddPost = {
    type: 'add',
    payload:{
        title:string,
        body:string
    }
}
type RemoveAction = {
    type:'remove',
    payload:{
        id:number
    }
}

export type PostActions =  AddPost | RemoveAction

export const PostReducer = (posts: Post[],action:PostActions)=> {
    switch(action.type){
        case 'add':
            return [...posts,{
                id: posts.length,
                title:action.payload.title,
                body:action.payload.body
            }]
        case 'remove':
            return posts.filter(item=> item.id !== action.payload.id)
        default:
            return posts
    }
}