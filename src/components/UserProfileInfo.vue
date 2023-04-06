<template>
    <!-- 用一个卡片将“用户信息”括起来 -->
    <div class="card">
        <div class="card-body">
           <div class="row">
                <div class="col-3">
                    <img  class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/129450_lg_33f926f237.jpg">
                </div>
                <div class="vol-9">
                    <div class="username">{{fullName}}</div>
                    <div class="fans">粉丝：{{user.followerCount}}</div>
                    <!-- 控制图标大小的属性：btn-sm（小图标），btn-lg（大图标） -->
                    <button @click="follow" v-if="!user.is_followed" type="button" class="btn btn-secondary btn-sm">🔔 关注</button>
                    <button @click="unfollow" v-if="user.is_followed" type="button" class="btn btn-secondary btn-sm">取消关注</button>
                </div>
            </div> 
        </div>
    </div>

</template>

<script>
import { computed } from 'vue';

export default {
    name: 'UserProfileInfo', 
    // 在子组件里接收父组件传递的参数
    props: {
        user: {
            type: Object, 
            required: true, 
        }, 
    }, 
    // 动态的去计算某个属性：setup()函数需要传入参数props，因为setup()里面是没有this这个属性的。
    setup(props, context) {
        // 因为值是需要被动态计算的，所以需要传入一个函数
        let fullName = computed(() => props.user.firstName + ' ' + props.user.lastName);

        // “关注”事件的函数
        const follow = () => {
            context.emit("follow");
        };
        // “取消关注”事件的函数
        const unfollow = () => {
            context.emit("unfollow");
        };

        return {
            fullName, 
            follow, 
            unfollow, 
        }; 
    }, 
}; 
</script>

<style scoped>
/* 将图片样式设置为圆形 */
img{
    border-radius: 50%;
}

.username {
    font-weight: bold;
}

.fans {
    font-size: 12px;    
    color: gra;
}

button {
    padding: 2px 4px;
    font-size: 12px;
}
</style>
