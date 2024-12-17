<template>
    <div class="chatbot-layout bg-gray-100 flex w-full">


        <div class="chatbot-sidebar bg-white shadow-md p-4 flex flex-col w-1/4" >
            <button @click="startNewChat"
                class="flex items-center gap-2 mb-4 p-2 bg-green-500 text-white rounded hover:bg-green-700">
                <UIcon name="i-heroicons-plus-circle-solid" size="20" />
                New Chat
            </button>
            <div class="recent-searches mb-4">
                <h3 class="text-lg font-semibold mb-2">Recent Searches</h3>
                <ul class="space-y-2">
                    <li v-for="(search, index) in recentSearches" :key="index"
                        class="flex items-center gap-2 p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
                        @click="selectRecentSearch(search)">
                        <UIcon name="i-heroicons-clock-solid" size="20" />
                        <span>{{ search }}</span>
                    </li>
                </ul>
            </div>
            <hr class="border-gray-300 my-2" />
        </div>


        <div class="chatbot-interface flex flex-col flex-grow bg-gray-50 rounded-l p-4 w-full">

            <div class="chatbot-header bg-green-500 text-white p-3 rounded-t">
                <h2 class="text-lg font-bold flex items-center gap-2">
                    <UIcon name="i-heroicons-chat-bubble-oval-left-ellipsis-solid" size="24" />
                    Farm Consultation Chatbot
                </h2>
            </div>


            <div class="chatbot-messages overflow-y-auto flex-grow p-4 space-y-3">
                <div v-for="(message, index) in messages" :key="index"
                    :class="{ 'text-right': message.sender === 'user', 'text-left': message.sender === 'bot' }"
                    class="my-2">
                    <div :class="{
                        'bg-blue-500 text-white p-3 rounded-lg inline-block': message.sender === 'user',
                        'bg-gray-300 text-black p-3 rounded-lg inline-block': message.sender === 'bot'
                    }">
                        {{ message.text }}
                    </div>
                </div>
            </div>


            <form @submit.prevent="sendMessage"
                class="relative flex items-center w-full  max-w-xl mx-auto bg-gray-100 rounded-full p-2 shadow-md">

                <button type="button" class="flex items-center justify-center text-blue-500 hover:text-gray-800 ml-2"
                    aria-label="Attach File">
                    <UIcon name="i-heroicons-paper-clip" size="20" />
                </button>


                <div class="flex-grow relative">
                    <input v-model="userInput" type="text" placeholder="Ask Farming Questions..."
                        class="w-full px-8 py-2 bg-transparent border-none focus:outline-none pr-16" />

                    <button type="submit"
                        class="absolute right-2 top-1/2 transform -translate-y-1/2  hover:bg-black text-green-400 rounded-full w-8 h-8 "
                        aria-label="Send Message">
                        <UIcon name="i-heroicons-paper-airplane-solid" size="24" />
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTogglePassword } from '../composables/toggle';


const { isPassVisible, togglePassword } = useTogglePassword();

const messages = ref([
    { sender: 'bot', text: 'Hello! I’m your farm consultation assistant. How can I assist you today?' }
])
const userInput = ref('')


const recentSearches = ref(['Millet care', 'Fertilizer for crops', 'Pest control tips'])


const sendMessage = () => {
    if (userInput.value.trim() === '') return

    messages.value.push({ sender: 'user', text: userInput.value })
    const response = getBotResponse(userInput.value)
    messages.value.push({ sender: 'bot', text: response })
    userInput.value = ''
}


const startNewChat = () => {
    messages.value = [
        { sender: 'bot', text: 'Hello! I’m your farm consultation assistant. How can I assist you today?' }
    ]
    userInput.value = ''
}


const selectRecentSearch = (search) => {
    userInput.value = search
}


const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase()


    if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
        return 'Hi there! What can I help you with today?'
    }
    else  if(lowerInput.includes('millet care') || lowerInput.includes('millet')){
        return 'to ensure that your millet grows to maximum expectation you need to ensure weather clarity pest contol fertilizer optimization and keep dates'
    }

    return "I’m not sure about that. Could you try asking something else or provide more details?"
}
</script>

<style scoped>
.chatbot-layout {
    height: 90vh;
    font-family: 'Arial', sans-serif;
}

.chatbot-sidebar {
    border-right: 1px solid #ddd;
}

.chatbot-interface {
    display: flex;
    flex-direction: column;
}
</style>