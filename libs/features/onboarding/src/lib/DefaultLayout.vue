<template>
  <div class="min-h-screen p-8 flex flex-col">
    <div class="w-full max-w-[1400px] grow mx-auto py-6 px-10 flex gap-10 items-stretch"
      :style="{ boxShadow: '0px 2px 8px #DDD' }">
      <div class="w-[200px] shrink-0">
        <slot name="progressbar"></slot>
      </div>
      <div class="w-[1px] bg-[#EDEDED]"></div>
      <div class="grow">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
