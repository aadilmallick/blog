import React, { useEffect, useMemo, useState } from "react";
import { formatDate } from "../utils/utils";

function debounce(fn, delay = 1000) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, delay);
  };
}

export const BlogPosts = ({ posts }) => {
  const [tag, setTag] = useState("all");
  const [categoryPosts, setCategoryPosts] = useState(posts);
  const [search, setSearch] = useState("");
  function styleCurrentTag(category) {
    return tag === category
      ? "font-bold text-fuchsia-600"
      : "text-gray-400 cursor-pointer hover:text-fuchsia-400";
  }

  const changeTag = (tag) => {
    setTag(tag);
    if (tag === "all") {
      setCategoryPosts(posts);
    } else {
      setCategoryPosts(posts.filter((post) => post.tags.includes(tag)));
    }
  };

  const categories = useMemo(() => {
    // * look at all our posts, extract the unique tags
    let categories = ["all"];
    posts.forEach((post) => {
      categories.push(...post.tags);
    });
    categories = [...new Set(categories)];
    return categories;
  }, []);

  function searchPosts(searchQuery) {
    if (searchQuery === "") {
      setCategoryPosts(posts);
    } else {
      setCategoryPosts(
        posts.filter((post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }

  return (
    <>
      <div className="max-w-xl">
        {tag === "all" && (
          <input
            type="text"
            name="postTitle"
            id=""
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              searchPosts(e.target.value);
            }}
            placeholder="search article name"
            className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-fuchsia-600"
          />
        )}
      </div>
      <div className="flex flex-wrap gap-4 text-lg mt-8">
        {categories.map((category) => (
          <h4
            className={`${styleCurrentTag(category)}`}
            onClick={() => changeTag(category)}
            key={category}
          >
            {String(category).toUpperCase()}
          </h4>
        ))}
      </div>
      <div className="border-b-2 border-b-gray-500 mt-1 mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {categoryPosts.map((post) => (
          <BlogPost {...post} key={post.slug} />
        ))}
      </div>
    </>
  );
};

function BlogPost(props) {
  return (
    <div className="bg-slate-50 p-4 shadow-lg flex flex-col items-start">
      <div className="relative rounded overflow-hidden h-56 w-full">
        <img
          src={props.image.url}
          alt={props.image.alt}
          className="h-full w-full object-cover"
        />
        <p className="m-0 absolute p-1 bg-slate-200 rounded-tr-md bottom-0 left-[-2px] shadow-lg">
          {formatDate(props.date)}
        </p>
      </div>
      <div className="flex bg-slate-200 self-stretch p-2 my-4 rounded-lg justify-between items-center flex-wrap px-4">
        <div className="flex space-x-2 items-center flex-wrap">
          {props.tags.map((tag) => (
            <span
              className="tracking-tight font-semibold uppercase text-xs text-fuchsia-600"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-gray-500 font-light">{props.author}</h3>
      </div>
      <h2 className="font-bold text-xl capitalize hover:text-fuchsia-600 transition-colors line-clamp-2">
        <a href={`/posts/${props.slug}`}>{props.title}</a>
      </h2>
      <p className="leading-relaxed text-gray-400 line-clamp-4 mt-2 flex-1">
        {props.excerpt}
      </p>
      <a
        className="inline-block px-8 py-2 mt-4 bg-fuchsia-600 text-white font-bold text-lg rounded-md cursor-pointer hover:opacity-80 transition-opacity"
        href={`/posts/${props.slug}`}
      >
        Read More
      </a>
    </div>
  );
}
