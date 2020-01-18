<template>
    <div id="makeKey">
        <el-button @click="download">下载</el-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            download() {
                var message = this.$message
                this.$axios.post("key/download",null).then((res) => {
                    if(res.data.code == 1000){
                        window.open(res.data.data)
                    }else {
                        message(res.data.msg)
                    }
                })
            }
        }
    }
</script>