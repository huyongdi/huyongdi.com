<template>
    <p>{{greeting}}</p>
</template>
<script>
    module.exports = {
        data:function(){
            return {
                greeting: 'Hello'
            }
        }
    }
</script>

<style scoped>
    body{
        font-size:2em;
        text-align:center
    }
</style>
