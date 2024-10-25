import { useUserStore } from '@/stores/user';
import { createRouter, createWebHistory } from 'vue-router';

// meta: { requiresAuth: true }, // 인증이 필요한 페이지
// meta: { requiresAdmin: true }, // 관리자 권한이 필요한 페이지
// meta: { guestOnly: true }, // 로그인한 사용자는 접근할 수 없는 페이지

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/MemberListView.vue'),
    },
    {
      path: '/stores',
      component: () => import('@/views/StoreListView.vue'),
    },
    {
      path: '/themes',
      component: () => import('@/views/ThemeListView.vue'),
    },
    {
      path: '/genres',
      component: () => import('@/views/GenreListView.vue'),
    },
    {
      path: '/reports',
      component: () => import('@/views/ReportListView.vue'),
    },

    {
      path: '/mypage',
      component: () => import('@/views/MyPageView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      component: () => import('@/views/LoginMainView.vue'),
    },
    {
      path: '/register',
      component: () => import('@/views/RegisterMainView.vue'),
    },
  ],
});

// 라우터 가드 설정
routes.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  // 인증이 필요한 페이지인지 확인
  if (to.meta.requiresAuth && !userStore.accessToken) {
    // 인증되지 않은 사용자일 경우 로그인 페이지로 리다이렉트
    next('/login');
  }

  // 로그인이 완료된 유저라면
  if (to.meta.guestOnly && userStore.accessToken) {
    next('/');
  }

  // 관리자 권한이 필요한 페이지인지 확인
  else if (to.meta.requiresAdmin && (!userStore.accessToken || !userStore.isAdmin)) {
    // 관리자 권한이 없을 경우 접근 불가
    next('/');
  } else {
    next();
  }
});

export default routes;
