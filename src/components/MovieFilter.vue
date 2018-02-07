<template>
    <div id="movie-filter">
        <h2>Filtered Results</h2>
        <div class="filter-group">
            <h3>By Time of Day</h3>
            <check-filter v-for="time in times" category="time" v-bind:title="time"></check-filter>
        </div>
        <div class="filter-group">
            <h3>By Genre</h3>
            <check-filter v-for="genre in genres" category="genre" v-bind:title="genre"></check-filter>
        </div>
    </div>
</template>

<script>
    import genres from '../util/genres';
    import times from '../util/times';
    import CheckFilter from './CheckFilter.vue';
    export default{
        data() {
            return {
                genres,
                times
            }
        },
        methods:{

        },
        components: {
            CheckFilter


        },


    }
</script>