const oldstyleCopy = (text: string) => {
  const textField = document.createElement('textarea')
  textField.style.position = 'fixed'
  textField.style.top = '0'
  textField.style.opacity = '0'
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  try {
    return document.execCommand('copy')
  } finally {
    textField.remove()
  }
}

const copyToClipboard = async (text: string) => {
  if (!navigator.clipboard || !window.isSecureContext) {
    const result = oldstyleCopy(text)
    if (!result) {
      throw new Error('Failed to copy')
    }
  } else {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const result = oldstyleCopy(text)
      if (!result) {
        throw new Error('Failed to copy')
      }
    }
  }
}

export default copyToClipboard
