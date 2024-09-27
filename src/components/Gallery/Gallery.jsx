import * as contentful from "contentful";
import { useState, useEffect } from "react";
import MarkDown from "markdown-to-jsx";
// import s from "./Style.module.scss";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { allBlogs } from "../../queries/AllBlogs";

export const Gallery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: async () => request(import.meta.env.VITE_PUBLIC_API, allBlogs),
  });
  console.log(data);
  return <></>;
};
