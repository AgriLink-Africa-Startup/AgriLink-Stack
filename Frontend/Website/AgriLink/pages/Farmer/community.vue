<template>
    <div class="community-page px-4 py-6">
      <!-- Back Icon -->
      <div class="mb-4 flex items-center">
        <NuxtLink to="/" class="flex items-center text-blue-500 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </NuxtLink>
      </div>
  
      <!-- New Post Section -->
      <UCard class="new-post mb-6 shadow-md">
        <UInput
          type="textarea"
          v-model="newPost"
          placeholder="Share a thought or ask a question..."
          rows="3"
          class="resize-none"
        />
        <UButton
          block
          class="mt-3"
          variant="primary"
          @click="submitPost"
          :disabled="!newPost.trim()"
        >
          Post
        </UButton>
      </UCard>
  
      <!-- Posts Section -->
      <div v-for="post in posts" :key="post.id" class="post mb-4">
        <UCard class="shadow-md">
          <!-- Post Content -->
          <div class="flex justify-between items-start">
            <div>
              <h4 class="font-medium">{{ post.author }}</h4>
              <p class="text-gray-600 dark:text-gray-300">{{ post.content }}</p>
            </div>
            <small class="text-gray-500 dark:text-gray-400">{{ post.timestamp }}</small>
          </div>
  
          <!-- Comments Section -->
          <div class="comments mt-4">
            <h5 class="font-medium text-sm mb-2">Comments:</h5>
            <div v-for="comment in post.comments" :key="comment.id">
              <CommentItem
                :comment="comment"
                :postId="post.id"
                @add-reply="addReply"
              />
            </div>
  
            <!-- Add Comment -->
            <div class="add-comment mt-2">
              <UInput
                type="textarea"
                v-model="newComments[post.id]"
                placeholder="Write a comment..."
                rows="2"
                class="resize-none"
              />
              <UButton
                block
                class="mt-2"
                variant="success"
                @click="addComment(post.id)"
                :disabled="!newComments[post.id]?.trim()"
              >
                Comment
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
import CommentItem from "~/components/Home/commentItem.vue";
 
  // Posts data
  const posts = ref([
    {
      id: 1,
      author: "John Doe",
      content: "What is the best way to increase crop yield?",
      timestamp: "2 hours ago",
      comments: [
        {
          id: 1,
          author: "Jane Smith",
          content: "I recommend organic farming.",
          replies: [],
        },
      ],
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "Does anyone know how to deal with pests naturally?",
      timestamp: "1 hour ago",
      comments: [],
    },
  ]);
  
  // Input for new posts
  const newPost = ref("");
  
  // Input for new comments (mapped to post IDs)
  const newComments = ref({});
  
  // Add a new post
  function submitPost() {
    if (!newPost.value.trim()) return;
    posts.value.unshift({
      id: Date.now(),
      author: "You", // Replace with logged-in farmer's name
      content: newPost.value.trim(),
      timestamp: "Just now",
      comments: [],
    });
    newPost.value = "";
  }
  
  // Add a comment to a post
  function addComment(postId) {
    const commentContent = newComments.value[postId]?.trim();
    if (!commentContent) return;
  
    const post = posts.value.find((p) => p.id === postId);
    if (post) {
      post.comments.push({
        id: Date.now(),
        author: "You", // Replace with logged-in farmer's name
        content: commentContent,
        replies: [],
      });
    }
    newComments.value[postId] = "";
  }
  
  // Add a reply to a specific comment
  function addReply({ postId, commentId, reply }) {
    const post = posts.value.find((p) => p.id === postId);
    if (!post) return;
  
    const findComment = (comments) =>
      comments.find((c) => c.id === commentId) ||
      comments.reduce((result, c) => result || findComment(c.replies), null);
  
    const comment = findComment(post.comments);
    if (comment) {
      comment.replies.push(reply);
    }
  }
  </script>
  

<style scoped>
.community-page {
    max-width: 800px;
    margin: 0 auto;
}
</style>