<template>
    <navbar-header />

    <div class="container my-5">
        <div class="d-flex row">
            <div class="col-4">
                <entry-list></entry-list>
            </div>
            <div class="col">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components:{
        navbarHeader:  defineAsyncComponent( () =>  import('../components/Navbar.vue') ),
        entryList:  defineAsyncComponent( () =>  import('../components/EntryList.vue') ),
    }
}
</script>