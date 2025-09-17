import DeleteTodo from "@/components/DeleteTodo";
import Link from "next/link";
import { Suspense } from "react";

async function TodosPage() {
    
    /* const dummyWait = await new Promise((resolve) => setTimeout(resolve, 3000)); */

    const response = await fetch('http://localhost:3000/api/todos', { 
        // If we not use 'no-store', Next.js will cache the response by default and we won't see updates. Whith this attribute we're telling Next.js to always fetch the latest data.
        cache: 'no-store' 
        
        // If we want to chache the data, we can use 'next', Next.js will revalidate the data every seconds we specify
        /* next : { revalidate: 10 } // Revalidate the data every 10 seconds */ 
    });
    const data = await response.json();
    
    // Dummy error for testing purposes
    /* throw new Error("Test error"); */
    
    return (
        <section className="mt-24 w-full h-full flex justify-center">
            <table className="min-w-max bg-white border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                    <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">ID</th>
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Action</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {data.map((todo) => (
                        <tr key={todo.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6">
                                <Link href={`/todos/${todo.id}`} className="font-medium hover:underline">
                                    {todo.id}
                                </Link>
                            </td>
                            <td className="py-3 px-6">
                                {todo.name}
                            </td>
                            <td className="py-3 px-6">
                                {/* We wrap the DeleteTodo component in a Suspense component to handle the loading state */}
                                <Suspense fallback={<p>Loading button...</p>}>
                                    {/* A server-side doen't know when to re render, so we can't use an event handler like onClick. We need to use a form to send a request to the server */}
                                    <DeleteTodo id={todo.id} />
                                </Suspense>
                            </td>                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default TodosPage
