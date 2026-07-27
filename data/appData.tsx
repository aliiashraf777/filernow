import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"

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

export interface IFooterSocialLinksItem {
    id: string,
    link: string,
    label: string,
    icon: React.ReactElement,
}

export const footerSocialLinks: IFooterSocialLinksItem[] = [
    {
        id: 'footerSocialLink1',
        link: '#',
        label: 'LinkedIn',
        icon: <FaLinkedinIn size={20} />,
    },
    {
        id: 'footerSocialLink2',
        link: '#',
        label: 'Facebook',
        icon: <FaFacebookF size={20} />,
    },
    {
        id: 'footerSocialLink3',
        link: '#',
        label: 'Instagram',
        icon: <FaInstagram size={20} />,
    },
    {
        id: 'footerSocialLink4',
        link: '#',
        label: 'Youtube',
        icon: <FaYoutube size={20} />,
    },
    {
        id: 'footerSocialLink5',
        link: '#',
        label: 'Twitter',
        icon: <FaTwitter size={20} />,
    }
];

export interface IFooterLinkItem {
    label: string,
    href: string,
}

export const footerServicesData: IFooterLinkItem[] = [
    { label: "Income Tax Return Filing", href: "/services/income-tax-return-filing" },
    { label: "Business Registration", href: "/services/business-registration" },
    { label: "Company Registration", href: "/services/company-registration" },
    { label: "NTN Registration", href: "/services/ntn-registration" },
    { label: "Sales Tax Registration", href: "/services/sales-tax-registration" },
    { label: "Trademark Registration", href: "/services/trademark-registration" },
]

export const footerQuickLinks: IFooterLinkItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Calculator", href: "/calculator" },
]