<template>
  <section>
    <form @submit.prevent="doSignup">
      <input type="text" v-model="signupCred.email" placeholder="Email" />
      <br />
      <input type="password" v-model="signupCred.password" placeholder="Password" />
      <br />
      <input type="text" v-model="signupCred.username" placeholder="Username" />
      <br />
      <div
        @click="imgAttachmentSelected = false"
        class="transparent-modal-mask"
        v-if="imgAttachmentSelected"
      ></div>
      <div @click="imgAttachmentSelected = !imgAttachmentSelected" class="img-attachment">
        <i class="fas fa-image"></i>Image Attachment
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

      <button>Signup</button>
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
      this.$store.dispatch({ type: "signup", userCred: cred });
      this.$router.push("/");
    }
  }
};
</script>