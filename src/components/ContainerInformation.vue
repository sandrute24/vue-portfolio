<template>
		<div class="container-small-gray">
			<div class="ordered-list">
			<ol>
				<slot></slot>
			</ol>
			</div>
		</div>
</template>

<script>
export default {
    name: "ContainerInformation"
}
</script>

<style>
.container-small-gray {
	width: 1077px;
    height: 250px;
	margin: 0 auto;
	vertical-align: middle;
	position: relative;
	background-color: #EEEFF3;
	margin-top: 50px;
}

.ordered-list {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

</style>