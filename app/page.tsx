'use client';
import Link from 'next/link';


// Dummy tile data
const tileData = [
  {
    label: 'Pension Card',
    key: 'pension',
    accent: 'bg-blue-500',
    Component: () => <div className="text-center p-4">Pension Card Section</div>,
    href: '/home/pension',
  },
  {
    label: 'ID Card',
    key: 'id',
    accent: 'bg-green-500',
    Component: () => <div className="text-center p-4">ID Card Section</div>,
    href: '/home/identity',
  },
  {
    label: 'Dummy Tile 1',
    key: 'dummy1',
    accent: 'bg-gray-200',
    Component: () => <div className="text-center p-4">Training Card Section</div>,
    href: '/home/training',
  },
  {
    label: 'Notify Letter',
    key: 'notify',
    accent: 'bg-gray-200',
    Component: () => <div className="text-center p-4">Notify Letter Section</div>,
    href: '/home/notifyLetter/print',
  },
  {
    label: 'Medical Letter',
    key: 'medical',
    accent: 'bg-red-200',
    Component: () => <div className="text-center p-4">Medical Letter Section</div>,
    href: '/home/medicalLetter',
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tileData.map(({ label, key, accent, Component, href }) =>
          href ? (
            <Link
              href={href}
              key={key}
              className={`relative rounded-xl shadow-md ${accent} hover:shadow-lg transition duration-300 flex items-center justify-center min-h-[160px] cursor-pointer`}
            >
              <Component />
              <span className="absolute bottom-2 right-2 text-xs bg-white px-2 py-0.5 rounded shadow">
                {label}
              </span>
            </Link>
          ) : (
            <div
              key={key}
              className={`relative rounded-xl shadow-md ${accent} hover:shadow-lg transition duration-300 flex items-center justify-center min-h-[160px]`}
            >
              <Component />
              <span className="absolute bottom-2 right-2 text-xs bg-white px-2 py-0.5 rounded shadow">
                {label}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
