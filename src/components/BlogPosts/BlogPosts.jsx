import MarkDown from "markdown-to-jsx";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { AllBlogs } from "../../queries/AllBlogs";
import s from "./Style.module.scss";
import { NavLink } from "react-router-dom";

export const BlogPosts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["AllBlogs"],
    queryFn: async () => request(import.meta.env.VITE_PUBLIC_API, AllBlogs),
  });
  // console.log(data);

  function formatDate(date) {
    let formatedDate = new Date(date);
    return formatedDate.toLocaleDateString("dk-DK");
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <section className={s.BlogPosts}>
      {data?.blogPosts?.map((blog) => (
        <>
          <figure key={blog?.id}>
            <span>{formatDate(blog?.createdAt)}</span>
            {blog?.updatedAt && <span>*</span>}
            <h2>{blog?.title}</h2>
            <img src={blog?.thumbnail?.url} alt="" />
            <figcaption>
              <MarkDown>{blog?.body}</MarkDown>
            </figcaption>
            <NavLink to={`/singlePage/${blog.slug}`}>Read more...</NavLink>
          </figure>
        </>
      ))}
    </section>
  );
};
