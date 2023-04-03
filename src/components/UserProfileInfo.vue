<template>
    <!-- 用一个卡片将“用户信息”括起来 -->
    <div class="card">
        <div class="card-body">
           <div class="row">
                <div class="col-3">
                    <img  class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/129450_lg_33f926f237.jpg">
                </div>
                <div class="vol-9">
                    <div class="username">Scribouillard</div>
                    <div class="fans">粉丝：250</div>
                    <!-- 控制图标大小的属性：btn-sm（小图标），btn-lg（大图标） -->
                    <button type="button" class="btn btn-secondary btn-sm">🔔 关注</button>
                </div>
            </div> 
        </div>
    </div>

</template>

<script>
export default {
    name: 'UserProfileInfo'
}
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
