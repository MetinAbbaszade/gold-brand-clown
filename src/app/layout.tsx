import LayoutWrapper from '@/components/allPages/LayoutWrapper/LayoutWrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body style={{ margin: 0 }}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
