"use client";

import PostModal from "@/app/components/community/PostModal";
import { getPosts } from "@/utils/api";
import React, { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
  author: {
    avatarUrl: string;
    firstName: string;
    lastName: string;
  };
  Image?: string;
  video?: string;
  gif?: string;
  file?: string;
}

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await getPosts();
        setPosts(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <div className="h-[calc(100vh-5rem)]">
        <div className="flex justify-between px-4 pt-6">
          <h1 className="text-3xl">Home</h1>
          <button
            className="bg-[#0E9AA9] rounded px-3 py-2"
            onClick={() => setShowModal(true)}
          >
            Create Post
          </button>
        </div>
        <div className="flex flex-col items-center pt-24 gap-16 relative">
          {loading ? (
            <div>
              <h1>...loading</h1>
            </div>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-white py-8 px-16 shadow-xl w-[45rem] flex flex-col items-center"
              >
                {post.author.avatarUrl && (
                  <div>
                    {" "}
                    <img
                      src={post.author.avatarUrl}
                      alt="avatar"
                      className="w-[2rem] h-[2rem] rounded-full mb-6"
                    />{" "}
                  </div>
                )}
                <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
                {post.content && (
                  <div className="mb-6 text-xl">
                    <p>{post.content}</p>
                  </div>
                )}
                {post.Image && <img src={post.Image} alt="Post Image" />}
                {post.video && <video src={post.video} controls />}
                {post.gif && <img src={post.gif} alt="GIF" />}
                {post.file && <a href={post.file}>Download File</a>}
              </div>
            ))
          )}
        </div>
      </div>
      {showModal && <PostModal setShowModal={setShowModal} />}
    </>
  );
}
