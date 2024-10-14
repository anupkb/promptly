"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "@components/Profile";

interface Post {
  _id: string;
  prompt: string;
  tag: string;
  creator: { image: string; username: string; email: string };
}

interface UserProfileProps {
  params: { id: string };
}

const UserProfile: React.FC<UserProfileProps> = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name") || "User";

  const [userPosts, setUserPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (params?.id) fetchPosts();
  }, [params.id]);

  const fetchPosts = async (): Promise<void> => {
    try {
      const response = await fetch(`/api/users/${params.id}/posts`);
      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.statusText}`);
      }
      const data: Post[] = await response.json();
      setUserPosts(data);
    } catch (error) {
      console.error("Error fetching user posts:", error);
    }
  };

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination.`}
      data={userPosts}
    />
  );
};

export default UserProfile;
