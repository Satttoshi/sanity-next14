import Image from 'next/image';
import { loadProjects } from '../../sanity/loaders/loadQuery';

export default async function Home() {
  // since this is a static page, we can fetch the data at build time, no need for client side fetching and custom getStaticProps
  const projects = await loadProjects();
  if (!projects.data) {
    // Testing console in deployment
    console.error('Error: No projects found');
    console.warn('Warning: No projects found');
    console.info('Info: No projects found');
    console.debug('Debug: No projects found');
    console.log('Log: No projects found');
    return null;
  }

  return (
    <main className="flex flex-col justify-center items-center mt-8">
      <h1 className="font-extrabold text-4xl my-8 inline-block bg-gradient-to-r from-green-400 to-blue-800 bg-clip-text text-transparent">
        Sanity Next14 App
      </h1>
      {projects.data.map((project) => (
        <div key={project._id} className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">{project.name}</h1>
          {project.image && (
            <Image
              className="object-cover rounded-lg"
              src={project.image}
              alt={project.name}
              width={200}
              height={200}
            />
          )}
        </div>
      ))}
    </main>
  );
}
