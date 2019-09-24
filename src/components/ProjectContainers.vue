<template>
        <div class="containers">
            <div class="projects-title">
            <h2>PROJECTS</h2>
            </div>
            <div class="container-small">
                <div class="container-inside"></div>
                <h6>Project 1</h6>
            </div>
            <div class="container-small">
                <div class="container-inside">
                </div>
                <h6>Project 2</h6>
            </div>
            <div class="container-small">
                <div class="container-inside"></div>
                <h6>Project 3</h6>
            </div>
        </div>
</template>

<script>

export default {
    name: 'ProjectContainers',

}
</script>

<style>
.projects-title {
margin-left: 50px;
}

.containers {
    width: 100vw;
	max-width: 100%;
	overflow: hidden;
    margin: 0 auto;
	padding-top: 50px;
}

.container-small {
    background-color: #3252E5;
    width: 290px;
    height: 373px;
    margin-right: 50px;
    margin-top: 30px;
    margin-left: 50px;
    text-align: center;
	display: inline-block;
    color: white;
}

.container-inside {
    background-color: white;
    width: 242px;
    height: 256px;
    display: inline-block;
    margin-top: 30px;
    content:url(https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/ecosystem.jpg);

}

</style>