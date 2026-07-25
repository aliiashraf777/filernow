type FooterColumnProps = {
  title: string
  links: { label: string; href: string }[]
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="flex flex-col gap-4">
    <h6 className="heading-h5">{title}</h6>
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="para-base text-text-secondary hover:text-primary default-transition">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default FooterColumn