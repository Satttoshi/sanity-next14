import { getProjects } from '../../sanity/sanity-utils';

export default async function Home() {
  // since this is a static page, we can fetch the data at build time, no need for client side fetching and custom getStaticProps
  const projects = await getProjects();

  return (
    <main className="flex-col justify-center mt-8">
      {projects.map((project) => (
        <div key={project._id} className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">{project.name}</h1>
        </div>
      ))}
    </main>
  );
}
