// signup

const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

  // get user info
  const email = signupForm['signup-email'].value
  const password = signupForm['signup-password'].value

  // signup the user
  auth.createUserWithEmailAndPassword(email, password)
    .then(cred => {
      console.log(cred)
      const modal = document.querySelector('#modal-signup')
      M.Modal.getInstance(modal).close()
      signupForm.reset()
    })
    .catch(err => console.log(err))
})