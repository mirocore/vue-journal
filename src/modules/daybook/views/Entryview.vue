<template>
  <div class="d-flex justify-content-between align-items-center">
    <div>
      <span>15 </span>
      <span>Julio 2021, </span>
      <span>Jueves</span>
    </div>
    <div>
      <button class="btn btn-danger mx-1">
        Borrar
        <i class="fa fa-trash"></i>
      </button>
      <button class="btn btn-primary mx-1">
        Subir foto
        <i class="fa fa-update"></i>
      </button>
    </div>
  </div>
  <hr>
  <div>
    <textarea placeholder="¿Qué sucedió hoy?"></textarea>
  </div>
  <img class="img-thumbnail" alt="imagen" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cuesta_del_obispo_01.jpg/640px-Cuesta_del_obispo_01.jpg"/>
  <fab-icon icon="fa-save"/>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    name:"entry-view",
    components: {
      fabIcon: defineAsyncComponent( () => import('@/modules/daybook/components/Fab.vue') )
    }
}
</script>

<style lang="scss" scoped>
  textarea{
    width:100%;
    resize:none;
    border:none;

    &:focus{
      outline:none
    }
  }

  img{
    width:200px;
    height:auto;
    position:fixed;
    bottom:80px;
    right:10px;
  }
</style>