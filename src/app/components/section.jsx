// a section that use screen height
export default function Section({ children, className = "", id, ...props }) {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col justify-center py-8 ${className}`}
      {...props}
    >
      <div className="w-full max-w-[1440px] mx-auto p-8">{children}</div>
    </section>
  );
}
