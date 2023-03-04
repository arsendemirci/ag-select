<template>
  <div class="wrapper">
    <div class="v-model">
      <span
        >V-Model Value: <b>{{ model }}</b></span
      >
      <span
        >V-Model Text: <b>{{ model }}</b></span
      >
    </div>
    <ag-select
      :options="lessonTypes"
      read-text="text"
      read-value="id"
      placeholder="Eğitim Tipi"
      :search="true"
      v-model="model"
    ></ag-select>
  </div>
</template>

<script>
import AgSelect from "components/AgSelect";
export default {
  name:"App",
  data() {
    return {
      model: 12,
      lessonTypes: [
        { id: 1, text: "VueJS" },
        { id: 2, text: "ReactJS" },
        { id: 3, text: "Angular" },
        { id: 4, text: "JavaScript" },
        { id: 5, text: "Go" },
        { id: 6, text: "Java" },
        { id: 7, text: "Python" },
        { id: 8, text: "ASP.NET" },
        { id: 9, text: "C#" },
        { id: 10, text: "Perl" },
        { id: 11, text: "Swift" },
        { id: 12, text: "TypeScript" },
        { id: 13, text: "PHP" },
        { id: 14, text: "Kotlin" },
        { id: 15, text: "Ruby" },
        { id: 16, text: "Rust" },
      ],
    };
  },
  components: {
    AgSelect,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  .v-model {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: flex-start;
    align-items: start;
    margin-bottom: 15px;
  }
}
</style>
