import * as contentful from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState, useEffect } from "react";
import s from "./Style.module.scss";

export const Gallery = () => {
  const [gallery, setGallery] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const client = contentful.createClient({
    space: import.meta.env.VITE_PUBLIC_SPACE_ID,
    accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
  });

  useEffect(() => {
    client.getEntries({ content_type: "title" }).then((res) => setTitle(res));
  }, []);
  useEffect(() => {
    client.getEntries({ content_type: "body" }).then((res) => setBody(res));
  }, []);
  useEffect(() => {
    client.getEntries({ content_type: "gallery" }).then((res) => setTitle(res));
  }, []);
};
