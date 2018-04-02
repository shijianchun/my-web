<template>
	<div>
		<Banner></Banner>
		<NewsTable></NewsTable>
	</div>
</template>
<script>
    import Banner from '@/components/Banner'
    import NewsTable from '@/components/news/NewsTable'

    export default {
      components: {
        Banner,
        NewsTable
      },
      data() {
        return {
        }
      }       
    }
</script>
<style scoped>
</style>