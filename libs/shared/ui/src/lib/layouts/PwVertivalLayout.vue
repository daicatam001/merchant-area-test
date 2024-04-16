<template>
  <div class="pw-vertical-layout">
    <div class="pw-vertical-layout__header">
      <slot name="header"></slot>
    </div>
    <div class="pw-vertical-layout__body">
      <slot></slot>
    </div>
    <div class="pw-vertical-layout__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style>
.pw-vertical-layout {
    @apply h-full grid;
    grid-template-areas: "header"
        "body"
        "footer";
    grid-template-rows: auto 1fr auto;
}

.pw-vertical-layout__header {
    grid-area: header;
}

.pw-vertical-layout__body {
    grid-area: body;
}

.pw-vertical-layout__footer {
    grid-area: footer;
}
</style>
