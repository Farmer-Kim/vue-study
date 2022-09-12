<template>
<v-container>
</v-container>
</template>

<script>
export default {
  data() {
    return {
      todoList: []
    }
  },
  methods: {
    listAdd(memo) {
      console.log("받았어!")
      this.todoList.push({ memo: memo, status: "created" })
    }
  }
}
</script>