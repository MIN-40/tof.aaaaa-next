import { CartProvider } from '../components/CartProvider';
import './globals.css';

export const metadata = {
  title: '톺아 | tof.aaaaa 액세서리 공식 스토어',
  description: '톺아(tof.aaaaa) 공식 온라인 스토어. 작은 장신구와 비즈 목걸이, 팔찌, 참 액세서리.',
  keywords: ['tof.aaaaa', '톺아', '비즈 목걸이', '비즈 팔찌', '핸드메이드 액세서리'],
  openGraph: {
    title: '톺아 | tof.aaaaa 액세서리 공식 스토어',
    description: '작은 장신구에 담긴 취향과 색깔을 천천히 톺아보는 브랜드.',
    url: 'https://min-40.github.io/tof.aaaaa/',
    images: ['/images/IMG_0397.jpeg'],
  },
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body><CartProvider>{children}</CartProvider></body>
    </html>
  );
}
