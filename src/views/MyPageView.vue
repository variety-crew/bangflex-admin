<template>
  <PageLayout title="마이페이지">
    <div v-if="userInfo"></div>
    <div v-else></div>
  </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/layouts/PageLayout.vue';
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';

const baseServerUrl = `${import.meta.env.VITE_SERVER_URL}`;

const userStore = useUserStore();

const userInfo = ref({});
const userReport = ref({});
const reviews = ref([]);
const posts = ref([]);
const comments = ref([]);
const themes = ref([]);

const responsiveOptions = ref([
  {
    breakpoint: '1024px', // 화면 너비가 1024px 이하일 때
    numVisible: 3, // 보이는 항목 수
    numScroll: 1, // 스크롤할 항목 수
  },
  {
    breakpoint: '768px', // 화면 너비가 768px 이하일 때
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '560px', // 화면 너비가 560px 이하일 때
    numVisible: 1,
    numScroll: 1,
  },
]);

onMounted(async () => {
  const token = userStore.accessToken;
  if (token) {
    try {
      // 사용자 정보 조회
    } catch (error) {
      console.error('Failed to fetch user info:', error);
    }
  } else {
    console.log('User is not authenticated.');
  }
});
</script>

<style scoped>
.user-info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.report-section {
  margin-top: 30px;
}

.review-section {
  margin-top: 80px;
}

.comment-section {
  margin-top: 80px;
}

.post-section {
  margin-top: 80px;
}

.theme-section {
  margin-top: 50px;
}
</style>
