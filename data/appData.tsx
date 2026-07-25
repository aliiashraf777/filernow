export interface IMenuDataItem {
    id: string,
    label: string,
    link: string,
}

export const menuData: IMenuDataItem[] = [
    {
        id: 'menuData1',
        label: 'Home',
        link: '/',
    },
    {
        id: 'menuData2',
        label: 'Services',
        link: '/services',
    },
    {
        id: 'menuData3',
        label: 'Tax Rates',
        link: '/tax-rates',
    },
    {
        id: 'menuData4',
        label: 'About Us',
        link: '/about',
    },
    {
        id: 'menuData5',
        label: 'Blog',
        link: '/blog',
    },
    {
        id: 'menuData6',
        label: 'Calculator',
        link: '',
    },
];