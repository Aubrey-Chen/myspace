<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container ">
    <a class="navbar-brand" href="#">MySpace</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">首页</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">好友列表</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">用户动态</a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">登录</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">注册</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<!-- <style>加上"scoped"之后，不同组件之间的CSS选择器就不会相互影响到了。让每一个选择器最后再去返回到前端时，它会给其加上一个随机值。 -->
<style scoped>
</style>
