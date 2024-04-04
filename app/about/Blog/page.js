import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Link style={{ color: "red",borderBottom: "red"}} href={"/about/Blog/Post-1"}>Post-1</Link>
      <Link style={{ color: "red",borderBottom: "red"}} href={"/about/Blog/Post-2"}>Post-2</Link>
      <Link style={{ color: "red",borderBottom: "red"}} href={"/about/Blog/Post-3"}>Post-3</Link>
    </div>
  )
}

export default page
