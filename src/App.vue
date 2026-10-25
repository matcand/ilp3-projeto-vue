<template>
  <div class="container">
    <header>
      <h1>Mini Projeto - ILP3</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/usuarios">Usuários</router-link>
      </nav>
    </header>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>
<style scoped>
.container { max-width: 900px; margin: 40px auto; font-family: Arial, sans-serif; }
nav { display: flex; gap: 15px; padding: 15px; background: #f4f4f4; margin-bottom: 20px; border-radius: 8px;}
.router-link-active { font-weight: bold; color: #1976d2; }
.content { padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
</style>