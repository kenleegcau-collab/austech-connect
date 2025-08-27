import Head from 'next/head';
import LeadForm from '../components/LeadForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Austechconnect — AI Business Visibility</title>
        <meta name="description" content="Be visible in AI zero-click searches. One-time setup $247 AUD." />
        <script src="https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY"></script>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Example Business",
            "description": "Be visible in AI zero-click searches. One-time setup $247 AUD.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Seaside Ave",
              "addressLocality": "Southport",
              "addressRegion": "QLD",
              "postalCode": "4215",
              "addressCountry": "AU"
            },
            "telephone": "+61 7 5555 5555",
            "url": "https://austechconnect.com",
            "openingHours": ["Mo-Fr 11:00-21:00","Sa-Su 10:00-22:00"]
          }
          `}
        </script>
      </Head>

      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Be the venue AI actually recommends</h1>
        <p className="text-lg md:text-xl mb-6">Win zero-click searches. We structure your site so ChatGPT and other AIs can read it — accurately and often. One-time setup: $247 AUD.</p>
        <a href="#lead-form" className="bg-white text-blue-600 font-bold py-3 px-6 rounded hover:bg-gray-100 mr-3">Get Listed Now</a>
        <a href="#how-it-works" className="bg-blue-800 text-white font-bold py-3 px-6 rounded hover:bg-blue-700">How it Works</a>
      </header>

      <main className="py-16 space-y-16">
        <section id="how-it-works" className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">How it Works</h2>
          <ol className="list-decimal list-inside space-y-3 text-lg">
            <li>We structure your website for AI visibility.</li>
            <li>Add the JSON and schema files for your business.</li>
            <li>Your business shows up more consistently in AI queries.</li>
          </ol>
        </section>

        <section id="about-us" className="bg-gray-50 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">About Austechconnect</h2>
            <p className="text-lg">Austechconnect helps businesses appear in AI-driven zero-click searches. Our one-time setup ensures your services, products, and contact details are structured for AI to read — increasing visibility and potential leads immediately.</p>
          </div>
        </section>

        <section id="form-section">
          <LeadForm />
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-8 text-center">
        <p>&copy; 2025 Austechconnect. All rights reserved.</p>
      </footer>
    </>
  );
}
