import React from 'react';
import Link from 'next/link';
import Container from '../../component/Container';

export const metadata = {
  title: 'Privacy Policy - Home+',
  description: 'Home+ Privacy Policy describing how we collect, use and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          This Privacy Policy explains how Home+ (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, discloses, and
          safeguards your information when you visit our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Information we collect</h2>
        <p className="mb-4">
          We may collect information you provide directly (for example, contact details you submit), information collected automatically
          (such as usage and analytics data), and information from third parties when you consent to such sharing.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">How we use your information</h2>
        <ul className="list-disc list-inside mb-4">
          <li>To provide, operate and maintain our services.</li>
          <li>To improve, personalize, and expand our website.</li>
          <li>To communicate with you, including for support and marketing (where permitted).</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Cookies and tracking</h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to track activity on our site and hold certain information. You can control
          cookie preferences through your browser settings.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Sharing and disclosure</h2>
        <p className="mb-4">
          We may share information with vendors, service providers, and where required by law. We do not sell personal information to third
          parties.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Your rights</h2>
        <p className="mb-4">
          Depending on your jurisdiction, you may have rights to access, correct, or delete your personal data, and to object to or restrict
          certain processing. Contact us to exercise these rights (see below).
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
        <p className="mb-6">
          If you have questions about this policy, contact us at{' '}
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
