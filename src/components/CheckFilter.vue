<template>
    <div v-bind:class="{'check-filter':true, active:checked}">
        <span v-on:click="checkedFilter" class="checkbox"></span>
        <span class="check-filter-title">{{title}}</span>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                checked:false,
            }
        },
        props: ['title', 'category'],
        template:``,
        methods:{
            checkedFilter(){
                this.checked = ! this.checked;
                this.$bus.$emit('check-filter',this.category,this.title,this.checked);
            }
        }
    }
</script>