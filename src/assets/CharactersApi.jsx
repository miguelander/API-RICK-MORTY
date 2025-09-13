import { useState, useEffect } from "react"

const CharactersApi = () => {

const [characters, setCharacters] = useState([])


    const fetchAllCharacter = async (url) =>{
        try{
             const response = await fetch(url)
             const data = await response.json()
             setCharacters(data.results)
        }
        catch(error){
            console.log(`Error ${error}`)
        }
       
        
    }
    useEffect(()=> {
        fetchAllCharacter("https://rickandmortyapi.com/api/character")
    }, [])

    return(
        
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">
  Rick and Morty Characters
</h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <div
            key={character.id}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-76 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-white">
                {character.name}
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Sexo: <span className="text-gray-200">{character.gender}</span>
              </p>
              <p className="text-sm text-gray-400">
                Estado:{" "}
                <span
                  className={`font-medium ${
                    character.status === "Alive"
                      ? "text-green-400"
                      : character.status === "Dead"
                      ? "text-red-400"
                      : "text-yellow-400"
                  }`}
                >
                  {character.status}
                </span>
              </p>
            </div>
            <div className="bg-gray-900 p-3 text-center text-xs text-gray-400">
              Origen: {character.origin.name}
            </div>
          </div>
        ))}
      </div>
    </div>
    
    )
   
}   

export default CharactersApi