<template>
    <div class="mt-4 ml-4">
        <NuxtLink to="/farmer/dashboard" class="flex items-center text-blue-500 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back
        </NuxtLink>
    </div>
    <div class="community-page px-4 py-6">

        <UCard class="new-post mb-6 shadow-md">
            <UInput type="textarea" v-model="newPost" placeholder="Share a thought or ask a question..." rows="3"
                class="resize-none" />
            <UButton block class="mt-3" @click="submitPost" :disabled="!newPost.trim()">
                Post
            </UButton>
        </UCard>

        <div v-for="post in posts" :key="post.id" class="post mb-4">
            <UCard class="shadow-md">

                <div class="flex justify-between items-start">
                    <div>
                        <h4 class="font-medium">{{ post.author }}</h4>
                        <p class="text-gray-600 dark:text-gray-300">{{ post.content }}</p>
                    </div>
                    <small class="text-gray-500 dark:text-gray-400">{{ post.timestamp }}</small>
                </div>

                <div class="comments mt-4">
                    <h5 class="font-medium text-sm mb-2">Comments:</h5>
                    <ul>
                        <li v-for="comment in post.comments" :key="comment.id"
                            class="bg-gray-100 dark:bg-gray-700 p-2 mb-2 rounded">
                            <strong>{{ comment.author }}</strong> <br>
                            <span>{{ comment.content }}</span>
                        </li>
                    </ul>


                    <div class="add-comment mt-2">
                        <UInput type="textarea" v-model="newComments[post.id]" placeholder="Write a comment..." rows="2"
                            class="resize-none" />
                        <UButton block class="mt-2" variant="success" @click="addComment(post.id)"
                            :disabled="!newComments[post.id]?.trim()">
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


const posts = ref([
    {
        id: 1,
        author: "John Doe",
        content: "What is the best way to increase crop yield?",
        timestamp: "2 hours ago",
        comments: [
            { id: 1, author: "Jane Smith", content: "I recommend organic farming." },
            { id: 2, author: "Maria Gonzalez", content: "Crop rotation works well for me." },
        ],
    },
    {
        id: 2,
        author: "Jane Smith",
        content: "Does anyone know how to deal with pests naturally?",
        timestamp: "1 hour ago",
        comments: [
            { id: 1, author: "Robert Johnson", content: "Neem oil has been effective for me." },
        ],
    },
]);


const newPost = ref("");

const newComments = ref({});


function submitPost() {
    if (!newPost.value.trim()) return;

    posts.value.unshift({
        id: posts.value.length + 1,
        author: "You",
        content: newPost.value.trim(),
        timestamp: "Just now",
        comments: [],
    });

    newPost.value = "";
}

function addComment(postId) {
    const commentContent = newComments.value[postId]?.trim();

    if (!commentContent) return;

    const post = posts.value.find((p) => p.id === postId);
    if (post) {
        post.comments.push({
            id: post.comments.length + 1,
            author: "You",
            content: commentContent,
        });


        newComments.value[postId] = "";
    }
}
</script>

<style scoped>
.community-page {
    max-width: 800px;
    margin: 0 auto;
}
</style>