<template>
  <div class="app-layout">
    <AppHeader />
    <main class="main-content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Import components
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'

// Provide page transition animations
const route = useRoute()

// Add smooth scroll behavior
onMounted(() => {
  // Initialize GSAP animations if needed
  if (process.client) {
    // Any client-side initialization
  }
})
</script>

<style lang="scss" scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 80px; // Account for fixed header
  
  @include mobile {
    padding-top: 70px;
  }
}
</style> 