<template>
    <div id="makeKey">
        <el-button @click="make">生成</el-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    userName: "",
                    password: ""
                }
            };
        },
        methods: {
            make() {
                var message = this.$message
                this.$axios.post('/key/genKeyZip', this.qs.stringify(this.form))
                    .then(function (res) {
                        if (res.data.code == 1000) {
                            message(res.data.msg)
                        } else {
                            message(res.data.msg)
                        }
                    })
            }
        }
    }
</script>