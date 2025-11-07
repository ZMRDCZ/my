<template>
  <div class="contacts-page">
    <section class="page-header section">
      <div class="container">
        <h1 class="page-title text-gradient">Контакты</h1>
        <p class="page-description">
          Свяжитесь со мной для сотрудничества или обсуждения проектов
        </p>
      </div>
    </section>

    <section class="contacts-section section">
      <div class="container">
        <div class="contacts-grid">
          <!-- Contact Info Card -->
          <div class="contact-card card">
            <h2 class="card-title">Контактная информация</h2>
            
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div class="contact-details">
                <div class="contact-label">Email</div>
                <a :href="`mailto:${contactInfo.email}`" class="contact-link">
                  {{ contactInfo.email }}
                </a>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📱</div>
              <div class="contact-details">
                <div class="contact-label">Телефон</div>
                <a :href="`tel:${contactInfo.phone}`" class="contact-link">
                  {{ contactInfo.phone }}
                </a>
              </div>
            </div>
            
            <div class="social-links">
              <h3 class="social-title">Социальные сети</h3>
              <div class="social-grid">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                  :aria-label="social.ariaLabel"
                >
                  <span class="social-icon">{{ social.icon }}</span>
                  <span class="social-name">{{ social.name }}</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form Card -->
          <div class="form-card card">
            <h2 class="card-title">Написать мне</h2>
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name" class="form-label">Ваше имя</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="form-input"
                  placeholder="Введите ваше имя"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="subject" class="form-label">Тема</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  class="form-input"
                  placeholder="Тема сообщения"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="message" class="form-label">Сообщение</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-textarea"
                  placeholder="Ваше сообщение..."
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <IndustrialButton type="submit" variant="primary" size="lg">
                Отправить сообщение
              </IndustrialButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import IndustrialButton from '@/components/ui/IndustrialButton.vue'
import { contactInfo, socialLinks } from '@/constants/contacts'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Form submission logic would go here
  alert('Форма будет настроена при интеграции с backend')
  console.log('Form submitted:', form)
}
</script>

<style lang="scss" scoped>
.page-header {
  text-align: center;
  padding-top: 120px;
  
  @include mobile {
    padding-top: 100px;
  }
}

.page-title {
  font-size: $text-5xl;
  margin-bottom: $spacing-4;
  
  @include mobile {
    font-size: $text-4xl;
  }
  
  @include xs {
    font-size: $text-3xl;
  }
}

.page-description {
  font-size: $text-xl;
  color: $color-text-secondary;
  max-width: 600px;
  margin: 0 auto;
  
  @include mobile {
    font-size: $text-lg;
  }
  
  @include xs {
    font-size: $text-base;
  }
}

.contacts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-8;
  max-width: 1200px;
  margin: 0 auto;
  
  @include mobile-and-tablet {
    grid-template-columns: 1fr;
    gap: $spacing-6;
  }
}

.card-title {
  font-size: $text-2xl;
  margin-bottom: $spacing-6;
  color: $color-accent;
  
  @include mobile {
    font-size: $text-xl;
    margin-bottom: $spacing-4;
  }
}

.contact-item {
  display: flex;
  gap: $spacing-4;
  margin-bottom: $spacing-6;
  padding: $spacing-4;
  background: rgba($color-accent, 0.05);
  border-radius: $radius-md;
  transition: $transition-normal;
  
  &:hover {
    background: rgba($color-accent, 0.1);
  }
}

.contact-icon {
  font-size: 2rem;
  
  @include mobile {
    font-size: 1.5rem;
  }
}

.contact-details {
  flex: 1;
}

.contact-label {
  font-size: $text-sm;
  color: $color-text-muted;
  margin-bottom: $spacing-1;
}

.contact-link {
  color: $color-accent;
  text-decoration: none;
  font-size: $text-lg;
  transition: $transition-normal;
  
  &:hover {
    color: $color-industrial-cyan;
    @include industrial-text-glow($color-industrial-cyan);
  }
  
  @include mobile {
    font-size: $text-base;
  }
}

.social-links {
  margin-top: $spacing-8;
}

.social-title {
  font-size: $text-lg;
  margin-bottom: $spacing-4;
  color: $color-highlight;
}

.social-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: $spacing-3;
}

.social-link {
  display: flex;
  align-items: center;
  gap: $spacing-3;
  padding: $spacing-3 $spacing-4;
  background: rgba($color-accent, 0.05);
  border: 1px solid rgba($color-accent, 0.2);
  border-radius: $radius-md;
  text-decoration: none;
  color: $color-text-secondary;
  transition: $transition-normal;
  
  &:hover {
    background: rgba($color-accent, 0.1);
    border-color: $color-accent;
    color: $color-accent;
    transform: translateX(5px);
  }
}

.social-icon {
  font-size: 1.5rem;
}

.social-name {
  font-weight: 600;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: $spacing-2;
}

.form-label {
  color: $color-text-secondary;
  font-weight: 600;
  font-size: $text-sm;
}

.form-input,
.form-textarea {
  padding: $spacing-3 $spacing-4;
  background: rgba($color-accent, 0.05);
  border: 1px solid rgba($color-accent, 0.2);
  border-radius: $radius-md;
  color: $color-text-primary;
  font-family: $font-secondary;
  font-size: $text-base;
  transition: $transition-normal;
  
  &:focus {
    outline: none;
    border-color: $color-accent;
    background: rgba($color-accent, 0.1);
    @include industrial-glow($color-accent, 2px);
  }
  
  &::placeholder {
    color: $color-text-muted;
  }
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}
</style>

