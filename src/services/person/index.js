import apollo from '../../plugins/apollo'
import AllPersons from '../GraphQL/AllPersons.gql'

const getPersons = async (variables) => {
  try {
    const response = await apollo.query({
      query: AllPersons,
      variables
    })
    const { allPersons } = response.data
    return allPersons
  } catch (error) {
    throw new Error(error)
  }
}

export default { getPersons }
