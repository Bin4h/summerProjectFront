<template>
  <div class="auth-container">
    <div class="auth-form">
      <h2>{{ isLogin ? 'Вход' : 'Регистрация' }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Логин</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Пароль</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-actions">
          <button type="submit">{{ isLogin ? 'Вход' : 'Регистрация' }}</button>
          <button type="button" @click="toggleMode">{{ isLogin ? 'Переключиться на Регистрацию' : 'Переключиться на Вход' }}</button>
        </div>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import router from '@/router';

export default {
  setup() {
    const isLogin = ref(true);
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const toggleMode = () => {
      isLogin.value = !isLogin.value;
      errorMessage.value = '';
    };

    const handleSubmit = async () => {
      if (isLogin.value) {
        try {
          const response = await fetch(`https://localhost:7103/api/User/authoriseUser/${username.value}/${password.value}`);
          const data = await response.json();
          if (data) {
            localStorage.setItem('isAuthorised', 'true');
            router.push('/');
          } else {
            errorMessage.value = 'Ошибка авторизации. Проверьте логин и пароль.';
          }
        } catch (error) {
          errorMessage.value = 'Ошибка при выполнении запроса. Пожалуйста, попробуйте позже.';
        }
      } else {
        try {
          const response = await fetch(`https://localhost:7103/api/User/addUser/${username.value}/${password.value}`);
          console.log(response);
          localStorage.setItem('isAuthorised', 'true');
          router.push('/');
        } catch (error) {
          errorMessage.value = 'Ошибка при выполнении запроса. Пожалуйста, попробуйте позже.';
        }
      }
    };

    return {
      isLogin,
      username,
      password,
      errorMessage,
      toggleMode,
      handleSubmit,
    };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #fff; 
}

.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff; 
}

.auth-form {
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.auth-form h2 {
  margin-bottom: 16px;
  color: #333;
}

.form-group {
  margin-bottom: 16px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #666;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.form-actions button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-actions button:hover {
  background-color: #0056b3;
}

.form-actions button[type="button"] {
  background-color: #6c757d;
}

.form-actions button[type="button"]:hover {
  background-color: #5a6268;
}

.error-message {
  color: #ff0000;
  margin-top: 16px;
}
</style>
