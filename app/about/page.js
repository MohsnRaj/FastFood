import Link from "next/link";

const page = () => {
  return (
    <div>
      Hello this my Router
      <div className="">
        <Link style={{ color: "red",borderBottom: "red"}} href={"/about/Blog"}>Blogs</Link>
      </div>
    </div>
  );
};

export default page;
