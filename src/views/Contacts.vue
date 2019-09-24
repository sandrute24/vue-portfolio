<template>
<Main>
	<div>
		<div>
		<div class="container-contacts">
		<div>
		<h2>CONTACTS</h2>
		</div>
    <InputField></InputField>
		</div>
		</div>
	</div>
</Main>
</template>

<script>
import Main from '@/components/Main'
import InputField from '@/components/InputField'


export default {
  name: 'Contacts',
  components: {
    Main,
    InputField,
  }
}
</script>

<style>
.container-contacts {
    width: 1077px;
    height: 175px;
	position: relative;
	margin: 0 auto;
	padding-top: 50px;
}

</style>
