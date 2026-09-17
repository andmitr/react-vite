function setCookies(dialog, button) {
  if (!dialog || !button) {
    return () => {};
  }

  if (!document.cookie.includes('cookieConsent=accepted') && !dialog.open) {
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else if (typeof dialog.show === 'function') {
      dialog.show();
    }
  }

  const onAccept = () => {
    document.cookie = 'cookieConsent=accepted; Max-Age=31536000; Path=/; SameSite=Lax';
    dialog.close();
  };

  button.addEventListener('click', onAccept);

  return () => {
    button.removeEventListener('click', onAccept);
  };
}

export default setCookies;
