<template>
    <div class="container">
        <el-form ref="form" :model="form" label-width="80px" class="login-page">
            <h2>登录</h2>
            <el-form-item label="用  户:" prop="userName">
                <el-input v-model="form.userName" placeholder="请输入用户名">
                </el-input>
            </el-form-item>
            <el-form-item label="密 码:">
                <el-input v-model="form.password" type="password" placeholder="请输入密码">
                </el-input>
            </el-form-item>
            <el-button @click="toRegister">去注册</el-button>
            <el-button type="primary" @click="login">登 录</el-button>
        </el-form>
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
            login() {
                var router = this.$router
                var message = this.$message
                this.$axios.post('/sys/login', this.qs.stringify(this.form))
                    .then(function (res) {
                        if (res.data.code == 1000) {
                            router.push("home")
                        } else {
                            message(res.data.msg);
                        }
                    })
            },
            toRegister() {
                this.$router.push("register");
            }
        }
    }
</script>
<style scoped>
    .container {
        margin-top: 200px;
        width: 100%;
        height: 100%;
    }

    .login-page {
        border-radius: 5px;
        margin: auto;
        width: 350px;
        padding: 10px 55px 15px 30px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
</style>