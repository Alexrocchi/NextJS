import { notFound } from "next/navigation";

// To generate static pages at build time for the given ids
export async function generateStaticParams() {
    
    /** In a real app, you would fetch this data from an API or database
    *  For example:
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await response.json()
    return todos.map(todo => ({
        id: todo.id.toString(),
    }))
    **/
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ]
}

async function page({ params }) {
    const { id } = await params;

    if(parseInt(id) > 3) {
        // If the id doesn't exist, we can redirect to a custom 404 page
        notFound();
    }

    // Dummy error for testing purposes
    /* throw new Error("Test error"); */

    return (
        <div className="mt-24 w-full h-full flex justify-center items-center flex-col gap-4">
         <p className="font-bold">Youre visiting the dynamic route with id: {id}</p>

            <a href="/todos" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">Go back to Todos App</a>
        </div>
    )
}

export default page
