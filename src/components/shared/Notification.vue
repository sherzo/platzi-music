<template lang="pug">
  .container
    .colums
      column.is-5.is-offset-4
        .notification.is-danger
          slot(name="body") Algo anduve mal
</template>

<style lang="scss" scoped>
  .notification {
    margin: 10px;
  }
</style>