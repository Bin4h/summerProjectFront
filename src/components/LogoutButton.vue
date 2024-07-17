<template>
    <button class="logout-button" @click="logout">Logout</button>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem('isAuthorised');
        this.$router.push('/login');
      }
    }
  };
  </script>
  
  <style>
  .logout-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #f44336;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .logout-button:hover {
    background-color: #d32f2f;
  }
  </style>