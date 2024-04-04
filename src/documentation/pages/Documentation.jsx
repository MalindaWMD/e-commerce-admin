import Markdown from "react-markdown";
import Layout from "../../components/layout/Layout";
import doc from "../documentation.md";
import { useEffect, useState } from "react";


export default function Documentation() {

    const [content, setContent] = useState();

    useEffect(() => {
      fetch(doc)
        .then(res => res.text())
        .then(text => setContent(text));
    }, []);

  return <Layout>
    <div className="bg-white rounded-md shadow-md py-6 px-8  w-full">
        <h2 className="font-bold text-lg mb-4">Streams documentation</h2>

        <Markdown className="prose max-w-full text-justify">
          { content }
          </Markdown>
    </div>
  </Layout>;
}
