<template>
    <div class="app">
        <h2>Chords</h2>
        <guitare-neck 
            :tuning="tuning"
            :show-frets.sync="showFrets"
            :show-markers.sync="showMarkers"
            :nb-intervals="nbIntervals" 
        />
        <a href="#" @click="showFrets = !showFrets">Show/hide frets</a>
        <br>
        <a href="#" @click="showMarkers = !showMarkers">Show/hide markers</a>
    </div>
</template>

<style scoped lang="scss">
.app {
    text-align: center;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import GuitareNeck from "../guitare/neck.vue";
import { Tuning, createStandard as createStandardTuning } from "../../core/guitare/tuning"

@Component({
    components: {
        GuitareNeck
    }
})

export default class App extends Vue {
    tuning: Tuning | null = null
    showFrets: Boolean = true
    showMarkers: Boolean = true
    nbIntervals: Number = 24

    created() {
        this.tuning = createStandardTuning();
    }
}
</script>
