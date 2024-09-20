import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store.ts'
import { typeProduct } from '../../entety-project/dataFromXlsx/types.ts';

// Define a type for the slice state
interface dataFromXlsxState {
    data: typeProduct[],
}

// Define the initial state using that type
const initialState: dataFromXlsxState = {
    data: [],
}
export const dataFromXlsxSlice = createSlice({
                                            name: 'dataFromXlsx',
                                            initialState: initialState,
                                            reducers: {
                                                setDataXlsx: (state, action:PayloadAction<dataFromXlsxState['data']>) => {
                                                    state.data = action.payload
                                                },

                                            },
                                        })


export const { setDataXlsx } = dataFromXlsxSlice.actions
export const selectData = (state: RootState) => state.dataFromXlsxSlice.data
export default dataFromXlsxSlice.reducer
