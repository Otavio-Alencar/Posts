"use client"

import { PostAdd } from "@/components/PostAdd"
import { PostList } from "@/components/PostList"
import { PostProvider } from "@/contexts/PostContext"



const Page = ()=>{
  return(
    <div className="bg-black min-h-screen w-full">
      <PostProvider>
       <PostAdd/>
       <PostList/>
      </PostProvider>
    </div>
  )
}

export default Page