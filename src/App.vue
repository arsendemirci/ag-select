<template>
  <div class="wrapper">
    <header>
      <h1>Ag Select</h1>
      <h3>vue3 select component</h3>
    </header>
    <div>
      <h2>Primitive model example</h2>
      <p>
        You can output a primitive value while your list is still with key and
        values as in the example below:
      </p>
      <ag-select
        :options="languages"
        read-text="text"
        read-value="id"
        placeholder="Select Language"
        v-model="model1"
      ></ag-select>
      <div class="v-model">
        Model Value : <span class="value">{{ model1 }}</span>
      </div>
    </div>
    <div>
      <h2>Object model example</h2>
      <p>
        If you need both key and value as an object binded to the component
        check this example:
      </p>
      <ag-select
        :options="languages"
        read-text="text"
        read-value="id"
        placeholder="Select Language"
        v-model="model2"
      ></ag-select>
      <div class="v-model">
        Model Value : <span class="value">{{ model2 }}</span>
      </div>
    </div>
    <div>
      <h2>Select with search</h2>
      <p>
        Search functionality is optional you can enable it by just adding
        <b>search</b> attribute, see example below:
      </p>
      <ag-select
        :options="languages"
        read-text="text"
        read-value="id"
        placeholder="Select Language"
        search
        v-model="model3"
      ></ag-select>
      <div class="v-model">
        Model Value : <span class="value">{{ model3 }}</span>
      </div>
    </div>
    <div>
      <h2>Select from array of strings</h2>
      <p>
        You can populate the select list with array of primitives instead of
        objects, your model output will be primitive automatically.
      </p>
      <ag-select
        :options="friends"
        placeholder="Select Friend"
        v-model="model4"
      ></ag-select>
      <div class="v-model">
        Model Value : <span class="value">{{ model4 }}</span>
      </div>
    </div>
    <div>
      <h2>Select With Custom Template</h2>
      <p>
        you can use <b>option</b> slot to customize the select item with your
        own template, see the example:
      </p>
      <ag-select
        :options="languages"
        read-value="id"
        read-text="text"
        placeholder="Select Language"
        v-model="model5"
        ><template #option="{ value, text }">
          <div class="option">
            <div class="option-value">{{ value }}</div>
            <div class="option-text">{{ text }}</div>
          </div>
        </template>
      </ag-select>
      <div class="v-model">
        Model Value : <span class="value">{{ model5 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import AgSelect from "components/AgSelect";
export default {
  name: "App",
  data() {
    return {
      model1: 12,
      model2: { value: 1, text: "VueJS" },
      model3: { value: 3, text: "Angular" },
      model4: "",
      model5: null,
      languages: [
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
      friends: ["Ross", "Rachel", "Chandler", "Monica", "Joey", "Phoebe"],
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
  display: flex;
  gap: 35px;
  font-size: large;
  flex-direction: column;
  padding: 0 150px 100px 150px;
  background: #f7b94733;
  align-items: center;
  header {
    position: fixed;
    width: 100%;
    padding-left: 150px;
    color: #353535;
    z-index: 9;
    h1,
    h3 {
      text-shadow: 1px 1px 3px rgb(255, 255, 255);
    }
    h1 {
      margin: 10px 0;
    }
    h3 {
      margin: 0;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 10em;
      z-index: -1;
      transform: skewY(-3.5deg);
      background: #ffd345;
      border-bottom: 0.2em solid rgb(0 0 0 / 67%);
      box-shadow: 0 5px 15px #80808087;
    }
  }
  > div {
    &:first-of-type {
      margin-top: 150px;
    }
    padding: 15px 20px;
    flex-direction: column;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(190, 190, 190, 0.44);
    display: flex;
    gap: 20px;
    background: floralwhite;
    width: 100%;
    max-width: 1000px;
    .v-model {
      .value {
        font-weight: bolder;
        font-size: large;
      }
    }

    .option {
      display: flex;

      &:hover {
        .option-value {
          border-color: white;
          border-width: 4px;
        }
      }
      &-value {
        padding-right: 10px;
        border-right: 1px solid #f7b947b0;
        transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25);
      }
      &-text {
        padding-left: 10px;
      }
    }
  }
}
</style>
