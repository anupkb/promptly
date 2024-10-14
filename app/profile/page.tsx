"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

interface Post {
  _id: string;
  prompt: string;
  tag: string;
}

const MyProfile: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data: Post[] = await response.json();
      setMyPosts(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  const handleEdit = (post: Post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post: Post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        console.log("POST ID", post._id);

        await fetch(`/api/prompt/${post._id}`, { method: "DELETE" });
        setMyPosts((prev) => prev.filter((item) => item._id !== post._id));
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
