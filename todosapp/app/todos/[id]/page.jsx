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

    return (
        <div>
        Params ID: {id}
        </div>
    )
}

export default page
