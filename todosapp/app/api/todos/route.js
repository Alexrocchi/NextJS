import { NextResponse } from "next/server";

let todos = [
    { id: 1, name: 'First Todo' },
    { id: 2, name: 'Second Todo' },
    { id: 3, name: 'Third Todo' },
];

// GET /api/todos
export async function GET() {
    return NextResponse.json(todos);
}

// DELETE /api/todos?id=one
export async function DELETE(request) {
    const data = await request.json();
    todos = todos.filter((todo) => todo.id !== data.id);
    
    return NextResponse.json({ todos });
}

// POST /api/todos
export async function POST(request) {
    const data = await request.json();
    const newTodo = { id: todos.length + 1, name: data.todoName };
    todos.push(newTodo);

    return NextResponse.json({ todos });
}