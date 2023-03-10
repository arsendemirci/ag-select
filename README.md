##  :star: ag-select

ag-select is a  select component, designed to be used in forms of vue3 projects.
\
&nbsp;
### :eyes: Overview

This project is actually a part of a vue3 component library  project that is under development right now.
ag-select is a custom component that takes advantage of many features of Vue3 and facilitates two way data binding with 
**v-model**. 
\
&nbsp;
### :clapper: Demo

You can check the [AG Select Demo Page](https://arsendemirci-ag-select.netlify.app/)  to see the examples in action. 
\
&nbsp;

### :gun: Getting Started

For ag-select to work correctly basically you need to provide options array and a placeholder. See the code example below:

```
<ag-select
   :options="["Ross", "Rachel", "Chandler", "Monica", "Joey", "Phoebe"]"
    placeholder="Select a Friend" v-model="friend">
</ag-select>
<div>
	Model Value : <span  class="value">{{  friend  }}</span>
</div>
<script>
export  default {
	data() {
		return { friend:'' };
	},
};
</script>
```
\
&nbsp;
### :bomb: Features

- Two way data binding with v-model capability
- Works fine with either array of objects or array of strings and numbers
- Polished UX with CSS transitions on all UI events
- Automatically positions option list according to space available above or below the select wrapper
- Optional search capabality
- Clear the state and model :heavy_multiplication_x: button.
\
&nbsp;
### :pill: Props

<table border="2">
	<thead>
		<tr>
			<td>Prop</td>
			<td>Type</td>
			<td>Default</td>
			<td>Description</td>
		</tr>
	</thead>
	<tbody>
		<tr>
	        <td>options</td><td>Array</td><td>[]</td><td>(<b>required</b>) Array of options to select from</td>
	    </tr>
	    <tr>
	        <td>read-text</td><td>String</td><td>empty</td><td>(<b>required if only</b>  options is array of objects)  name of the property from options object array to be considered as option text</td>
	    </tr>
	    <tr>
	        <td>read-value</td><td>String</td><td>empty</td><td>(<b>required if only</b>  options is array of objects)  name of the property from options object array to be considered as option value</td>
	    </tr>
	    <tr>
	        <td>placeholder</td><td>String</td><td>empty</td><td>(<b>optional</b>) text for the placeholder</td>
	    </tr>
	    <tr>
	        <td>search</td><td>Boolean</td><td>false</td><td>(<b>optional</b>) toggle the search functionality</td>
	    </tr>
	</tbody>
</table>
