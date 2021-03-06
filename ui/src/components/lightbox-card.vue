<template lang="pug">
b-card(no-body)
  b-link(@click="$emit('show-image')")
    b-card-img-lazy.object-fit(@error.native="handleErrorImg" :src="'/files/' + (recording.recordType === 'Video' ? `${recording.name}@2.jpeg` : recording.fileName)" :img-alt="recording.name" top height=225 blank-height=225)
  b-card-body
    b-card-title {{ recording.camera }}
    small.text-muted {{ recording.recordType === "Snapshot" ? $t("snapshot") : $t("video") }} - {{ recording.room }}
    .card-text.mt-2.mb-2
      | {{ $t("recording_text").replace("@", recording.recordType === "Snapshot" ? $t("snapshot") : $t("video")).replace("%", recording.time).replace("#", recording.trigger === "motion" ? $t("motion") : $t("doorbell")) }}
    small.text-muted {{ `${$t("label")}: ${recording.label}` }}
    div.mt-2
      b-link.card-btn.btn-danger.float-left.d-flex.flex-wrap.align-content-center.justify-content-center(v-if="checkLevel('recordings:edit')", @click="$emit('remove-image', recording)")
        b-icon(icon="trash-fill", aria-hidden="true")
      b-link.card-btn.float-right.d-flex.flex-wrap.align-content-center.justify-content-center.card-btn-dark(:href="'/files/' + recording.fileName")
        b-icon(icon="cloud-download-fill", aria-hidden="true")
</template>

<script>
import { BIcon, BIconTrashFill, BIconCloudDownloadFill } from 'bootstrap-vue';

export default {
  name: 'LightboxCard',
  components: {
    BIcon,
    BIconTrashFill,
    BIconCloudDownloadFill,
  },
  props: {
    recording: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleErrorImg(event) {
      const darkmode = localStorage.getItem('theme') === 'dark';

      event.target.classList.remove('object-fit-cover');
      event.target.classList.add('object-fit-none');
      event.target.src = require(`@/assets/img/no_img${darkmode ? '_white' : ''}.png`);
    },
  },
};
</script>

<style scoped>
.card {
  font-family: Open Sans, sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  background-color: var(--secondary-bg-color);
  background-clip: border-box;
  border: 0;
  box-shadow: 0 0 2rem 0 rgb(136 152 170 / 18%);
  margin-bottom: 50px;
  border-bottom: 2px solid var(--third-bg-color);
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.5rem - 1px);
  border-top-right-radius: calc(0.5rem - 1px);
  border-bottom: 3px solid var(--primary-color);
}

.card-title {
  margin: 0;
  font-size: 1.3rem;
}

.text-muted {
  color: var(--secondary-font-color) !important;
}

.card-text {
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.7;
  color: var(--fourth-bg-color);
  word-break: break-all;
}

.card-btn {
  font-size: 0.8rem;
  position: relative;
  transition: all 0.15s ease;
  letter-spacing: 0.025em;
  text-transform: none;
  will-change: transform;
  background-color: var(--primary-color);
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  font-weight: 400;
  line-height: 1.5;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
  vertical-align: middle;
  color: #fff;
  border: 1px solid transparent;
  width: 35px;
  height: 35px;
  border-radius: 20px;
}

.card-btn-dark {
  background-color: #5a5a5a;
}

@media (hover: hover) {
  .card-btn:hover {
    background-color: var(--secondary-color);
  }

  .card-btn-dark:hover {
    background-color: #222222;
  }
}
</style>
