<template>
    <div class="tree">
        <TreeRoot v-for="node in tree" :node="node" :key="node.id" @remove="deleteElementsById"/>
    </div>
</template>

<script>
    import TreeRoot from "./TreeRoot";
    import {mapActions, mapState} from "vuex";

    export default {
        name: 'Tree',
        components: {TreeRoot},
        methods: {
            ...mapActions({
                deleteItem: "tree/deleteItem",
            }),
            deleteElementsById(id) {
                this.deleteItem(id)
            }
        },
        computed: {
            ...mapState({
                tree: state => state.tree.tree,
            })
        }

    };
</script>
<style scoped>
    .tree {
    }
</style>
