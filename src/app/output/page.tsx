import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

function getYear(dateStr: string): number {
  return parseInt(dateStr.split('-')[0], 10);
}

function formatDate(dateStr: string): string {
  const parts = dateStr.split('-');
  if (parts.length === 1) return parts[0]; // YYYY
  if (parts.length === 2) {
    const month = new Date(`${parts[0]}-${parts[1]}-01`).toLocaleString('default', { month: 'short' });
    return `${month} ${parts[0]}`; // MMM YYYY
  }
  const date = new Date(dateStr);
  return date.toLocaleString('default', { month: 'short', day: 'numeric', year: 'numeric' }); // MMM DD, YYYY
}

export default function Output() {
  // Group projects by year
  const projectsByYear = projects.reduce((acc, project) => {
    const year = getYear(project.date);
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push({
      ...project,
      formattedDate: formatDate(project.date)
    });
    return acc;
  }, {} as Record<number, Array<typeof projects[0] & { formattedDate: string }>>);

  // Sort years in descending order
  const years = Object.keys(projectsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="sm:flex-1 w-full sm:mt-12">
      <div className="space-y-16">
        {years.map((year) => (
          <section key={year} className="space-y-6">
            <h2 className="font-mono text-2xl text-neutral-200 tracking-wider">{year}</h2>
            <div className="grid gap-6 sm:grid-cols-1 w-11/12">
              {projectsByYear[year]
                .sort((a, b) => b.date.localeCompare(a.date))
                .map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}