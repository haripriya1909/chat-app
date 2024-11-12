import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { addUserToFirestore } from "@/lib/firebase/userController";

export const handleSignIn = (router: AppRouterInstance) => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result?.user;
      addUserToFirestore(user); // Corrected function name
      router.push("/"); // Redirects to homepage after sign-in
    })
    .catch((err) => {
      console.error("Error during sign-in:", err.message);
    });
};
