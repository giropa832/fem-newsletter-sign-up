import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "error"]

  connect() {
    this.form = this.element
    this.form.addEventListener('submit', this.validateForm.bind(this))
  }

  validateForm(event) {
    const emailInput = this.form.querySelector('input[type="email"]')
    const errorSpan = this.form.querySelector('.error-message')

    if (!emailInput.value) {
      event.preventDefault()
      errorSpan.textContent = 'Email is required'
      emailInput.classList.add('invalid')
    } else if (!this.isValidEmail(emailInput.value)) {
      event.preventDefault()
      errorSpan.textContent = 'Valid email required'
      emailInput.classList.add('invalid')
    } else {
      errorSpan.textContent = ''
      emailInput.classList.remove('invalid')
    }
  }

  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
} 