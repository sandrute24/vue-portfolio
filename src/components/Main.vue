<template>
<div class="container">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<style>
.container {
    width: 1196px;
    height: 640px;
    background-color: white;
    margin-top: -100px;
    margin-left: 33px;
}
</style>