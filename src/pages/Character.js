import getData from '../utils/getData';
import getHash from '../utils/getHash'

const Character = async () => {
   let characterId = getHash();
   let character = await getData(characterId)

   const view = `
      <div class="Character">

            <article class="Characters-card">
               <img src="${character.image}" alt="${character.name}">
               <h2>${character.name}</h2>
            </article>
            <article class="Characters-card">
               <h3>Episodes: <span class="character-description">${character.episode.length}</span></h3>
               <h3>Status: <span class="character-description">${character.status}</span></h3>
               <h3>Species: <span class="character-description">${character.species}</span></h3>
               <h3>Gender: <span class="character-description">${character.gender}</span></h3>
               <h3>Origin: <span class="character-description">${character.origin.name}</span></h3>
               <h3>Last known location: <span class="character-description">${character.location.name}</span></h3>
            </article>
      </div>
   `

   return view;
}

export default Character