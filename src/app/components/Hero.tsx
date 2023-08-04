import React from "react";
import TodoList from "@/app/components/TodoList";
import AddToDo from "@/app/components/AddToDo";

const Hero = () => {
    return (
        <div className=" flex  justify-center items-center bg-gradient-to-tr from-primaray h-auto">
             {/* center box*/}
            <div className='px-3 py-4 rounded-xl w-full max-w-md bg-gradient-to-tr bg-red-400'>
            <TodoList/>
            <AddToDo/>

            {/* bar */}
                <div className="w-1/2 h-1.5 bg-black/80 rounded mx-auto mt-4"></div>
            </div>



            {/* side bar */}

        

           

        </div>
    );
};

export default Hero;
