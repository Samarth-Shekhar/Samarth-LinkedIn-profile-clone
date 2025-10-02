import { useState } from "react";
import { BadgeCheck, Globe, ThumbsUp, MessageCircle, Repeat2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

type TabType = "posts" | "comments" | "images";

export const ActivitySection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("posts");
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>({});

  const posts = [
    {
      id: 1,
      time: "3d",
      text: "Just wrapped up 20+ hours with Amazon Web Services (AWS) Academy Cloud Foundations – and what a journey it's been!",
      hasImage: true,
      imageAlt: "AWS Certificate",
      likes: 17,
      comments: 1
    },
    {
      id: 2,
      time: "3w",
      text: "✨ Hello Connection!!! ✨",
      hasImage: true,
      imageAlt: "Cisco Certificate",
      likes: 25,
      comments: 2
    }
  ];

  const handleLike = (postId: number, currentLikes: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
      setLikeCounts({ ...likeCounts, [postId]: (likeCounts[postId] || currentLikes) - 1 });
    } else {
      setLikedPosts([...likedPosts, postId]);
      setLikeCounts({ ...likeCounts, [postId]: (likeCounts[postId] || currentLikes) + 1 });
    }
  };

  const handleComment = () => {
    alert("Comment feature coming soon!");
  };

  const handleRepost = () => {
    alert("Repost feature coming soon!");
  };

  const handleSend = () => {
    alert("Send feature coming soon!");
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-1">Activity</h2>
        <a href="#" className="text-sm text-primary hover:underline font-semibold">
          1,536 followers
        </a>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-4 border-b border-border">
        <button
          onClick={() => setActiveTab("posts")}
          className={`pb-3 px-1 text-sm font-semibold transition-colors relative ${
            activeTab === "posts" 
              ? "text-[#057642]" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Posts
          {activeTab === "posts" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#057642]" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("comments")}
          className={`pb-3 px-1 text-sm font-semibold transition-colors ${
            activeTab === "comments" 
              ? "text-[#057642]" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Comments
        </button>
        <button
          onClick={() => setActiveTab("images")}
          className={`pb-3 px-1 text-sm font-semibold transition-colors ${
            activeTab === "images" 
              ? "text-[#057642]" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Images
        </button>
      </div>

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border-b border-border pb-4 last:border-0">
            {/* Post Header */}
            <div className="flex items-start gap-3 mb-3">
              <img 
                src={profilePhoto} 
                alt="SAMARTH SHEKHAR" 
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-sm">SAMARTH SHEKHAR</span>
                  <BadgeCheck className="w-4 h-4 text-primary" fill="currentColor" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Final Year B.Tech IT Student | Ex-Intern at Celebal Technologies...
                </p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                  <span>{post.time}</span>
                  <span>•</span>
                  <Globe className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Post Content */}
            <p className="text-sm mb-2">
              {post.text}
              {post.text.length > 100 && (
                <button className="text-muted-foreground hover:text-primary ml-1">
                  ... more
                </button>
              )}
            </p>

            {/* Post Image */}
            {post.hasImage && (
              <div className="bg-muted rounded h-64 mb-3 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">{post.imageAlt}</span>
              </div>
            )}

            {/* Engagement Stats */}
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-2 px-1">
              <div className="flex items-center gap-1">
                <div className="flex -space-x-1">
                  <div className="w-4 h-4 rounded-full bg-[#0a66c2] flex items-center justify-center">
                    <ThumbsUp className="w-2.5 h-2.5 text-white" fill="white" />
                  </div>
                </div>
                <span>{likeCounts[post.id] || post.likes}</span>
              </div>
              <div>
                {post.comments} {post.comments === 1 ? "comment" : "comments"}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-around pt-2 border-t border-border">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`hover:bg-muted flex-1 ${likedPosts.includes(post.id) ? 'text-primary' : 'text-muted-foreground'}`}
                onClick={() => handleLike(post.id, post.likes)}
              >
                <ThumbsUp className="w-5 h-5 mr-2" fill={likedPosts.includes(post.id) ? 'currentColor' : 'none'} />
                Like
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:bg-muted flex-1"
                onClick={handleComment}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Comment
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:bg-muted flex-1"
                onClick={handleRepost}
              >
                <Repeat2 className="w-5 h-5 mr-2" />
                Repost
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:bg-muted flex-1"
                onClick={handleSend}
              >
                <Send className="w-5 h-5 mr-2" />
                Send
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
