<template>
	<div>
		<Banner></Banner>
		<ProductTable></ProductTable>
	</div>
</template>
<script>
    import Banner from '@/components/Banner'
    import ProductTable from '@/components/product/ProductTable'

    export default {
      components: {
        Banner,
        ProductTable
      },
      data() {
        return {
        }
      }       
    }
</script>
<style scoped>
</style>