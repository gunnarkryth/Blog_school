import MarkDown from "markdown-to-jsx";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { AllBlogs } from "../../queries/AllBlogs";
import s from "./Style.module.scss";
import { NavLink } from "react-router-dom";

export const BlogPosts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["AllBlogs"],
    // queryFn: async () => request(import.meta.env.VITE_PUBLIC_API, AllBlogs),
    queryFn: async () =>
      request(
        "https://eu-west-2.cdn.hygraph.com/content/cm1kc5rrt023608w57dvmctkw/master",
        AllBlogs
      ),
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

  console.log(s);

  return (
    <section className={s.BlogPosts}>
      {data?.blogPosts?.map((blog) => (
        <>
          <figure key={blog?.id} className={s[blog?.class]}>
            <div className={s.time}>
              <span className={s.createdAt}>{formatDate(blog?.createdAt)}</span>
              {blog?.updatedAt && <span className={s.updatedAt}>*</span>}
            </div>
            <h2>{blog?.title}</h2>
            <img src={blog?.thumbnail?.url} alt="" />
            <figcaption>
              <div className={s.createdBy}>
                <img src={blog?.createdBy.picture} alt="" />{" "}
                {blog?.createdBy.name}
              </div>
              <MarkDown>{blog?.body.substring(0, 256)}</MarkDown>
            </figcaption>
            {/* <NavLink to={`/blog/${blog.slug}`}>Read more...</NavLink> */}
          </figure>
        </>
      ))}
    </section>
  );
};
