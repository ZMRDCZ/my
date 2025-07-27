<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :target="target"
    :rel="rel"
    :type="type"
    :disabled="disabled"
    class="neon-button"
    :class="[
      variant,
      size,
      {
        'disabled': disabled,
        'loading': loading
      }
    ]"
    @click="handleClick"
  >
    <span v-if="loading" class="loading-spinner"></span>
    <span class="button-content" :class="{ 'loading': loading }">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  tag?: 'button' | 'a' | 'NuxtLink'
  to?: string
  href?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  tag: 'button',
  type: 'button',
  disabled: false,
  loading: false
})

const emit = defineEmits<{
  click: [event: Event]
}>()

const handleClick = (event: Event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style lang="scss" scoped>
.neon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-2;
  border: none;
  border-radius: $radius-md;
  font-family: $font-primary;
  font-weight: 600;
  cursor: pointer;
  transition: $transition-normal;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: $transition-slow;
  }
  
  &:hover:not(.disabled):not(.loading) {
    transform: translateY(-2px);
    
    &::before {
      left: 100%;
    }
  }
  
  // Variants
  &.primary {
    background: linear-gradient(45deg, $color-neon-pink, $color-neon-cyan);
    color: $color-white;
    
    &:hover:not(.disabled) {
      @include neon-glow($color-neon-cyan, 5px);
    }
  }
  
  &.secondary {
    background: transparent;
    border: 2px solid $color-neon-cyan;
    color: $color-neon-cyan;
    
    &:hover:not(.disabled) {
      background: $color-neon-cyan;
      color: $color-primary;
    }
  }
  
  &.tertiary {
    background: transparent;
    color: $color-white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    
    &:hover:not(.disabled) {
      background: rgba(255, 255, 255, 0.1);
      border-color: $color-neon-purple;
    }
  }
  
  // Sizes
  &.sm {
    padding: $spacing-2 $spacing-4;
    font-size: $text-sm;
  }
  
  &.md {
    padding: $spacing-3 $spacing-6;
    font-size: $text-base;
  }
  
  &.lg {
    padding: $spacing-4 $spacing-8;
    font-size: $text-lg;
  }
  
  // States
  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
  
  &.loading {
    cursor: not-allowed;
    
    .button-content {
      opacity: 0.7;
    }
  }
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.button-content {
  transition: $transition-normal;
  
  &.loading {
    opacity: 0.7;
  }
}
</style> 