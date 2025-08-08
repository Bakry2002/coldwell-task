export type Link = {
  title: string;
  slug: string;
  href: string;
};

export interface HeaderLinksProps {
  links: Link[];
}
