import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { RootState } from '../store/api_cache'
interface ApiCacheState {
  charactersBasic: any,
  charactersDetailed: any,
}

const initialState: ApiCacheState = {
  charactersBasic: {},
  charactersDetailed: {},
}

export const apiCacheSlice = createSlice({
  name: "apiCache",
  initialState,
  reducers: {
    updateCharactersBasic: (state, action: PayloadAction<any>) => {
      state.charactersBasic = action.payload
    },
    updateCharacter: (state, action: PayloadAction<[string, any]>) => {
      state.charactersDetailed[action.payload[0]] = action.payload[1]
    },
  }
})

export const { updateCharactersBasic, updateCharacter} = apiCacheSlice.actions
export const selectCharactersBasic = (state: RootState) => state.apiCache.charactersBasic
export const selectCharacter = (state: RootState, name: string) => state.apiCache.charactersDetailed[name]
export const selectCharactersDetailed = (state: RootState) => state.apiCache.charactersDetailed
export default apiCacheSlice.reducer