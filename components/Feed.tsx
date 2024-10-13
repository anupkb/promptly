"use client";

import { useState, useEffect, ChangeEvent } from "react";
import PromptCard from "./PromptCard";

interface Post {
  _id: string;
  prompt: string;
  tag: string;
  creator: { image: string; username: string; email: string };
}

interface PromptCardListProps {
  data: Post[];
  handleTagClick: (tag: string) => void;
}

const PromptCardList: React.FC<PromptCardListProps> = ({
  data,
  handleTagClick,
}) => (
  <div className="mt-16 prompt_layout">
    {data.map((post) => (
      <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
    ))}
  </div>
);

const Feed: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>([]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/prompt");
      const data: Post[] = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
