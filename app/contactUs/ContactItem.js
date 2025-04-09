function ContactItem({ children }) {
  return (
    <div
      className="opacity-0 flex flex-col items-center gap-10 bg-[rgba(255,255,255,0.8)]
        backdrop-blur-sm rounded-2xl py-6 -translate-x-30
        animate-[slide-in_0.5s_1s_ease-in_forwards]"
    >
      <div className="text-3xl text-center leading-15 tracking-wide max-w-[90%]">
        {children}
      </div>
    </div>
  );
}

export default ContactItem;
