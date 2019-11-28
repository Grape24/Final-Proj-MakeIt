<template>
    <section>
        <h1>Edit</h1>
    </section>
</template>
<script>
export default {
    created(){
        console.log(this.$route.params._id)
    }
}
</script>
