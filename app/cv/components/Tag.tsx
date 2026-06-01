type Size = 'sm' | 'xs';

export default function Tag({ children, size = 'sm' }: { children: React.ReactNode; size?: Size }) {
  const text = size === 'xs' ? 'text-xs' : 'text-sm';
  return (
    <span
      className={`cv-tag bg-gray-50 dark:bg-gray-600/40 text-gray-600 dark:text-gray-300 ${text} font-light inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm border border-gray-200 dark:border-gray-500`}
    >
      {children}
    </span>
  );
}

export function TagList({ items, size = 'sm' }: { items: string[]; size?: Size }) {
  return (
    <>
      {items.map((item) => (
        <Tag key={item} size={size}>
          {item}
        </Tag>
      ))}
    </>
  );
}
