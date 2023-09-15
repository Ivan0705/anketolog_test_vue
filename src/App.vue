<template>
    <main class="wrapper">
        <Tree/>
    </main>
</template>

<script>
    import Tree from "./components/Tree";

    export default {
        name: 'App',
        components: {
            Tree
        }
    }
</script>

<style>
    html, body {
        background: lightgray;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .wrapper {
        background: #fff;
        margin: 0 0 0 200px;
        width: 530px;
    }

    /*------MODILE-----*/
    @media (max-width: 635px) {
        .wrapper {
            max-width: 700px;
            margin: auto;
        }
    }
</style>
