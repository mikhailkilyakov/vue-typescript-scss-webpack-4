<script lang="ts" type="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({
        
    })
    export default class AppComponent extends Vue {
        name: string = "User";

        alertMe(): void {
            alert(`Hello, ${this. name}!`);
        }
    }
</script>

<template>
    <div>
        <label>Your name:</label>
        <input id="name" name="name" v-model="name" />
        
        <p class="hello hello-world">Hello, world!</p>
        <p class="hello">Hello, {{ name }}!</p>

        <button v-on:click="alertMe()">Alert me!</button>
    </div>
</template>


<style lang="scss" scoped>
    .hello {
        color: blue;
        &.hello-world {
            color: red;
        }
    }
</style>
