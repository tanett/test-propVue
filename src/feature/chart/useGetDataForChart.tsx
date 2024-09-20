import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks.ts';

export const useGetDataForChart = () => {

    const [ dataForChart, setDataForChart ] = useState<Record<string, number | string>[] | undefined>(undefined)
    const [ productCount, setProductCount ] = useState<number>(0)

    const data = useAppSelector(state => state.dataFromXlsxSlice.data)

    useEffect(() => {
        if (data) {
            const countObject = data.reduce((prev, curr) => {
                return {
                    products: prev.products + 1,
                    sellable: curr['Status'] === 'Sellable' ? prev.sellable + 1 : prev.sellable,
                    unfulfillable: curr['Status'] === 'Unfulfillable' ? prev.unfulfillable + 1 : prev.unfulfillable,
                    inbound: curr['Status'] === 'Inbound' ? prev.inbound + 1 : prev.inbound,
                }
            }, {
                                               products: 0,
                                               sellable: 0,
                                               unfulfillable: 0,
                                               inbound: 0
                                           })
            const mappedData=['Sellable', 'Unfulfillable', 'Inbound'].map((item)=>{
                return {
                    status: item, count: countObject[item.toLowerCase() as keyof typeof countObject], fill: `var(--color-${item.toLowerCase()})`
                }
            });
            setDataForChart(mappedData)
            setProductCount(countObject.products)
        }
    }, [ data ])

    return { dataForChart, productCount }
}
