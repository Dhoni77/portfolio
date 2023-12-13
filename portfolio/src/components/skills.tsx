export const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "Scss",
    "Styled Components",
    "Javascript",
    "Typescript",
    "Angular",
    "RxJS",
    "Ngrx",
    "React",
    "Redux",
    "Trpc",
    "React Query",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "Redux",
    "Express",
    "Nest JS",
    "Django",
    "REST API",
    "Postman",
    "PostgreSQL",
    "MySQL",
    "Google Cloud",
    "Spanner",
    "Firestore",
    "BigQuery",
    "Mocha",
    "Sinon",
    "React Testing Library",
    "Jest",
    "Karma",
    "Webpack",
    "Rollup",
    "Vite",
    "Npm",
    "Yarn",
    "Pnpm"
  ]

  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        <div className="flex-col">
          <p className="text-3xl font-medium capitalize mb-8 text-center">
            <span className="transalte-y-[20px] translate-z-0">|</span>
            <span className="transalte-y-[20px] translate-z-0"> </span>
            <span className="transalte-y-[20px] translate-z-0">M</span>
            <span className="transalte-y-[20px] translate-z-0">y</span>
            <span className="transalte-y-[20px] translate-z-0"> </span>
            <span className="transalte-y-[20px] translate-z-0">s</span>
            <span className="transalte-y-[20px] translate-z-0">k</span>
            <span className="transalte-y-[20px] translate-z-0">i</span>
            <span className="transalte-y-[20px] translate-z-0">l</span>
            <span className="transalte-y-[20px] translate-z-0">l</span>
            <span className="transalte-y-[20px] translate-z-0">s</span>
          </p>
        </div>
      </h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {
          skills.map((skill) => (
            <li className="bg-white border-2 border-green-300 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 translate-y-[100px] translate-z-0">
              {skill}
          </li>
          ))
        }        
      </ul>
    </section>
  );
};
