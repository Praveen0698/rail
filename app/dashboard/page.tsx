"use client";

import Link from "next/link";
import { useState } from "react";
import useAuthGuard from "@/hooks/useAuthGuard";
import { useRouter } from "next/navigation";

interface Tile {
  label: string;
  key: string;
  accent: string;
  href: string;
}

const sidebarOptions = [
  {
    key: "railway",
    label: "Indian Railway",
  },
  {
    key: "fci",
    label: "FCI",
  },
  {
    key: "defence",
    label: "Defence",
  },
];

const tileMap: Record<string, Tile[]> = {
  railway: [
    {
      label: "Pension Card",
      key: "pension",
      accent: "from-blue-500 to-blue-600",
      href: "/home/pension",
    },
    {
      label: "ID Card",
      key: "id",
      accent: "from-green-500 to-green-600",
      href: "/home/identity",
    },
    {
      label: "Training Card",
      key: "training",
      accent: "from-gray-500 to-gray-600",
      href: "/home/training",
    },
    {
      label: "Notify Letter",
      key: "notify",
      accent: "from-indigo-500 to-indigo-600",
      href: "/home/notifyLetter/print",
    },
    {
      label: "Medical Letter",
      key: "medical",
      accent: "from-red-500 to-red-600",
      href: "/home/medicalLetter",
    },
    {
      label: "Joining Letter",
      key: "joining",
      accent: "from-yellow-500 to-yellow-600",
      href: "/home/joiningLetter/print",
    },
    {
      label: "Reporting Letter",
      key: "reporting",
      accent: "from-emerald-500 to-emerald-600",
      href: "/home/reportingLetter/print",
    },
    {
      label: "Envelope",
      key: "envelop",
      accent: "from-cyan-500 to-cyan-600",
      href: "/home/envelop/print",
    },
    {
      label: "Admit Card",
      key: "admitCard",
      accent: "from-violet-500 to-violet-600",
      href: "/home/admitCard/print",
    },
    {
      label: "Service Book",
      key: "serviceBook",
      accent: "from-purple-500 to-purple-600",
      href: "/home/serviceBook/print",
    },
    {
      label: "Manual",
      key: "manual",
      accent: "from-amber-500 to-amber-600",
      href: "/home/manual/print",
    },
    {
      label: "Aadhar Card",
      key: "aadhar",
      accent: "from-amber-500 to-amber-600",
      href: "/home/aadhar",
    },
  ],

  fci: [
    {
      label: "FCI ID Card",
      key: "fci-id",
      accent: "from-orange-500 to-orange-600",
      href: "#",
    },
    {
      label: "FCI Joining Letter",
      key: "fci-joining",
      accent: "from-teal-500 to-teal-600",
      href: "#",
    },
    {
      label: "FCI Medical Letter",
      key: "fci-medical",
      accent: "from-pink-500 to-pink-600",
      href: "#",
    },
  ],

  defence: [
    {
      label: "Defence ID",
      key: "def-id",
      accent: "from-gray-700 to-black",
      href: "#",
    },
  ],
};

export default function Page() {
  const { isAuthorized, checking } = useAuthGuard();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("railway");

  const tiles = tileMap[activeCategory] || [];
  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.replace("/");
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Checking Authentication...</p>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-white shadow-lg border-r border-gray-200 p-6">
        <h2 className="text-xl font-bold mb-6">Departments</h2>

        <div className="space-y-3">
          {sidebarOptions.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveCategory(item.key)}
              className={`w-full text-left px-4 cursor-pointer py-3 rounded-lg transition font-medium
                ${
                  activeCategory === item.key
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold capitalize">
            {activeCategory === "railway"
              ? "Indian Railway"
              : activeCategory.toUpperCase()}
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiles.map(({ label, key, accent, href }) => (
            <Link
              href={href}
              key={key}
              className={`relative cursor-pointer rounded-2xl shadow-md hover:shadow-xl transition duration-300 
              bg-gradient-to-br ${accent} text-white p-8 min-h-[160px] flex items-center justify-center group`}
            >
              <span className="text-lg font-semibold group-hover:scale-105 transition">
                {label}
              </span>

              <span className="absolute bottom-4 right-4 text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur">
                Open →
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
