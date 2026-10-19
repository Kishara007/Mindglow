import './lantern.css';

export const metadata = {
  title: 'Sky Lantern Meditation | Mindglow - Interactive Mindful Thought Release',
  description: 'Release your worries with our 60-second interactive 3D sky lantern meditation. Type your thoughts, watch them drift into the night sky, and restore inner peace and mental stillness.',
  keywords: [
    'sky lantern meditation',
    'interactive meditation',
    'thought release meditation',
    'mindfulness tool',
    'online meditation',
    '60 second meditation',
    'anxiety relief interactive',
    'let go of worries',
    'mindglow lantern',
  ],
  alternates: {
    canonical: 'https://www.mindglow.online/lantern',
  },
  openGraph: {
    title: 'Sky Lantern Meditation | Mindglow',
    description: 'Release your worries with our 60-second interactive 3D sky lantern meditation. Type your thoughts, watch them drift into the night sky, and restore inner peace.',
    url: 'https://www.mindglow.online/lantern',
    siteName: 'Mindglow',
    images: [
      {
        url: 'https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1785754353/improve_same_image_qulity_2K_202608031542_uisrsf.jpg',
        width: 1200,
        height: 630,
        alt: 'Mindglow Interactive Sky Lantern Meditation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sky Lantern Meditation | Mindglow',
    description: 'Release your worries with our 60-second interactive 3D sky lantern meditation. A quiet digital space for mental stillness.',
    images: ['https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1785754353/improve_same_image_qulity_2K_202608031542_uisrsf.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const lanternJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://www.mindglow.online/lantern/#webapp',
      name: 'Mindglow Sky Lantern Meditation',
      url: 'https://www.mindglow.online/lantern',
      description: 'An interactive 60-second 3D sky lantern meditation that helps you externalize, visualize, and release troubling thoughts into a serene night sky.',
      applicationCategory: 'HealthAndFitnessApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript and WebGL capable browser',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      creator: {
        '@type': 'Organization',
        name: 'Mindglow',
        url: 'https://www.mindglow.online',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.mindglow.online/lantern/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.mindglow.online',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Sky Lantern Meditation',
          item: 'https://www.mindglow.online/lantern',
        },
      ],
    },
    {
      '@type': 'HowTo',
      '@id': 'https://www.mindglow.online/lantern/#howto',
      name: 'How to Practice 60-Second Sky Lantern Meditation',
      description: 'A guided mindfulness exercise to externalize stress and release negative thoughts into the cosmos.',
      totalTime: 'PT1M',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Type your troubling thought',
          text: 'Reflect on what is currently troubling you or creating cognitive tension, and write it in the prompt.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Seal it into the sky lantern',
          text: 'Press Done or hit Enter to watch your thought be absorbed into the core of the glowing paper lantern.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: '60 seconds of mindful breathing',
          text: 'Breathe in sync with the floating lantern as it ascends into deep space, shrinking your worry until it becomes insignificant.',
        },
      ],
    },
  ],
};

export default function LanternLayout({ children }) {
  return (
    <div className="lantern-wrapper h-[100svh] w-full overflow-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lanternJsonLd) }}
      />

      {/* Semantic SEO and accessibility layer for search engine crawlers and screen readers */}
      <header className="sr-only">
        <h1>Sky Lantern Meditation — Mindglow Interactive Mindful Thought Release</h1>
        <p>An ad-free, interactive 60-second digital sanctuary for mindfulness, stress relief, and cognitive defusion.</p>
      </header>

      <article className="sr-only">
        <h2>How the Sky Lantern Meditation Works</h2>
        <p>
          The Sky Lantern Meditation is an interactive visualization tool designed to help you practice cognitive defusion—the psychological technique of stepping back from repetitive or intrusive thoughts.
        </p>
        <ol>
          <li>
            <strong>Identify your worry:</strong> Acknowledge what is weighing on your mind and type it into the lantern.
          </li>
          <li>
            <strong>Externalize and release:</strong> Watch as your thought is drawn into the lantern&apos;s warm flame, separating the thought from your self-identity.
          </li>
          <li>
            <strong>Mindful breathwork:</strong> Spend 60 seconds following the lantern as it drifts gently upward through a calm night sky, observing as your worry shrinks into a faint speck in the vast expanse of the cosmos.
          </li>
        </ol>
        <h2>Psychological Benefits of Interactive Meditation</h2>
        <p>
          Visualizing worries drifting away activates the parasympathetic nervous system, lowers stress, and reinforces that temporary thoughts do not define your reality.
        </p>
      </article>

      <noscript>
        <div style={{ padding: '2rem', textAlign: 'center', color: '#ffffff', background: '#030014', minHeight: '100vh' }}>
          <h1>Mindglow Sky Lantern Meditation</h1>
          <p>Please enable JavaScript to experience the full interactive 3D Sky Lantern meditation session.</p>
          <p>This 60-second mindfulness experience helps you release racing thoughts, calm anxiety, and cultivate mental stillness through gentle visualization.</p>
          <a href="https://www.mindglow.online" style={{ color: '#b794f6', textDecoration: 'underline' }}>Return to Mindglow Home</a>
        </div>
      </noscript>

      {children}
    </div>
  );
}
