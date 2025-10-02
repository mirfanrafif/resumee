// a section that use screen height
export default function Section({ children, className = "", id, ...props }) {
  return (
    <section
      id={id}
      className={`flex min-h-screen flex-col justify-center py-8 pl-8 pr-16 ${className}`}
      {...props}
    >
      <div className="mx-auto w-full max-w-[1440px] p-8">{children}</div>
    </section>
  );
}
