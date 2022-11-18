<template>
    <div>
        <i class="fa fa-x2" :class="icon"></i>
    </div>
</template>

<script>
export default {
    name: 'fab-icon',
    props:{
        icon: {
            type: String,
            default: 'fa-plus'
        }
    }
}
</script>

<style lang="scss" scoped>
    div{
        position:fixed;
        bottom: 10px;
        right:10px;
        background-color:black;
        color:white;
        height:50px;
        width:50px;
        border-radius:100%;
        transition:.5s;
        cursor:pointer;
        text-align:center;
        justify-content:center;
        align-items:center;
        display:flex;

        &:hover{
            transform:scale(.7);
        }
    }
</style>