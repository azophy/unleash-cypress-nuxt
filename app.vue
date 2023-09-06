<template>
  <main>
    <section>
        <header>
          <h1>Example website</h1>
          <p>
            <!-- changed -->
            <button v-if="isShowButtonA">
            <!-- changed -->
              Button A
            </button>
            &nbsp;
            <button style="background:var(--color-secondary)">
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
  isShowButtonA.value = isEnabled('ENABLE-BUTTON-A', overrideFeatureToggle) // CHANGED
}

unleash.on('update', updateToggleState);
updateToggleState()
</script>
