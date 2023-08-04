"use client"
import { Todo } from "@/lib/drizzle"

const getData = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/todo", {

            method: "GET",
            cache: "no-store",
            headers: {
                'Content-Type': "application/json"
            }
        })
        if (!res.ok) {
            throw new Error("Failed to fetch the data")
        };
        const result = await res.json()
        return result

    } catch (err) {
        console.log(err);

    }
}

const TodoList = async () => {
    const res: { data: Todo[] } = await getData();

    return (
        
        <div>
            {res.data.map((itme) => {
                    return (
                        <div className="bg-gray-300 py-4 px-4 flex items-center gap-x-3 shadow rounded-lg my-5">
                            <div className="h-3 w-2 bg-orange-600 rounded-full"></div>
                            <p className='text-lg'>  {itme.task}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoList