export const filterList = [
    {
        id: 1,
        value: 'price',
        label: 'Самый дешевый'
    },
    {
        id: 2,
        value: 'duration',
        label: 'Самый быстрый',
    },
    {
        id: 3,
        value: 'optimal',
        label: 'Оптимальный'
    }
]


export type Filter = 'price' | 'duration' | 'optimal'