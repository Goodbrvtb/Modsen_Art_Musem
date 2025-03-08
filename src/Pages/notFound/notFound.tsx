import React from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Title } from '@/components/title';

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
