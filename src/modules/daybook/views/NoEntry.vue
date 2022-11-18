<template>
    <div class="position-relative">
        <p>No hay ningún elementos seleccionado</p>
        <fab-icon></fab-icon>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        fabIcon: defineAsyncComponent( () => import('@/modules/daybook/components/Fab.vue') )
    }
}
</script>

<style lang="scss" scoped>
    div.position-relative{
        display:Flex;
        justify-content:center;
        text-align:center;
        align-items:center;
        height:100%;
        font-weight:600;
        font-size:32px
    }
</style>