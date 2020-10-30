<template>
  <div class="form-check-radio">
    <label :for="cbId" class="form-check-label">
      <input
        :id="cbId"
        v-model="model"
        type="radio"
        :disabled="disabled"
        :value="label"
      >
      <span class="form-check-sign">
        <slot />
      </span>
    </label>
  </div>
</template>
<script>
export default {
  name: 'BaseRadio',
  props: {
    label: [ String, Number ],
    disabled: [ Boolean, String ],
    value: [ String, Boolean ],
    inline: Boolean,
  },
  data () {
    return {
      cbId: '',
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      },
    },
    inlineClass () {
      if (this.inline)
        return 'radio-inline'

      return ''
    },
  },
  created () {
    this.cbId = Math.random().toString(16).slice(2)
  },
}
</script>
