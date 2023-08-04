import { NextRequest, NextResponse } from 'next/server';
import { Todo,NewTodo,db,todoTable} from "@/lib/drizzle"
import { sql } from"@vercel/postgres"

export async function GET(request: NextRequest) {
    try{
        await sql `CREATE TABLE IF NOT EXISTS Todos (id serial, task varchar(255));`
        
        const res = await db.select().from(todoTable).execute()
        console.log(res);
        return NextResponse.json({data: res})
    } catch(err){
            console.log((err as {message: string}). message);
            return NextResponse.json({message: "Something went wrong"})
    }
}

    export async function POST(request:NextRequest) {
        const req = await request.json();
        try{
            if (req.task){
                const res = await db.insert(todoTable).values({
                    task: req.task
                }).returning();
                console.log(res);
                
                return NextResponse.json({message: "Data added successfully.", data: res})
                } else{
                    throw new Error("Task field is required")
                }
        } catch (error) { 
            return NextResponse.json({message: (error as {message:string}).message})
        }
    }

  //   export async function DELETE(request: NextRequest) {
  //     const req = await request.json();
  //     try {
  //         if (req.id) {
  //             const res = await db.delete(todoTable).where((todoTable.id, req.id)).returning();
  //             console.log(res);
  
  //             if (res.length === 0) {
  //                 throw new Error(`No record found with id ${req.id}`);
  //             }
  
  //             return NextResponse.json({ message: "Data deleted successfully.", data: res });
  //         } else {
  //             throw new Error("ID field is required");
  //         }
  //     } catch (error) {
  //         return NextResponse.json({ message: (error as { message: string }).message });
  //     }
  // }

  



