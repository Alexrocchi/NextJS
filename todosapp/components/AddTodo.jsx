"use client"
import { useRouter } from "next/navigation";

function AddTodo() {

    const router = useRouter();
    
    async function handleAdd() {        
        const response = await fetch('http://localhost:3000/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ todoName: "New Todo" })
        })        
            if(response.ok) {
                
                console.log("Todo added");
                // Refresh the page to show the updated list of todos
                router.refresh();

            } else {
                console.error('Failed to add the todo', response.status);
            }
    }

    return (
        <button 
            className="bg-green-300 hover:bg-green-400 text-white font-bold py-2 px-4 rounded cursor-pointer" 
            onClick={handleAdd}>
                Add Todo
        </button>
    )
}

export default AddTodo
