<script setup lang="ts">
import axios from 'axios';
const {data: user} = await axios.get("api/user")
</script>

<template>
  {{ user }}
  <p><strong>User Name:</strong> Daniel</p>
  <p><strong>User Email:</strong> test@test.com</p>
</template>
