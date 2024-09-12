import './globals.css';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import { notoSerif } from '@/font';

export const metadata = {
  title: "NAKAG's DIARY",
  description: 'NAKAGのポートフォリオサイトです',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ja'>
      <body className={notoSerif.className}>
        <Header />
        <main className={notoSerif.className}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
