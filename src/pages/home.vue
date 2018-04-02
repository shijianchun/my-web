<template>
	<div>
		<Banner></Banner>
		<NewsList></NewsList>
    <ProductList></ProductList>
    <CaseList></CaseList>
    <ContactUs></ContactUs>
    <partner></partner>
	</div>
</template>
<script>
    import Banner from '@/components/Banner'
    import NewsList from '@/components/news/NewsList'
    import ProductList from '@/components/product/ProductList'
    import CaseList from '@/components/case/CaseList'
    import ContactUs from '@/components/contact/ContactUs'
    import Partner from '@/components/partner/Partner'

    export default {
      components: {
        Banner,
        NewsList,
        ProductList,
        CaseList,
        ContactUs,
        Partner
      },
      data() {
        return {
        }
      }       
    }
</script>
<style scoped>
</style>