import { Post } from "@/types/postType"

type addPost = {
    type:'add'
    payload:{
        title: string,
        body:string
    }
}

type removePost = {
    type: 'remove',
    payload:{id:number}
}

export type PostActions = addPost| removePost

export const PostReducer = (posts:Post[],actions:PostActions)=>{
    switch(actions.type){
        case 'add':
            return [...posts,{
                id:posts.length,
                title: actions.payload.title,
                body: actions.payload.body
            }]
        case 'remove':
            return posts.filter(item=> item.id !== actions.payload.id)

        default:
            return posts
    }
}