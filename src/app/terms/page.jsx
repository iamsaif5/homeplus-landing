import React from 'react';
import Link from 'next/link';
import Container from '../../component/Container';

export const metadata = {
  title: 'Terms of Service - Home+',
  description: 'Home+ Terms of Service — rules and conditions for using the Home+ website.',
};

export default function TermsPage() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <p className="mb-4">
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Home+ website. By using our site, you agree to
          these Terms. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Use of the site</h2>
        <p className="mb-4">
          You agree to use the site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use
          of the site.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual property</h2>
        <p className="mb-4">
          All content on the site is the property of Home+ or its licensors and is protected by intellectual property laws. You may not
          reproduce or redistribute our content without permission.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Disclaimers and limitation of liability</h2>
        <p className="mb-4">
          The site is provided &quot;as is&quot; without warranties of any kind. To the fullest extent permitted by law, Home+ is not liable
          for any indirect or consequential damages.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Modifications</h2>
        <p className="mb-4">
          We may modify these Terms from time to time. Continued use after changes constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
        <p className="mb-6">
          Questions about these Terms should be sent to{' '}
          <a className="underline" href="mailto:hello@myhomeplus.io">
            hello@myhomeplus.io
          </a>
          .
        </p>

        <p className="text-sm text-muted">Last updated: November 6, 2025</p>

        <div className="mt-8">
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </Container>
  );
}
