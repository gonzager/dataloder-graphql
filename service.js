import backLoadFn from './backLoadFn.js'
import DataLoader from 'dataloader'
 
const dataLoader = new DataLoader(backLoadFn, {
  maxBatchSize:20, cache: false, batchScheduleFn: callback => setTimeout(callback, 100)
})

const find = async (id) => {
  return await dataLoader.load(id)
}

export default { find }


