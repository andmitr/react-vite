import { useEffect, useRef } from 'react';
import setCookies from '../../utils/cookies.js';

function CookieDialog() {
  const dialogRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const cleanup = setCookies(dialogRef.current, buttonRef.current);
    return cleanup;
  }, []);

  return (
    <dialog ref={dialogRef} data-cookie-dialog>
      <p>
        This website uses cookies to improve its performance and user experience. By continuing, you agree to their use.
      </p>
      <button ref={buttonRef} type="button" data-cookie-close>Accept</button>
    </dialog>
  );
}

export default CookieDialog;