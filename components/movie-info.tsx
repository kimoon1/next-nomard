import { API_URL } from "../app/(home)/page";

async function getMoive(id:string) {
  console.log(`Time ${Date.now()}`)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(`${API_URL}/${id}`);
  return response.json();

}

export default async function MovieInfo({id} : {id:string}) {
  const movie = await getMoive(id);
  return <h6>{JSON.stringify(movie)}</h6>
}
