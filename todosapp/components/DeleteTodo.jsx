"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

function DeleteTodo( { id } ) {

    // To refresh the page after deleting a Todos
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    async function handleDelete() {        
        setLoading(true);

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

        setLoading(false);
    }

  return (
    <button 
        disabled={loading}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer" 
        onClick={handleDelete}>
            {loading ? "Deleting..." : "Delete"}
    </button>
  )
}

export default DeleteTodo
