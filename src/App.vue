<template>
  <header class="bg-blue-600 text-white font-medium">
    <nav class="mx-auto container py-4 px-4 flex items-center">
      <router-link tag="strong" to="/" class="text-xl">demo-app</router-link>
      <div class="flex-1"></div>
      <router-link tag="div" to="/">Register</router-link>
      <router-link tag="div" to="/list" class="ml-12">List</router-link>
    </nav>
  </header>
  <main class="mt-6 py-2 px-4 mx-auto container">
    <router-view />
  </main>
</template>
