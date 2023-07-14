import { getProjects } from '@/sanity/sanity-utils';
import { Project } from '@/types/project';

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {
          projects.map((project) => (
            <div key={project._id}>
              {project.name}
            </div>
          ))
        }
      </div>
    </main>
  )
}

/*export function getStaticPaths(){
  
}

export function getStaticProps(){
  return {
    props: []
  }
}*/
