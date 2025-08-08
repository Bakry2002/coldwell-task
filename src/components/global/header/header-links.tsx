import { HeaderLinksProps } from "@/types";
import Link from "next/link";
import { AppButton } from "../app-button";

export const HeaderLinks = ({ links }: HeaderLinksProps) => {
  return (
    <div className="flex items-center gap-8">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.slug}
          className="hover:text-neutral-400 transition-colors"
        >
          {link.title}
        </Link>
      ))}

      {/* CTA */}
      <AppButton variant="gradient" className="rounded-sm text-sm">
        Download Template
      </AppButton>
    </div>
  );
};
