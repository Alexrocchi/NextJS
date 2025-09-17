function notFoundPage() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <p className="text-9xl font-luckiest-guy">404</p>
      <p>Page not found</p>
      <small>This page is an example of a custom 404 page. If you're trying to visit a todos with an id greater than 3, you'll see this message.</small>
    </div>
  )
}

export default notFoundPage
