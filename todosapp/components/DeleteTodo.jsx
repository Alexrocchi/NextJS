"use client"

import { useRouter } from "next/navigation";

function DeleteTodo( { id } ) {

    // To refresh the page after deleting a Todos
    const router = useRouter();

    async function handleDelete() {        
        const response = await fetch('http://localhost:3000/api/todos', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        })

        if(response.ok) {
            // Refresh the page to show the updated list of todos
            router.refresh();
            // Example navigation on client-side: Navigate back to the main todos page
            router.push('/');
        }else{
            console.error('Failed to delete the todo');
        }
    }

  return (
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleDelete}>Delete</button>
  )
}

export default DeleteTodo
