import photo from "@/assets/images/productCard.jpg";

export const implantologyModule = {
    state: () => ({
        products: [
            {
                title: 'Имплантология', article: 'implantology', list: [
                    {
                        brand: 'YDM',
                        category: 'Имплантология',
                        name: 'Имплантаты',
                        name_eng: 'implants',
                        price: '10 000 руб.',
                        inStock: true,
                        image: photo
                    },
                    {
                        brand: 'Seiler',
                        category: 'Имплантология',
                        name: 'Хирургические микроскопы',
                        name_eng: 'surgicalmicroscopes',
                        price: '20 000 руб.',
                        inStock: false,
                        image: photo
                    },
                    {
                        brand: 'Swarovski',
                        category: 'Имплантология',
                        name: 'УФ-хирургические лампы',
                        name_eng: 'uvsurgicallamps',
                        price: '15 000 руб.',
                        inStock: true,
                        image: photo
                    },
                    {
                        brand: 'Swarovski',
                        category: 'Имплантология',
                        name: 'УФ-хирургические лампы',
                        name_eng: 'uvsurgicallamps',
                        price: '15 000 руб.',
                        inStock: true,
                        image: photo
                    },
                    {
                        brand: 'Swarovski',
                        category: 'Имплантология',
                        name: 'УФ-хирургические лампы',
                        name_eng: 'uvsurgicallamps',
                        price: '15 000 руб.',
                        inStock: true,
                        image: photo
                    },
                    {
                        brand: 'Swarovski',
                        category: 'Имплантология',
                        name: 'УФ-хирургические лампы',
                        name_eng: 'uvsurgicallamps',
                        price: '15 000 руб.',
                        inStock: true,
                        image: photo
                    },
                    {
                        brand: 'Swarovski',
                        category: 'Имплантология',
                        name: 'УФ-хирургические лампы',
                        name_eng: 'uvsurgicallamps',
                        price: '15 000 руб.',
                        inStock: true,
                        image: photo
                    },
                    {
                        brand: 'Univet',
                        category: 'Имплантология',
                        name: 'Очки стоматологические',
                        name_eng: 'dentalglasses',
                        price: '18 000 руб.',
                        inStock: true,
                        image: photo
                    },
                    {
                        brand: 'Omnia',
                        category: 'Имплантология',
                        name: 'Хирургический инструментарий',
                        name_eng: 'surgicalinstruments',
                        price: '12 000 руб.',
                        inStock: false,
                        image: photo
                    },
                    {
                        brand: 'BioHorizons',
                        category: 'Имплантология',
                        name: 'Имплантационные системы',
                        name_eng: 'implantsystems',
                        price: '25 000 руб.',
                        inStock: true,
                        image: photo
                    },
                    {
                        brand: 'YDM',
                        category: 'Имплантология',
                        name: 'Фрезы для имплантов',
                        name_eng: 'implantdrills',
                        price: '8 000 руб.',
                        inStock: true,
                        image: photo
                    },
                    {
                        brand: 'Seiler',
                        category: 'Имплантология',
                        name: 'Имплантационные инструменты',
                        name_eng: 'implantationinstruments',
                        price: '16 000 руб.',
                        inStock: true,
                        image: photo
                    },
                    {
                        brand: 'Swarovski',
                        category: 'Имплантология',
                        name: 'Имплантационные шаблоны',
                        name_eng: 'implantationtemplates',
                        price: '14 000 руб.',
                        inStock: false,
                        image: photo
                    },
                    {
                        brand: 'Univet',
                        category: 'Имплантология',
                        name: 'Имплантационные ключи',
                        name_eng: 'implantationkeys',
                        price: '12 500 руб.',
                        inStock: true,
                        image: photo
                    },
                    {
                        brand: 'Omnia',
                        category: 'Имплантология',
                        name: 'Расширители для имплантов',
                        name_eng: 'implantexpanders',
                        price: '11 000 руб.',
                        inStock: true,
                        image: photo
                    },
                    {
                        brand: 'Omnia',
                        category: 'Имплантология',
                        name: 'Расширители для имплантов',
                        name_eng: 'implantexpanders',
                        price: '11 000 руб.',
                        inStock: true,
                        image: photo
                    },
                ]
            }
        ]
    }),
    getters: {
        products: state => state.products
    }
}