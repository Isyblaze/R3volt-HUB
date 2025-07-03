// components/RevoltCard.js
export default function RevoltCard({ title, description, href = "#", className = "" }) {
  return (
    <a
      href={href}
      className={`group bg-white border border-gray-200 rounded-xl p-6 shadow-sm transition-all hover:border-blue-600 hover:shadow-lg hover:-translate-y-1 ${className}`}
    >
      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </a>
  );
}
