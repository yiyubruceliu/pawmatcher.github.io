export function Stats() {
  const stats = [
    {
      number: "400,000+",
      label: "Dogs in shelters across a few selected European countries",
      color: "bg-[#321478]",
    },
    {
      number: "10,000-50,000",
      label: "Dogs die in shelters annually without finding homes",
      color: "bg-[#6450b4]",
    },
    {
      number: "60%",
      label: "Of shelter dogs are never adopted",
      color: "bg-[#69c3c3]",
    },
    {
      number: "2-3 years",
      label: "Average time a dog spends in a shelter before adoption",
      color: "bg-[#d7d2f0]",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center font-sans text-4xl font-black uppercase text-[#321478] md:text-5xl">
          {"The Crisis We're Solving"}
        </h2>
        <p className="mb-12 text-center text-xl font-semibold text-[#6450b4]">
          {"These numbers represent real dogs waiting for a second chance"}
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} ${
                stat.color === "bg-[#d7d2f0]" ? "text-[#321478]" : "text-white"
              } rounded-3xl p-8 text-center transition-transform hover:scale-105`}
            >
              <div className="mb-3 font-sans text-5xl font-black uppercase md:text-6xl">{stat.number}</div>
              <div className="font-sans text-lg font-bold uppercase leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
