"use client"

import { PostAdd } from "@/components/PostAdd"
import { PostList } from "@/components/PostList"
import { PostProvider } from "@/contexts/PostContext"

const Page = ()=>{
  return(
    <div>
      <PostProvider>
        <h1>olá</h1>
        <PostAdd/>
        <PostList/>
      </PostProvider>
    </div>
  )
}

export default Page