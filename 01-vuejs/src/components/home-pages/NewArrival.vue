<script setup lang="ts">
import { ROUTERS } from '@/shares/config/router';
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectTo(route: string) {
  router.push(route);
}
</script>

<template>
  <div class="new-arrival">
    <p>New Arrival</p>
    <h2>Discover Our New Collection</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
    <button @click="redirectTo(ROUTERS.SHOP)">BUY NOW</button>
  </div>
</template>

<style scoped>
.new-arrival {
  position: absolute;
  top: 55%; 
  right: 4%;
  transform: translateY(-50%);
  background-color: rgba(255, 243, 227, 1);
  padding: 2rem; 
  color: rgba(51, 51, 51, 1);
  font-family: 'Poppins', sans-serif;
  width: 42vw;
  height: 60vh;
  border-radius: 10px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.new-arrival h2 {
  margin: 0 0 1rem;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  color: rgba(184, 142, 47, 1);
  justify-self: unset;
}

.new-arrival p:first-of-type {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgba(51, 51, 51, 1);
  letter-spacing: 3px;
  justify-self: unset;
}

.new-arrival p {
  margin: 0 0 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: rgba(51, 51, 51, 1);
  justify-self: unset;
}

.new-arrival button {
  width: 100%;
  max-width: 200px;
  height: 50px;
  padding: 1rem;
  background-color: rgba(184, 142, 47, 1);
  color: rgba(255, 255, 255, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  justify-self: unset;
}

.new-arrival button:hover {
  background-color: rgba(255, 255, 255, 1);
  color: rgba(184, 142, 47, 1);
  border: 2px solid rgba(184, 142, 47, 1);
}

@media (max-width: 1024px) {
  .new-arrival {
    width: 50vw;
    height: 40vh;
    padding: 1.5rem;
  }

  .new-arrival h2 {
    font-size: 2rem;
  }

  .new-arrival p {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .new-arrival {
    width: 50vw;
    height: 40vh;
    padding: 1rem;
  }

  .new-arrival h2 {
    font-size: 1.8rem;
  }

  .new-arrival p {
    font-size: 0.85rem;
  }

  .new-arrival button {
    width: 100%;
    height: 45px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .new-arrival {
    width: 60vw;
    height: 20vh;
    padding: 1rem;
  }

  .new-arrival h2 {
    font-size: 1.5rem;
  }

  .new-arrival p {
    font-size: 0.75rem;
  }

  .new-arrival button {
    font-size: 0.8rem;
    height: 40px;
  }
}
</style>
