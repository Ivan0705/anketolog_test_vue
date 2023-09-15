<template>
    <div class="tree-root">
        <div class="tree-root_block block" :style="{'margin-left':`${depth*40}px`}">
            <div class="block_name" v-if="!isEdit">
                <div class="block_title">
                    <img class="block_img" v-bind:src="require(`@/images_file-types/${node.type}`)" alt="node.name">{{
                    node.name }}
                </div>
                <div class="block_group-btns btn">
                    <div class="btn_edit" @click="edit">
                        <img src="../images_actons/edit.png" alt="remove">
                    </div>
                    <div class="btn_remove" @click="remove(node.id)">
                        <img src="../images_actons/remove.png" alt="remove">
                    </div>
                </div>
            </div>
            <div class="block_edit edit" v-else>
                <label>
                    <input class="edit_input" type="text" v-model="node.name">
                </label>
                <button class="edit_btn" @click="save">Save</button>
            </div>
            <TreeRoot v-for="item in node.children" :node="item" @remove="remove" :key="item.id"
                      :depth="depth+1"/>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TreeRoot',
        props: {
            node: {
                type: Object
            },
            depth: {
                type: Number,
                default: 0
            }
        }, data() {
            return {
                isEdit: false,
            }
        },
        methods: {
            remove(id) {
                this.$emit("remove", id)
            },
            edit() {
                this.isEdit = true
            },
            save() {
                this.isEdit = false;
            }
        }
    }
</script>
<style>
    .tree-root {
        width: 100%;
        font-size: 35px;
        font-family: Arial sans-serif;
        text-align: left;
    }


    .tree-root_block {
        max-width: 500px;
    }

    .block {
        display: flex;
        flex-direction: column;
        padding-left: 15px;
    }

    .block_title {
    }

    .block_img {
        border-radius: 5px;
        width: 35px;
        height: 35px;
    }

    .block_name {
        display: flex;
        justify-content: space-between;

    }

    .block_group-btns {
        max-width: 300px;
        display: flex;
    }

    .btn {
    }

    .btn_remove {
    }

    .btn_edit {
    }

    .btn_remove img, .btn_edit img {
        width: 30px;
        height: 30px;
    }

    .block_edit {
        height: 40px;
    }

    .edit {
    }

    .edit_input {
        height: 35px;
        font-weight: bold;
    }

    .edit_btn {
        height: 40px;
        background: lightseagreen;
        color: green;
        text-align: center;
        font-weight: bold;
    }
</style>
