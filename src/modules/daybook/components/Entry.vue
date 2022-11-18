<template>
    <div  @click="$router.push({ name: 'entry', params: { id: 10 } })" class="entry-container mb-3 pointer p-2">
        <div class="entry-title d-flex align-items-end">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2">2021, Jueves</span>
        </div>
        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi nobis perferendis delectus fugit eaque perspiciatis voluptatum, optio consequatur alias repudiandae omnis, quidem esse distinctio itaque id? Itaque, sit cumque?
        </div>
    </div>
</template>

<script>
export default {
    name:"entry-item"
}
</script>

<style lang="scss" scoped>

.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: .5s;

    &:hover{
        background-color: lighten($color:grey, $amount:45);
        transition: .5s;
    }
}
.entry-description{
    font-size:11px;
}




</style>