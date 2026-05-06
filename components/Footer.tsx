export default function Footer() {
  return (
    <footer className="bg-[#6B5E4E] text-[#D8CFBC] p-8 md:p-10 mt-auto font-mono">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end max-w-6xl mx-auto gap-6 md:gap-0">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-xl font-bold">Contact me</p>
          <p className="text-sm">Email: kazey1119@gmail.com</p>
          <p className="text-sm">Phone: 123 456 789</p>
        </div>
        <p className="text-sm opacity-80 text-center md:text-right">
          Copyright: @Kazey
        </p>
      </div>
    </footer>
  );
}