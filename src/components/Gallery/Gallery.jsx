import * as contentful from "contentful";
import { useState, useEffect } from "react";
import MarkDown from "markdown-to-jsx";
// import s from "./Style.module.scss";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { AllBlogs } from "../../queries/AllBlogs";

export const Gallery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["AllBlogs"],
    queryFn: async () => request(import.meta.env.VITE_PUBLIC_API, AllBlogs),
  });
  console.log(data);
  return <>
  <p>Hej</p>
  </>;
};
