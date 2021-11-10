import { firebaseApp } from "@/components/firebaseConfig";
import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import router from "../router";

export const system = {
  namespaced: true,
  state: {
    logedUser: null,
    Firebase: null,
  },
  mutations: {
    SET_FIREBASE(state, firebase) {
      state.Firebase = firebase;
    },
    SET_USER(state, user) {
      state.logedUser = user;
    },
  },
  actions: {
    initializeFirebase({ commit }) {
      //   const firestore = getFirestore();
      commit("SET_FIREBASE", firebaseApp);
      //   commit("SET_FIRESTORE", firestore);
    },

    async loginUser({ commit }, { email, password }) {
      const auth = getAuth();
      try {
        const logedUser = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (logedUser) {
          commit("SET_USER", logedUser);
          router.push("/home");
        }
      } catch (e) {
        console.log(e);
      }
    },

    registerUser({ commit }, { email, password }) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          console.log(userCredential.user);
          const user = userCredential.user;
          commit("SET_USER", user);
          router.push("/home");
        })
        .catch((error) => {
          console.log(error);
          // ..
        });
    },
  },
};
