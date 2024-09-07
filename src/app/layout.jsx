import './globals.css';
import { notoSerif } from '@@/utils/font';
import Footer from './_components/Footer';
import Header from './_components/Header/index';

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
