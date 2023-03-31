<template>
<div class="home">
    <!-- container也是Bootstrap里定义好的一个class，可以让我们响应式的去调整中间内容区域的大小 -->
    <div class="container">
      <div class="card">
        <div class="card-body">
          <!-- 将其他组件用到的单独组件<ContentBase>里的所有子元素，全部渲染到<slot>里面 -->
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ContentBase"
}
</script>

<!-- <style>加上"scoped"之后，不同组件之间的CSS选择器就不会相互影响到了。让每一个选择器最后再去返回到前端时，它会给其加上一个随机值。 -->
<style scoped>
.container {
    margin-top: 20px;
}
</style>
