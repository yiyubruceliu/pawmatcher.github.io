import { Card } from "@/components/ui/card"
import { assetPath } from "@/lib/utils"

export function About() {
  const team = [
    {
      name: "Yi-Yu (Bruce) Liu",
      role: "Tech Founder",
      color: "bg-[#321478]",
      image: assetPath("/bruce.jpg"),
    },
    {
      name: "Iva Bosotina",
      role: "Operations Founder",
      color: "bg-[#6450b4]",
      image: assetPath("/iva.jpg"),
    },
  ]

  return (
    <section className="bg-[#d2ebeb] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center font-sans text-4xl font-black uppercase text-[#321478] md:text-5xl">
          {"Meet the Pack"}
        </h2>
        <p className="mb-12 text-center text-xl font-semibold text-[#6450b4]">
          {"Passionate humans working to give every dog a chance"}
        </p>

        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {team.map((member, index) => (
            <Card
              key={index}
              className={`${member.color} border-0 p-8 text-center text-white transition-transform hover:scale-105`}
            >
              <div className="mb-6 flex justify-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} className="h-full w-full object-cover" />
                </div>
              </div>
              <h3 className="mb-2 font-sans text-2xl font-black uppercase">{member.name}</h3>
              <p className="font-sans text-lg font-bold uppercase">{member.role}</p>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-balance text-lg font-semibold leading-relaxed text-[#321478]">
            {
              "We believe technology can bridge the gap between shelter dogs and loving families. Our mission is to make adoption easier, faster, and more successful by helping people find their perfect match."
            }
          </p>
        </div>
      </div>
    </section>
  )
}
