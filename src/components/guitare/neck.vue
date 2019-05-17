<template>
    <div ref="wrapper">
        <div 
            class="guitare-string"
            v-for="note in tuning.guitareStrings" 
            :item="note"
            :key="note.SPNname"
            :class="{ 'fret': showFrets }"
        >
            <div class="interval" 
                :style="{width: getCellSize(index + 1) }"
                v-for="index in nbIntervals"
                :key="index"
            >
                <span class="marker" v-if="showMarker(index + 1)" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.guitare-string {
    height: 30px;
    margin-bottom: 2px;
}
.interval {
    display: inline-block;
    height: 30px;
    background-color: black;
    vertical-align: middle;
}

.fret {
    .interval+.interval {
        box-sizing: border-box;
        border-left: 2px solid grey;
    }
}

.marker {
    height: 5px;
    width: 5px;
    background-color: white;
    border-radius: 50%;
    display: inline-block;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Tuning, createStandard as createStandardTuning } from "../../core/guitare/tuning"

@Component
export default class Neck extends Vue {
    @Prop(Object) tuning!: Tuning;
    @Prop(Boolean) showFrets!: boolean;
    @Prop(Boolean) showMarkers!: boolean;
    @Prop(Number) nbIntervals!: number;

    windowWidth!: number;

    getNeckWidth(): number {
      if(!this.$refs.wrapper) {
          return 0;
      }
      return (this.$refs.wrapper as HTMLElement).clientWidth;
    }

    created(): void {
        window.addEventListener('resize', this.handleResize);
    }

    mounted(): void {
        this.handleResize();
    }
    
    destroyed(): void {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize(): void {
        this.$forceUpdate();
    }

    /**
     * @see https://www.liutaiomottola.com/formulae/fret.htm
     */
    getFretDistance(fretNumber: number): number {
        const neckWidth: number = this.getNeckWidth();
        return neckWidth - (neckWidth    / Math.pow(2, (fretNumber / 12))) * 1.41;
    }

    getCellSize(fretNumber: number): string {
        return `${this.getFretDistance(fretNumber) - this.getFretDistance(fretNumber - 1)}px`;
    }

    showMarker(intervalNumber): boolean {
        return this.showMarkers;
    }
}
</script>
