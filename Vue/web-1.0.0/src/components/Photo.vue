<template>
    <div>
        <transition name="tada">
            <p>photo</p>        
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'photo'
    }
</script>
<style>
    *{
        color: #fff;
    }
    .tada-enter-active {
        animation: tada 0.5s;
    }
    .tada-leave-active {
        animation: bounce-in .5s reverse;
    }
</style>