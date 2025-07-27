<template>
  <div class="contacts-page">
    <!-- Hero Section -->
    <section class="contacts-hero section">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title text-gradient">Контакты</h1>
          <p class="hero-subtitle">
            Свяжитесь со мной для сотрудничества, консультаций или участия в проектах
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content-section section">
      <div class="container">
        <div class="contact-layout">
          <!-- Contact Form -->
          <div class="contact-form-container">
            <div class="form-card card neon-border">
              <h2 class="form-title">Написать сообщение</h2>
              <form @submit.prevent="submitForm" class="contact-form">
                <div class="form-group">
                  <label for="name" class="form-label">Имя *</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="form-input"
                    :class="{ 'error': errors.name }"
                    placeholder="Ваше имя"
                    required
                  />
                  <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
                </div>

                <div class="form-group">
                  <label for="email" class="form-label">Email *</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="form-input"
                    :class="{ 'error': errors.email }"
                    placeholder="your@email.com"
                    required
                  />
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>

                <div class="form-group">
                  <label for="subject" class="form-label">Тема *</label>
                  <select
                    id="subject"
                    v-model="form.subject"
                    class="form-select"
                    :class="{ 'error': errors.subject }"
                    required
                  >
                    <option value="">Выберите тему</option>
                    <option value="collaboration">Сотрудничество</option>
                    <option value="consultation">Консультация</option>
                    <option value="speaking">Выступление</option>
                    <option value="project">Участие в проекте</option>
                    <option value="education">Образование</option>
                    <option value="other">Другое</option>
                  </select>
                  <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
                </div>

                <div class="form-group">
                  <label for="message" class="form-label">Сообщение *</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    class="form-textarea"
                    :class="{ 'error': errors.message }"
                    placeholder="Расскажите подробнее о вашем предложении или вопросе..."
                    rows="5"
                    required
                  ></textarea>
                  <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
                </div>

                <div class="form-group">
                  <label class="form-checkbox">
                    <input
                      v-model="form.privacy"
                      type="checkbox"
                      required
                    />
                    <span class="checkbox-custom"></span>
                    <span class="checkbox-text">
                      Я согласен с обработкой персональных данных *
                    </span>
                  </label>
                  <span v-if="errors.privacy" class="error-message">{{ errors.privacy }}</span>
                </div>

                <button
                  type="submit"
                  class="submit-btn neon-button"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? 'Отправка...' : 'Отправить сообщение' }}
                </button>
              </form>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="contact-info-container">
            <div class="info-card card">
              <h2 class="info-title">Контактная информация</h2>
              
              <div class="contact-methods">
                <div class="contact-method">
                  <div class="method-icon">📧</div>
                  <div class="method-content">
                    <h3 class="method-title">Email</h3>
                    <a href="mailto:dmitry@example.com" class="method-value">
                      dmitry@example.com
                    </a>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="method-icon">📱</div>
                  <div class="method-content">
                    <h3 class="method-title">Телефон</h3>
                    <a href="tel:+79999999999" class="method-value">
                      +7 (999) 999-99-99
                    </a>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="method-icon">📍</div>
                  <div class="method-content">
                    <h3 class="method-title">Местоположение</h3>
                    <span class="method-value">Москва, Россия</span>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="method-icon">⏰</div>
                  <div class="method-content">
                    <h3 class="method-title">Часы работы</h3>
                    <span class="method-value">Пн-Пт: 9:00-18:00</span>
                  </div>
                </div>
              </div>

              <div class="social-links">
                <h3 class="social-title">Социальные сети</h3>
                <div class="social-grid">
                  <a href="#" class="social-link telegram" target="_blank" rel="noopener">
                    <span class="social-icon">📱</span>
                    <span class="social-name">Telegram</span>
                  </a>
                  <a href="#" class="social-link vk" target="_blank" rel="noopener">
                    <span class="social-icon">🔗</span>
                    <span class="social-name">VKontakte</span>
                  </a>
                  <a href="#" class="social-link linkedin" target="_blank" rel="noopener">
                    <span class="social-icon">💼</span>
                    <span class="social-name">LinkedIn</span>
                  </a>
                  <a href="#" class="social-link github" target="_blank" rel="noopener">
                    <span class="social-icon">💻</span>
                    <span class="social-name">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Download CV -->
            <div class="cv-card card">
              <div class="cv-content">
                <div class="cv-icon">📄</div>
                <h3 class="cv-title">Скачать CV</h3>
                <p class="cv-description">
                  Загрузите мое резюме в формате PDF
                </p>
                <button class="cv-download neon-button secondary" @click="downloadCV">
                  Скачать PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section section">
      <div class="container">
        <h2 class="section-title text-center">Часто задаваемые вопросы</h2>
        <div class="faq-list">
          <div 
            v-for="faq in faqs"
            :key="faq.id"
            class="faq-item card"
            @click="toggleFaq(faq.id)"
          >
            <div class="faq-header">
              <h3 class="faq-question">{{ faq.question }}</h3>
              <span class="faq-toggle" :class="{ 'active': faq.isOpen }">+</span>
            </div>
            <div class="faq-answer" :class="{ 'open': faq.isOpen }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="success-modal" @click="closeSuccessModal">
      <div class="modal-content card neon-border" @click.stop>
        <div class="success-content">
          <div class="success-icon">✅</div>
          <h3 class="success-title">Сообщение отправлено!</h3>
          <p class="success-message">
            Спасибо за ваше сообщение. Я отвечу вам в течение 24 часов.
          </p>
          <button @click="closeSuccessModal" class="success-btn neon-button">
            Понятно
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Meta tags
useSeoMeta({
  title: 'Контакты - Дмитрий Комаров',
  ogTitle: 'Контакты - Дмитрий Комаров',
  description: 'Свяжитесь с Дмитрием Комаровым для сотрудничества, консультаций или участия в проектах',
  ogDescription: 'Свяжитесь с Дмитрием Комаровым для сотрудничества, консультаций или участия в проектах'
})

// Reactive state
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  privacy: false
})

const errors = ref({})
const isSubmitting = ref(false)
const showSuccessModal = ref(false)

// FAQ data
const faqs = ref([
  {
    id: 1,
    question: 'Как я могу связаться с вами для сотрудничества?',
    answer: 'Вы можете воспользоваться формой обратной связи на этой странице, написать на email или связаться через социальные сети. Я отвечаю на все сообщения в течение 24 часов.',
    isOpen: false
  },
  {
    id: 2,
    question: 'Проводите ли вы консультации по инклюзивным технологиям?',
    answer: 'Да, я предоставляю консультации по вопросам инклюзивности в образовании и технологиях. Это может включать адаптацию контента, обучение персонала или разработку доступных решений.',
    isOpen: false
  },
  {
    id: 3,
    question: 'Можно ли пригласить вас для выступления на мероприятии?',
    answer: 'Конечно! Я регулярно выступаю на конференциях, семинарах и образовательных мероприятиях. Темы включают инклюзивные технологии, веб-разработку и организацию доступного образования.',
    isOpen: false
  },
  {
    id: 4,
    question: 'Доступны ли ваши лекции с переводом на РЖЯ?',
    answer: 'Да, все мои выступления могут быть адаптированы с переводом на русский жестовый язык. У меня есть опыт работы с переводчиками и создания доступного контента.',
    isOpen: false
  },
  {
    id: 5,
    question: 'Как я могу присоединиться к вашим проектам?',
    answer: 'Я всегда открыт для новых участников в проектах. Напишите мне о ваших интересах и навыках, и мы обсудим возможности участия в текущих или будущих инициативах.',
    isOpen: false
  }
])

// Methods
const validateForm = () => {
  const newErrors = {}
  
  if (!form.value.name.trim()) {
    newErrors.name = 'Поле "Имя" обязательно для заполнения'
  }
  
  if (!form.value.email.trim()) {
    newErrors.email = 'Поле "Email" обязательно для заполнения'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    newErrors.email = 'Введите корректный email адрес'
  }
  
  if (!form.value.subject) {
    newErrors.subject = 'Выберите тему сообщения'
  }
  
  if (!form.value.message.trim()) {
    newErrors.message = 'Поле "Сообщение" обязательно для заполнения'
  } else if (form.value.message.trim().length < 10) {
    newErrors.message = 'Сообщение должно содержать минимум 10 символов'
  }
  
  if (!form.value.privacy) {
    newErrors.privacy = 'Необходимо согласие на обработку данных'
  }
  
  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

const submitForm = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
      privacy: false
    }
    errors.value = {}
    
    showSuccessModal.value = true
  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}

const toggleFaq = (id: number) => {
  const faq = faqs.value.find(f => f.id === id)
  if (faq) {
    faq.isOpen = !faq.isOpen
  }
}

const downloadCV = () => {
  // Simulate CV download
  alert('CV будет доступен для скачивания после предоставления файла заказчиком')
}

const closeSuccessModal = () => {
  showSuccessModal.value = false
}
</script>

<style lang="scss" scoped>
.contacts-page {
  min-height: 100vh;
}

.contacts-hero {
  padding-top: $spacing-16;
  text-align: center;
  
  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .page-title {
    font-size: $text-6xl;
    margin-bottom: $spacing-6;
    
    @include mobile {
      font-size: $text-4xl;
    }
  }
  
  .hero-subtitle {
    font-size: $text-xl;
    color: $color-neon-cyan;
    line-height: 1.6;
  }
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-12;
  
  @include tablet {
    grid-template-columns: 1fr;
    gap: $spacing-8;
  }
}

.form-card {
  padding: $spacing-8;
  
  .form-title {
    color: $color-neon-pink;
    font-size: $text-2xl;
    margin-bottom: $spacing-8;
    text-align: center;
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: $spacing-6;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: $spacing-2;
}

.form-label {
  color: $color-white;
  font-weight: 600;
  font-size: $text-sm;
}

.form-input,
.form-select,
.form-textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: $radius-md;
  padding: $spacing-3 $spacing-4;
  color: $color-white;
  font-family: $font-secondary;
  transition: $transition-normal;
  
  &:focus {
    outline: none;
    border-color: $color-neon-cyan;
    @include neon-glow($color-neon-cyan, 2px);
  }
  
  &.error {
    border-color: #ff6b6b;
  }
  
  &::placeholder {
    color: $color-gray-400;
  }
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-checkbox {
  display: flex;
  align-items: flex-start;
  gap: $spacing-3;
  cursor: pointer;
  
  input[type="checkbox"] {
    display: none;
  }
  
  .checkbox-custom {
    width: 20px;
    height: 20px;
    border: 2px solid $color-gray-400;
    border-radius: $radius-sm;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: $transition-normal;
    margin-top: 2px;
    
    &::after {
      content: '✓';
      color: $color-white;
      font-weight: bold;
      font-size: $text-sm;
      opacity: 0;
      transition: $transition-normal;
    }
  }
  
  input:checked + .checkbox-custom {
    background: linear-gradient(45deg, $color-neon-pink, $color-neon-cyan);
    border-color: transparent;
    
    &::after {
      opacity: 1;
    }
  }
  
  .checkbox-text {
    color: $color-gray-300;
    font-size: $text-sm;
    line-height: 1.5;
  }
}

.error-message {
  color: #ff6b6b;
  font-size: $text-xs;
  margin-top: $spacing-1;
}

.submit-btn {
  padding: $spacing-4 $spacing-6;
  font-size: $text-base;
  font-weight: 600;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.contact-info-container {
  display: flex;
  flex-direction: column;
  gap: $spacing-6;
}

.info-card,
.cv-card {
  padding: $spacing-8;
}

.info-title {
  color: $color-neon-cyan;
  font-size: $text-2xl;
  margin-bottom: $spacing-8;
  text-align: center;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: $spacing-6;
  margin-bottom: $spacing-8;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: $spacing-4;
  
  .method-icon {
    font-size: 1.5rem;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: $radius-full;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .method-content {
    flex: 1;
    
    .method-title {
      color: $color-white;
      font-size: $text-sm;
      font-weight: 600;
      margin-bottom: $spacing-1;
    }
    
    .method-value {
      color: $color-neon-cyan;
      text-decoration: none;
      transition: $transition-normal;
      
      &:hover {
        @include neon-text($color-neon-cyan);
      }
    }
  }
}

.social-links {
  .social-title {
    color: $color-neon-purple;
    font-size: $text-lg;
    margin-bottom: $spacing-4;
    text-align: center;
  }
}

.social-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-3;
}

.social-link {
  display: flex;
  align-items: center;
  gap: $spacing-3;
  padding: $spacing-3;
  background: rgba(255, 255, 255, 0.05);
  border-radius: $radius-md;
  color: $color-white;
  text-decoration: none;
  transition: $transition-normal;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  &.telegram:hover {
    color: #0088cc;
    @include neon-text(#0088cc);
  }
  
  &.vk:hover {
    color: #4c75a3;
    @include neon-text(#4c75a3);
  }
  
  &.linkedin:hover {
    color: #0077b5;
    @include neon-text(#0077b5);
  }
  
  &.github:hover {
    color: #333;
    @include neon-text($color-gray-300);
  }
  
  .social-icon {
    font-size: $text-lg;
  }
  
  .social-name {
    font-size: $text-sm;
    font-weight: 500;
  }
}

.cv-card {
  text-align: center;
  
  .cv-content {
    .cv-icon {
      font-size: 3rem;
      margin-bottom: $spacing-4;
    }
    
    .cv-title {
      color: $color-neon-green;
      margin-bottom: $spacing-3;
    }
    
    .cv-description {
      color: $color-gray-300;
      margin-bottom: $spacing-6;
      font-size: $text-sm;
    }
    
    .cv-download {
      &.secondary {
        background: transparent;
        border: 1px solid $color-neon-green;
        color: $color-neon-green;
        
        &:hover {
          background: $color-neon-green;
          color: $color-primary;
        }
      }
    }
  }
}

.faq-section {
  .section-title {
    margin-bottom: $spacing-12;
  }
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.faq-item {
  cursor: pointer;
  padding: $spacing-6;
  transition: $transition-normal;
  
  &:hover {
    @include neon-glow($color-neon-purple, 2px);
  }
}

.faq-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .faq-question {
    color: $color-white;
    font-size: $text-lg;
    margin: 0;
  }
  
  .faq-toggle {
    color: $color-neon-cyan;
    font-size: $text-2xl;
    font-weight: bold;
    transition: $transition-normal;
    
    &.active {
      transform: rotate(45deg);
      color: $color-neon-pink;
    }
  }
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  
  &.open {
    max-height: 200px;
    margin-top: $spacing-4;
  }
  
  p {
    color: $color-gray-300;
    line-height: 1.6;
    margin: 0;
  }
}

// Success Modal
.success-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: $z-modal;
  padding: $spacing-4;
}

.modal-content {
  max-width: 400px;
  width: 100%;
  padding: $spacing-8;
  text-align: center;
}

.success-content {
  .success-icon {
    font-size: 4rem;
    margin-bottom: $spacing-6;
  }
  
  .success-title {
    color: $color-neon-green;
    margin-bottom: $spacing-4;
    font-size: $text-2xl;
  }
  
  .success-message {
    color: $color-gray-300;
    line-height: 1.6;
    margin-bottom: $spacing-8;
  }
  
  .success-btn {
    padding: $spacing-3 $spacing-6;
  }
}

.text-center {
  text-align: center;
}
</style> 