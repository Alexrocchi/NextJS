# Next.js Notes

## 🚀 Project Setup

Create a new Next.js app:

```bash
npx create-next-app
```

Run the development server:

```bash
npm run dev
```

### 📚 Documentation
[Official Next.js Docs – Project Structure](https://nextjs.org/docs/app/getting-started/project-structure?utm_source=chatgpt.com)


## Developer Experience

### 🔧 VS Code Snippets
Install the ES7+ React/Redux/React-Native/GraphQL Snippets extension in VS Code:

- Name: ES7 React/Redux/GraphQL/React-Native snippets
- Marketplace: Download [here](https://marketplace.visualstudio.com/items?itemName=rodrigovallades.es7-react-js-snippets&utm_source=chatgpt.com)

Usage:
Type `rfce` in a `.jsx` or `.tsx` file to quickly generate a React functional component boilerplate.

## Routing in Next.js

Next.js uses a file-based routing system inside the app/ directory.

### 1️⃣ Static Routes
Create a new folder inside the app/ directory and add a page.jsx file.

Example:
```bash
    app/
    └─ about/
        └─ page.jsx

```
This automatically generates the `/about` route.

### 2️⃣ Nested Routes
You can nest routes by creating subfolders:

Example:
```bash
    app/
    └─ dashboard/
        ├─ page.jsx       → /dashboard
        └─ settings/
            └─ page.jsx   → /dashboard/settings
```

### 3️⃣ Dynamic Routes
For dynamic pages, use square brackets in the folder name:

```bash
    app/
    └─ blog/
        └─ [slug]/
            └─ page.jsx
```

This generates routes like:
- /blog/my-first-post
- /blog/another-article

### How Next.js Handles Them
When building the app:
- ○ indicates a static page (pre-rendered at build time).
- ƒ indicates a dynamic route (server-rendered on demand).
📖 [Dynamic Routes Documentation](https://nextjs.org/docs/app/getting-started/project-structure?utm_source=chatgpt.com#routing-files)