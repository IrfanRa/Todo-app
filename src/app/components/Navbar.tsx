import todo from "../public/image2.png"
import Image from "next/image"

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-center items-center h-16 bg-secondary ">
            {/* <Image src={todo} alt="todo"/> */}
            <h1 className="font-mono text-xl font-bold ">YourTodo</h1>

        </div>
    </div>
  )
}

export default Navbar