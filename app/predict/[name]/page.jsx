async function fetchName(name){
    const res=await fetch(`https://api.agify.io?name=${name}`)
    return res.json();
}
async function fetchGender(name){
  const res=await fetch(`https://api.genderize.io?name=${name}`)
  return res.json();
}
async function fetchCountry(name){
  const res= await fetch(`https://api.nationalize.io?name=${name}`)
  return res.json();
}
//API limit reached : we are getting error

export default async  function Saurav ({params}){
  const getName=await fetchName(params.name)
  const getGender=await fetchGender(params.name)
  const getCountry=await fetchCountry(params.name);

  const [age,gender,country] =await Promise.all([getName,getGender,getCountry])
  
  return <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-4"> 
          <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Information for {params.name}
          </div>
          <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Age: {age?.age}
        </div>
        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Gender: {gender?.gender}
        </div>
        <div className="block mt-1 text-lg leading-tight font-medium text-black">
        Nationality:
          {/* Nationality: {nationality?.country[0]?.country_id} */}
        </div>
        </div>
        </div>
}