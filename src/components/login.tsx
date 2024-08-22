// import React, { useEffect } from "react";
import styles from "./LoginForm.module.css";

const LoginForm: React.FC = () => {
  // useEffect(() => {
  //   const initGoogleSignIn = () => {
  //     // Render the Google sign-in button
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     const google = (window as any).google;
  //     if (google) {
  //       google.accounts.id.initialize({
  //         // No callback needed as we are not handling it here
  //       });

  //       google.accounts.id.renderButton(
  //         document.getElementById("google-sign-in-button")!,
  //         {
  //           theme: "outline",
  //           size: "large",
  //         }
  //       );
  //     } else {
  //       console.error("Google Sign-In not initialized.");
  //     }
  //   };

  //   initGoogleSignIn();
  // }, []);

  const handleGoogleSignIn = () => {
    // Open the Google OAuth URL
    window.location.href = "http://localhost:3000/users/auth/google";
  };

  return (
    <div>
      {/* <h2 className={styles.centerText}>Login</h2> */}
      <div
        className={styles.googleButtonContainer}
        // id="google-sign-in-button"
      >
        <button onClick={handleGoogleSignIn}>Continue with google</button>
      </div>
    </div>
  );
};

export default LoginForm;
