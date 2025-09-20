<template>
    <div>
        yfguhj
        <!-- {{ id }} -->
    </div>
</template>

<script>
import api from '../../utils/axios'
export default {
    data() {
        return {
            id: this.$route.params,
            res: null
        }
    },
    methods: {
        async load() {
            try {
             this.res = await api.get(`/projects/${this.id.projectId}`);
            } catch (err) {
                console.error(err);

                let msg = "Xatolik yuz berdi";
                if (err.response?.data?.message) {
                    msg = err.response.data.message;
                }

                Toastify({
                    text: msg,
                    duration: 3000,
                    gravity: "top",
                    position: "center",
                    background: "#f44336",
                    close: true,
                }).showToast();
            } finally {
                this.loading = false;
            }

            console.log(this.res);
        }
    },

    mounted() {
        this.load();
    }
}
</script>

<style scoped></style>