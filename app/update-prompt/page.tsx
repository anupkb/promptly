"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

interface Post {
  prompt: string;
  tag: string;
}

const EditPrompt: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [post, setPost] = useState<Post>({ prompt: "", tag: "" });
  const [submitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (promptId) getPromptDetails();
  }, [promptId]);

  const getPromptDetails = async () => {
    const response = await fetch(`/api/prompt/${promptId}`);

    const data = await response.json();
    await console.log("Data", data);

    setPost({
      prompt: data.prompt,
      tag: data.tag,
    });
  };

  const updatePrompt = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) alert("Prompt ID not found!");

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default EditPrompt;
