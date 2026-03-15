import { Download } from "lucide-react";

export default function CVDownload() {
  return (
    <div className="flex justify-end gap-4">
      <a
        href="/cv-en.pdf"
        download
        className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-black px-6 py-3 rounded-lg hover:bg-gray-700 transition"
      >
        <Download size={18} />
        CV English
      </a>

      <a
        href="/cv-fr.pdf"
        download
        className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-black px-6 py-3 rounded-lg hover:bg-gray-700 transition"
      >
        <Download size={18} />
        CV Français
      </a>
    </div>
  );
}
