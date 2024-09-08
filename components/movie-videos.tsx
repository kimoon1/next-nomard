import { API_URL } from "../app/constans";


async function getVideos(id: string) {
  console.log(`Time videos${Date.now()}`)
  // await new Promise((resolve) => setTimeout(resolve, 4000));

  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({id} : {id:string}) {
  const videos = await getVideos(id);
  return <div>
    {videos.map(video => (
      <iframe key={video.id} src={`https://youtube.com/embed/${video.key}`} title={video.name} allow="accelerometer; autopley; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    ))}
  </div>
}
