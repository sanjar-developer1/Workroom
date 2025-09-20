<template>
    <Sidebar />
    <div class="messengerWrapper">
        <h1>Messenger</h1>
        <div class="wrapper">
            <div class="chats">
                <router-link class="chat" :to="`/messenger/${chat.id}`" v-for="(chat, index) in chats" :key="index">
                    <img :src="chat.person.profilePic" :alt="`Profile picture of ${chat.person.name}`" />
                    <div class="person">
                        <p>{{ chat.person.name }}</p>
                        <b>{{ chat.messages[chat.messages.length - 1].text.slice(0, 10) }}...</b>

                    </div>
                </router-link>
            </div>
            <hr>
            <SingleChat :chatId="chatId ?? '-1'" />
        </div>
    </div>
</template>

<script>
import messages from "../../data/messages.json"
import SingleChat from "../../components/SingleChat.vue"
import Sidebar from "../../components/Sidebar.vue"

export default {
    data() {
        return {
            chats: messages,
            chatId: this.$route.params.chatId,
        }
    },
    watch: {
        '$route.params.chatId'(newId) {
            this.chatId = newId
        }
    },
    components: {
        SingleChat,
        Sidebar
    }
}
</script>

<style scoped>
.messengerWrapper {
    display: flex;
    flex-direction: column;
    width: 82.1vw;
    min-height: 100vh;
    padding: 20px;
    gap: 20px;
}

.wrapper {
    width: 100%;
    height: 100%;
    border: 2px solid;
    border-radius: 15px;
    padding: 20px;
}

.chats {
    display: flex;
    flex-direction: column;
    overflow: auto;
    gap: 30px;
    width: 20vw;
}

.chat {
    display: flex;
    gap: 10px;
}

.chat img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
}

.person {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.person b {
    font-size: .9em;
    font-weight: 400;
    color: #000;
}

.person p {
    color: #000;
    font-size: 1.2em;
}
</style>
