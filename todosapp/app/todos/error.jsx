"use client";

function error({error, reset}) {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Try again</button>
        </div>
    )
}

export default error
