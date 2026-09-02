// 실제로는 아무것도 캐싱하지 않는 최소 서비스워커입니다.
// 이 파일이 존재해야 Android Chrome이 이 사이트를 "설치 가능한 앱(PWA)"으로 인식합니다.
// 채팅/화상통화는 실시간 P2P라 오프라인 캐싱이 의미가 없어서 fetch를 그대로 통과시킵니다.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
  // 아무 것도 가로채지 않고 네트워크 요청을 그대로 통과시킴
});
