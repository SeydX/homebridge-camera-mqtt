<template lang="pug">
.w-100.h-100
  .d-flex.flex-wrap.justify-content-center.align-content-center.position-absolute-fullsize(v-if="loading")
    b-spinner.text-color-primary
  transition-group(name="fade", mode="out-in", v-if="loading")
  transition-group(name="fade", mode="out-in", v-else)
    .d-flex.flex-wrap.justify-content-between(key="loaded")
      .col-12(data-aos="fade-up" data-aos-duration="1000" v-if="checkLevel('settings:camview:edit')")
        h5 {{ $t("camview") }}
        div.mt-4
          .settings-box.container
            .row
              .col-12.d-flex.flex-wrap.align-content-center {{ $t("snapshot_timer") }}
              .col-12.d-flex.flex-wrap.align-content-center.justify-content-end.mt-3
                b-form-select(
                  v-model="camview.refreshTimer"
                  :options="[10, 20, 30, 40, 50, 60]"
                )
      .col-12.mt-5(data-aos="fade-up" data-aos-duration="1000" v-if="cameras.length && checkLevel(['settings:camview:edit', 'settings:cameras:edit'])")
        h5 {{ $t("favourites") }}
        div.mb-5.mt-4(v-for="camera in cameras" :key="camera.name" data-aos="fade-up" data-aos-duration="1000")
          .settings-box-header {{ camera.name }}
          .settings-box.container.no-radius-top
            .row
              .col-8.d-flex.flex-wrap.align-content-center {{ $t("favourite") }}
              .col-4.d-flex.flex-wrap.align-content-center.justify-content-end
                toggle-button(
                  v-model="camera.camview.favourite",
                  color="var(--primary-color) !important",
                  :height="30",
                  :sync="true"
                )
            hr
            .row
              .col-8.d-flex.flex-wrap.align-content-center {{ $t("livestream") }}
              .col-4.d-flex.flex-wrap.align-content-center.justify-content-end
                toggle-button(
                  v-model="camera.camview.live",
                  color="var(--primary-color) !important",
                  :height="30",
                  :sync="true"
                )
</template>

<script>
import { ToggleButton } from 'vue-js-toggle-button';

import { getSetting, changeSetting } from '@/api/settings.api';

export default {
  name: 'SettingsCamview',
  components: {
    ToggleButton,
  },
  data() {
    return {
      cameras: [],
      camview: {},
      camviewTimer: null,
      loading: true,
    };
  },
  watch: {
    cameras: {
      async handler(newValue) {
        if (!this.loading) {
          if (this.camviewTimer) {
            clearTimeout(this.camviewTimer);
            this.camviewTimer = null;
          }

          this.camviewTimer = setTimeout(async () => {
            try {
              await changeSetting('cameras', newValue, '?stopStream=true');
            } catch (error) {
              this.$toast.error(error.message);
            }
          }, 1500);
        }
      },
      deep: true,
    },
    camview: {
      async handler(newValue) {
        if (!this.loading) {
          try {
            await changeSetting('camview', newValue, '?stopStream=true');
          } catch (error) {
            this.$toast.error(error.message);
          }
        }
      },
      deep: true,
    },
  },
  async created() {
    try {
      if (this.checkLevel('settings:camview:access')) {
        const camview = await getSetting('camview');
        this.camview = camview.data;
      }

      if (this.checkLevel('settings:cameras:access')) {
        const cameras = await getSetting('cameras');
        this.cameras = cameras.data;
      }

      this.loading = false;
    } catch (err) {
      this.$toast.error(err.message);
    }
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
