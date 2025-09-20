    <template>
        <div v-if="!chatExists" class="error">
            <h1>404</h1>
            <p>Please choose a chat!</p>
        </div>

        <div v-else class="singleChat">
            <div class="chatHeader">
                <div class="profile">
                    <img :src="singleChat.person.profilePic" :alt="`Profile picture of ${singleChat.person.name}`">
                    <div class="person">
                        <h3>{{ singleChat.person.name }}</h3>
                        <b>{{ singleChat.person.position }}</b>
                    </div>
                </div>
                <div class="icons">
                    <div class="icon"><img src="../assets/images/search.png" alt="icon"></div>
                    <div class="icon"><img src="../assets/images/unselected.png" alt="icon"></div>
                    <div class="icon"><img src="../assets/images/more.png" alt="icon"></div>
                </div>
            </div>
            <hr>
            <div class="messageSection">
                <div v-for="(message, index) in singleChat.messages" :key="index" class="message">
                    <img :src="message.sender == 'opposite' ? singleChat.person.profilePic : user.profilePic"
                        alt="Profile image of the sender">
                    <div class="person">
                        <div class="name">
                            <h3>{{ message.sender == 'opposite' ? singleChat.person.name : user.name }}</h3>
                            <b>{{ message.time }}</b>
                        </div>
                        <p>{{ message.text }}</p>
                    </div>
                </div>
            </div>
            <div class="newMessage">
                <input type="text" placeholder="Type your text here..."/>
                <button><img src="../assets/images/white.png" alt="send icon"></button>
            </div>
        </div>
    </template>


<script>
import messages from "../data/messages.json"

export default {
    props: {
        chatId: String
    },

    data() {
        const idx = messages.findIndex(e => e.id == this.chatId)
        return {
            chatExists: idx === -1 ? false : true,
            singleChat: idx === -1 ? null : messages[idx],
            user: JSON.parse(localStorage.getItem("user")).data.user
        }
    },

    watch: {
        chatId(newVal) {
            const idx = messages.findIndex(e => e.id == newVal)
            this.chatExists = idx === -1 ? false : true
            this.singleChat = idx === -1 ? null : messages[idx]
        }
    }
}
</script>

<style scoped>
.error {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.singleChat {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.chatHeader {
    display: flex;
    align-items: center;
    padding: 25px;
    justify-content: space-between;
}

.profile {
    display: flex;
    gap: 20px;
    align-items: center;
}

.profile img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
}

.person {
    flex-direction: column;
}

.person b {
    font-weight: 400;
}

.messageSection {
    display: flex;
    flex-direction: column;
    overflow: auto;
    width: 100%;
    height: 70vh;
    gap: 10px;
    padding: 10px;
}

.message {
    display: flex;
    gap: 10px;
}

.message img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
}

.message .name{
    gap: 5px;
    align-items: center;
}

.message .name b{
    font-size: .8em;
}

.newMessage{
    width: 100%;
    border: 2px solid;
    border-radius: 10px;
    padding: 5px 20px;
}

.newMessage input{
    width: 90%;
    border: none;
    outline: none;
}
</style>
