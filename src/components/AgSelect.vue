<script setup>
import { reactive, computed, defineProps, ref, defineEmits, watch } from "vue";
const props = defineProps([
  "options",
  "placeholder",
  "readValue",
  "readText",
  "search",
  "value",
  "modelValue",
]);
const searchInput = ref(null);
const emit = defineEmits(["update:modelValue"]);

const state = reactive({
  selectedOption: null,
  openList: false,
  immediateRan: false,
  searchVal: "",
  modelPrimitive: false,
  isPrimitive: computed(() => {
    return (
      props.options &&
      props.options[0] &&
      !(
        typeof props.options[0] == "object" ||
        typeof props.options[0] == "function"
      )
    );
  }),
});
const selectedText = computed(() => {
  return state.selectedOption ? state.selectedOption.text : props.placeholder;
});
const optionsComp = computed(() => {
  let arr = props.options;
  if (arr.length) {
    arr = arr.map((item) => {
      return {
        value: state.isPrimitive ? item : item[props.readValue],
        text: state.isPrimitive ? item : item[props.readText],
      };
    });
    if (props.search && state.searchVal) {
      return arr.filter((item) =>
        item.text
          .toLocaleLowerCase("tr-TR")
          .includes(state.searchVal.toLocaleLowerCase("tr-TR"))
      );
    } else {
      return arr;
    }
  } else {
    return [];
  }
});
const modelPrimitive = computed(() => {
  return !(
    typeof props.modelValue == "object" || typeof props.modelValue == "function"
  );
});
function onSelectOption(opt) {
  state.selectedOption = { value: opt.value, text: opt.text };
  emit(
    "update:modelValue",
    modelPrimitive.value ? state.selectedOption.value : state.selectedOption
  );
  state.openList = false;
}
const onEscape = (e) => {
  if (
    !e.relatedTarget ||
    !e.relatedTarget.type == "input" ||
    !e.relatedTarget.id == "ag-select-search"
  ) {
    state.openList = false;
  }
};
function isSelected(opt) {
  return state.selectedOption
    ? state.selectedOption.value == (state.isPrimitive ? opt : opt.value)
    : false;
}
const onWrapperClick = (e) => {
  if (e.target !== e.currentTarget) return;
  else {
    state.openList = !state.openList;
    if (state.openList && props.search) {
      searchInput.value.focus();
    }
  }
};
const onSearchInput = (e) => {
  state.searchVal = e.target.value;
};
const onClear = () => {
  state.selectedOption = null;
};
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      console.log("optionsComp", optionsComp, newValue);
      let opt;
      if (newValue.value) {
        opt = optionsComp.value.find((x) => x.value == newValue.value);
      } else {
        opt = optionsComp.value.find((x) => x.value == newValue);
      }

      if (opt) {
        console.log("buraya mı firmiyor");
        state.selectedOption = { value: opt.value, text: opt.text };
      } else {
        state.selectedOption = null;
      }
    } else {
      state.selectedOption = null;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div
    class="select-wrapper"
    :class="{ open: state.openList }"
    @click="onWrapperClick"
    tabindex="0"
    @blur="onEscape"
  >
    <div class="current" @click="onWrapperClick">
      <span
        :class="{ 'is-selected': !!state.selectedOption }"
        @click="onWrapperClick"
        >{{ selectedText }}</span
      ><i @click.stop="onClear" class="clear" v-if="state.selectedOption"
        >&times;</i
      >
    </div>
    <div class="list-wrapper">
      <div v-if="props.search" class="search">
        <input
          @input="onSearchInput"
          type="text"
          id="ag-select-search"
          ref="searchInput"
          placeholder="Search"
          @blur="onEscape"
        />
      </div>
      <ul class="list" :class="{ 'search-list': props.search }">
        <!-- <li v-if="props.placeholder" class="option disabled">
        {{ props.placeholder }}
      </li> -->
        <li
          v-for="(opt, i) in optionsComp"
          :class="{ selected: isSelected(opt) }"
          :key="i + 1"
          class="option"
          @click.stop="onSelectOption(opt)"
        >
          {{ opt["text"] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.select-wrapper {
  width: 240px;
  -webkit-tap-highlight-color: transparent;
  background-color: #fff;
  border-radius: 5px;
  border: solid 1px #c3c3c3;
  box-sizing: border-box;
  clear: both;
  cursor: pointer;
  display: block;
  float: left;
  font-family: inherit;
  font-size: 14px;
  font-weight: normal;
  height: 42px;
  line-height: 40px;
  outline: none;
  padding-left: 15px;
  padding-right: 25px;
  position: relative;
  text-align: left !important;
  transition: all 0.24s ease-in-out;
  user-select: none;
  white-space: nowrap;

  .current {
    display: flex;
    flex-wrap: nowrap;
    gap: 2px;
    align-items: center;
    justify-content: space-between;
    .is-selected {
      font-weight: bold;
    }
    .clear {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      cursor: pointer;
      color: #999;
      font-size: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      transition: all 0.21s cubic-bezier(0.5, 0, 0, 1.25);
      &:hover {
        color: white;
        background: #7c7c7c;
      }
    }
  }

  &:after {
    border-bottom: 2px solid #999;
    border-right: 2px solid #999;
    content: "";
    display: block;
    height: 5px;
    margin-top: -4px;
    /*pointer-events: none;*/
    position: absolute;
    right: 12px;
    top: 50%;
    -webkit-transform-origin: 66% 66%;
    -ms-transform-origin: 66% 66%;
    transform-origin: 66% 66%;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
    width: 5px;
  }

  &.open {
    border-color: #ff8b0dd1;
    box-shadow: 0 0 10px #ff8b0d73;

    .list-wrapper {
      opacity: 1;
      pointer-events: auto;
      transform: scale(1) translateY(0);
    }

    &:after {
      transform: rotate(-135deg);
    }
  }

  .list-wrapper {
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgb(68 68 68 / 11%);
    box-sizing: border-box;
    margin-top: 4px;
    opacity: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
    top: 100%;
    left: 0;
    transform-origin: 50% 0;
    transform: scale(0.75) translateY(-21px);
    opacity: 0.15s ease-out;
    transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
    z-index: 9;
    color: #ff8b0da1;
    -webkit-text-fill-color: black;
    .search {
      display: flex;
      padding: 10px;
      input {
        padding: 3px 6px;
        width: 100%;
        border: none;
        border-radius: 4px;
        height: 25px;
        box-shadow: 0 0 2px rgba(255, 138, 13, 0.71);
        outline: none;
        transition: all 0.22s cubic-bezier(0.5, 0, 0, 1.25);
        &:focus {
          box-shadow: 0 0 5px rgb(255 139 13);
        }
      }
    }
  }
  .list {
    padding: 0;
    overflow: auto;
    max-height: 300px;
    &.search-list {
      margin: 0 0 5px 0;
    }

    &:hover {
      color: #ff8b0d;
    }

    &::-webkit-scrollbar {
      width: 18px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
      border: 5px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 9999px;
      box-shadow: inset 0 0 0 10px;
    }
  }

  .option {
    cursor: pointer;
    font-weight: 400;
    line-height: 40px;
    list-style: none;
    min-height: 40px;
    outline: none;
    padding-left: 5px;
    padding-right: 29px;
    text-align: left;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    border-radius: 5px;

    &:not(.disabled):not(.selected):hover {
      background-color: #ffb945;
      padding-left: 13px;
      -webkit-text-fill-color: #fff;
    }

    &.disabled {
      background-color: transparent;
      color: #999;
      cursor: default;
      -webkit-text-fill-color: #999;
    }

    &.selected {
      font-weight: bold;
      padding-left: 13px;
      background-color: #f6f6f6;
    }

    &:after {
      -webkit-transform: rotate(-135deg);
      -ms-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }
  }
}
</style>
