import { provide } from "vue";
import {
  auth,
  firebase,
  githubProvider,
  googleProvider,
} from "../services/firebase";

class _AuthController {
  public user: null | firebase.User;

  constructor() {
    this.user = null;

    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('have user', user.uid)
        return (this.user = user);
      }
    });
  }

  public async SignUpWithEmailAndPassword(
    email: string,
    password: string,
    username: string
  ) {
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);

      this.user = result.user;

      this.user?.updateProfile({
        displayName: username,
        photoURL:
          "https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg",
      });
    } catch (err) {
      alert(err);
    }
  }

  public async SignInWithProviders(provider: "google" | "github") {
    var _provider;

    if (provider === "google") {
      _provider = googleProvider;
    } else if (provider === "github") {
      _provider = githubProvider;
    } else {
      return;
    }

    try {
      const result = await auth.signInWithPopup(_provider);

      this.user = result.user;
    } catch (err) {
      alert(err);
    }
  }

  public async SignInWithEmailAndPassword(email: string, password: string) {
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);

      this.user = result.user;
    } catch (err) {}
  }
}

export const AuthController = new _AuthController();
