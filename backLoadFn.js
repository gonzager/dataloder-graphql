import axios from "axios";
import _ from "lodash";
const ENDPOINT = 'https://restcountries.com/v3.1/alpha?codes='

export default async (ids) => {
  console.log(ids)
  const response = await axios.get(`${ENDPOINT}${ids.join(',')}`)
  const data = _.keyBy(response.data, each => each.cca3 )
  return ids.map(key => {
    if (!data[key]) return null
    const value = data[key]
    return {
      code: key, 
      name: value.name.official, 
      capital: value.capital, 
      population: value.population, 
      borderCodes: value.borders
    }
    })
}