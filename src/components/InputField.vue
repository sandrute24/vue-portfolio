<template>
  <div class="label-input">
    <label>NAME</label>
  <div>
    <input class="input-field-name" v-model="name">
</div>
<div class="label-input">
  <label>MESSAGE</label>
<div>
  <input class="input-field-message" v-model="message">
</div>
  </div>
  <button
    class="button"
 >SEND
  </button>
  </div>
</template>

<script>
export default {
  name: 'InputField'
}
</script>

<style>

.button {
    width: 170px;
    height: 45px;
    background-color: #3252E5;
    margin-top: 20px;
    color: white;
}
.label-input {
    margin-top: 40px;
}
.input-field-name {
    width: 296px;
    height: 48px;
    margin-top: 10px;
}

.input-field-message {
    width: 1077px;
    height: 129px;
    margin-top: 10px;
}


</style>
