<template>
<Main>
	<div>
		<div class="container-about-me-inside">
		<div>
		<h2>ABOUT</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id mauris vel mauris consequat pharetra. Donec semper turpis nisi, at tincidunt enim faucibus vitae. Praesent iaculis quis lectus aliquam volutpat. Cras in ultricies nisl, sit amet imperdiet velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque tincidunt porttitor eros in tincidunt. Morbi quam mi, tincidunt in justo in, posuere laoreet ipsum. Vestibulum facilisis metus tempor, volutpat odio a, posuere dolor. Suspendisse potenti. Etiam venenatis tristique erat ut iaculis. Aliquam erat volutpat. Donec consequat erat erat, id finibus dolor interdum sed. Morbi dui mi, ultricies eu erat in, efficitur rutrum nisi. Nam pellentesque commodo magna, sit amet euismod urna commodo sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
		</div>
		</div>
		<div class="secondary-navigation">
		<RouterLink class="router-link" :to="{ name: 'About:Education' }">
      Education
    </RouterLink>
	<RouterLink class="router-link" :to="{ name: 'About:Carrier' }">
      Carrier
    </RouterLink>
	<RouterLink class="router-link" :to="{ name: 'About:Skills' }">
      Skills
    </RouterLink>
      <RouterView></RouterView>
		</div>
	</div>
</Main>
</template>

<script>
import Main from '@/components/Main'
import routes from '@/routes'


export default {
  name: 'About',
  components: {
	  Main,
  },
  mounted () {
    console.log(this.$route.name)
  }
}


</script>

<style>

.router-link {
	margin-right: 10px;
}

.secondary-navigation {
	width: 1077px;
    height: 5px;
	margin: 0 auto;
	margin-top: 60px;

}

.container-about-me-inside {
    width: 1077px;
    height: 175px;
	position: relative;
	margin: 0 auto;
	padding-top: 30px;
}

</style>
