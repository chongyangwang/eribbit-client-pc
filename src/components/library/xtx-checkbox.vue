<!--
 * @Description: xtx-checkbox
 * @Author: cy2020
 * @Date: 2022-03-02 11:18:02
 * @LastEditTime: 2022-03-04 11:14:17
-->
<template>
    <div class="xtx-checkbox" @click="changeChecked()">
        <i v-if="checked" class="iconfont icon-checked"></i>
        <i v-else class="iconfont icon-unchecked"></i>
        <span v-if="$slots.default"><slot /></span>
    </div >
</template>
<script>
import { useVModel } from '@vueuse/core'
export default {
  name: 'XtxCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const checked = useVModel(props, 'modelValue', emit)
    const changeChecked = () => {
      const newVal = !checked.value
      // console.log(newVal)
      checked.value = newVal // 触发update:modelValue
      // console.log(checked.value)
      emit('change', newVal)
    }
    return { checked, changeChecked }
  }
}
</script>
<style scoped lang="less">
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;
  .icon-checked {
    color: @xtxColor;
    ~ span {
      color: @xtxColor;
    }
  }
  i {
    position: relative;
    top: 1px;
  }
  span {
    margin-left: 2px;
  }
}
</style>
