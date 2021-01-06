<template>
  <div>
    <a-switch default-checked @change="onChange" />

    <!-- <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch> -->
  </div>
</template>

<script>
// import { Switch } from 'element-ui';
// import Switch from 'ant-design-vue/lib/switch';
// import 'ant-design-vue/lib/switch/style';
import PropTypes from '@luban-h5/plugin-common-props';
export default {
  name: 'RCCard',
  components: {
    // elSwitch: Switch
  },
  props: {
    text: PropTypes.string(),
  },
  data() {
    return {
      value: true
    };
  },
  methods: {
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
  },
};
</script>

<style lang='scss'>
</style>
