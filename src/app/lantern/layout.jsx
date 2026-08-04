import './lantern.css';

export const metadata = {
  title: 'Mindglow | Lantern Meditation',
  description: 'Release your thoughts into a sky lantern.',
};

export default function LanternLayout({ children }) {
  return (
    <div className="lantern-wrapper h-[100svh] w-full overflow-hidden relative">
      {children}
    </div>
  );
}
