import './globals.css';
import { notoSerif } from '@@/utils/font';
import Header from './_components/Header/index';
import Footer from './_components/Footer';

export const metadata = {
  title: 'NAKAG\'s DIARY',
  description: 'NAKAGのポートフォリオサイトです',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ja'>
      <body className={notoSerif.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
