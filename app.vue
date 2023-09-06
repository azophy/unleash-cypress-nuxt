<template>
  <main>
    <section>
        <header>
          <h1>Example website</h1>
          <p>
            <button v-if="isShowButtonA">
              Button A
            </button>
            &nbsp;
            <!-- changed -->
            <button v-if="isShowButtonB" style="background:var(--color-secondary)">
            <!-- changed -->
              Button B
            </button>
          </p>
        </header>
    </section>
  </main>
</template>

<script setup lang="ts">
const isShowButtonA = useState<bool>('isShowButtonA', () => false)
const overrideFeatureToggle = useCookie('OVERRIDE_FEATURE_TOGGLE') // NEW

import { unleash, isEnabled } from './lib/unleash-client'

const updateToggleState = () => {
  isShowButtonA.value = isEnabled('ENABLE-BUTTON-A', overrideFeatureToggle.value) // CHANGED
}

unleash.on('update', updateToggleState);
updateToggleState()

// new lines
const isShowButtonB = useState<bool>('isShowButtonB', () => false)

setInterval(async () => {
  const { enabled } = await $fetch('/api/button-b')
  isShowButtonB.value = enabled
}, 3000)
</script>
