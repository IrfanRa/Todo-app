"use client"

import { NewTodo } from "@/lib/drizzle"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"

export const AddToDo = () => {
    const [task, setTask] = useState<NewTodo | null>(null);
    const  { refresh} = useRouter();

    const handleSubmit = async () => {
        try {
            if(task) {
                const res = await fetch("/api/todo", {
                    method:"POST",
                    body: JSON.stringify({
                        task: task.task
                        
                    })
                    
                    
                })
                console.log(res.ok);
                refresh()
                
                
            }
        } catch (error) {
            console.log("error");
            
        }
    }
    


  return (
    <div>
        <form className="w-full flex gap-x-3">
            <input
            onChange={(e) => setTask({task: e.target.value})}
            className="rounded-full w-full py-4 px-2 border focus:outline-orange-500" type="text"/>
            <button type="button" onClick={handleSubmit} className="bg-red-300 p-4 shrink-0 rounded-full shadow-lg ">
                <Image src= {"/submit.png"} width={40} height={40} alt="submit" />
            </button>
        </form>
    </div>
  )
}

export default AddToDo