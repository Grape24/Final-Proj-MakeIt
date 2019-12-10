<template>
  <section class="account-form">
    <form class="flex column align-center" @submit.prevent="doSignup">
      <h2 class="align-center">Signup to MakeIt</h2>
      <input class="email-cred" type="text" v-model="signupCred.email" placeholder="Enter email" />
      <input class="pass-cred" type="password" v-model="signupCred.password" placeholder="Enter password" />
      <input class="username-cred" type="text" v-model="signupCred.username" placeholder="Enter username" />
      <div
        @click="imgAttachmentSelected = false"
        class="transparent-modal-mask"
        v-if="imgAttachmentSelected"
      ></div>
      <div @click="imgAttachmentSelected = !imgAttachmentSelected" class="img-attachment-signup">
        <i class="fas fa-image"></i>Add a profile picture
      </div>
      <div class="img-uploader" v-if="imgAttachmentSelected">
        <div>Attach and Image</div>
        <input class="upload-img-input" type="file" @change="uploadImgfunc" />
      </div>
      <div v-if="signupCred.imgUrl" class="flex align-center">
        <i class="fas fa-paperclip"></i>
        <div class="image-title">Image</div>
      </div>
      <img v-if="signupCred.imgUrl" :src="signupCred.imgUrl" />

      <button class="login-btn">Signup</button>
    </form>
  </section>
</template>

<script>
import { uploadImg } from "../services/CloudinaryService.js";

export default {
  data() {
    return {
      signupCred: {},
      imgAttachmentSelected: false,
      addLabelsSelected: false
    };
  },
  methods: {
    async uploadImgfunc(ev) {
      var res = await uploadImg(ev);
      this.signupCred.imgUrl = res.url;
    },
    doSignup() {
      const cred = this.signupCred;
      if (!cred.email || !cred.password || !cred.username || !cred.imgUrl)
        return (this.msg = "Please fill up the form");
      this.$store.store.dispatch({ type: "signup", userCred: cred });
      this.$router.push("/");
    }
  }
};
</script>