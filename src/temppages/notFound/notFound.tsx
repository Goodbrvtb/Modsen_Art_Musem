import { Footer } from '@/tempcomponents/tempfooter';
import { Header } from '@/tempcomponents/tempheader';
import { Title } from '@/tempcomponents/title';

export function NotFound() {
  return (
    <div>
      <Header />
      <Title
        title={
          <>
            Page not found
            <br />
            <span>404</span>
          </>
        }
      />
      <Footer />
    </div>
  );
}
