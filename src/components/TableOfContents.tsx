type TocItem = {
  id: string;
  text: string;
  level: number; // 1-6
};

export default function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 bg-white">
      <h3 className="text-lg font-semibold">Table of Contents</h3>
      {items && items.length > 0 ? (
        <nav className="mt-4">
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block hover:underline ${
                    item.level === 1 ? 'text-gray-900' :
                    item.level === 2 ? 'text-gray-900' :
                    item.level === 3 ? 'pl-4 text-gray-700 text-sm' :
                    item.level === 4 ? 'pl-8 text-gray-700 text-sm' :
                    item.level === 5 ? 'pl-12 text-gray-600 text-sm' :
                    'pl-16 text-gray-600 text-sm'
                  }`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <p className="text-sm text-gray-600 mt-3">No headings found</p>
      )}
    </div>
  );
}