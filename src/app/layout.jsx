import './globals.css';
import { notoSans } from '../../utils/font';
import { notoSerif } from '../../utils/font';
import { cinzel } from '../../utils/font';
import Header from '@/app/_components/Header/index';

export const metadata = {
  title: 'Keroの冒険日誌',
  description: 'Keroのポートフォリオサイトです',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ja'>
      <body className={notoSerif.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
