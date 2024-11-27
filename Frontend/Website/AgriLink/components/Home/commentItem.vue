<template>
    <div class="comment-item bg-gray-100 dark:bg-gray-700 p-2 mb-2 rounded">
      <!-- Comment Content -->
      <p>
        <strong>{{ comment.author }}:</strong> {{ comment.content }}
      </p>
  
      <!-- Add Reply -->
      <div v-if="showReplyInput" class="mt-2">
        <UInput
          type="textarea"
          v-model="replyContent"
          placeholder="Write a reply..."
          rows="2"
          class="resize-none"
        />
        <UButton
          block
          class="mt-2"
          variant="success"
          @click="submitReply"
          :disabled="!replyContent.trim()"
        >
          Reply
        </UButton>
      </div>
      <button
        @click="toggleReplyInput"
        class="mt-2 text-blue-500 text-sm hover:underline"
      >
        Reply
      </button>
  
      <!-- Replies -->
      <div v-if="comment.replies.length" class="replies pl-4 mt-2 border-l border-gray-300">
        <div v-for="reply in comment.replies" :key="reply.id">
          <commentItem :comment="reply" :postId="postId" @add-reply="forwardReply" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Props
  defineProps({
    comment: Object,
    postId: Number,
  });
  
  // Emits
  const emit = defineEmits(["add-reply"]);
  
  // Local state
  const showReplyInput = ref(false);
  const replyContent = ref("");
  
  // Methods
  function toggleReplyInput() {
    showReplyInput.value = !showReplyInput.value;
  }
  
  function submitReply() {
    const reply = {
      id: Date.now(), // Temporary unique ID
      author: "You", // Replace with the logged-in farmer's name
      content: replyContent.value.trim(),
      replies: [],
    };
    emit("add-reply", { postId, commentId: comment.id, reply });
    replyContent.value = "";
    showReplyInput.value = false;
  }
  
  function forwardReply(data) {
    emit("add-reply", data);
  }
  </script>
  