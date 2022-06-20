import { Post } from "../../types/Post"

interface BlogProps {
  data: {
    name: string
    posts: Post[]
  }
}

const Blog = ({ data: { name, posts } }: BlogProps) => {
  return (
    <div>
      <h1>It's a blog home</h1>
      <p>My name is {name}</p>

      <h2>Static infos</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts: Post[] = await response.json()

  return {
    props: {
      data: {
        name: "icaro",
        posts
      },
      // if there is any request after 2h, make a new request
      revalidate: 60 * 60 * 2
    }
  }
}

export default Blog
