<template>
    <div class="card">
        <div class="card-body">
            <!-- 所有循环的对象都需要绑定一个唯一的key属性 -->
            <div v-for="post in posts.posts" :key="post.id">
                <div class="card single-post">
                    <div class="card-body">
                        {{ post.content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserProfilePosts", 
    props: {
        posts: {
            type: Object, 
            required: true, 
        }, 
    }, 
}; 
</script>

<style scoped>
.single-post {
    margin-bottom: 10px;
}
</style>