import { ReactNode } from "react";
import _ from "lodash";
import s from "./Section.module.css";

interface SectionProps {
  title: string;
  body: string;
}

export const Section = ({ title, body }: SectionProps) => {
  return (
    <section className={s.container}>
      <h2 className={s.title}>{_.capitalize(title)}</h2>
      <p className={s.paragraph}>{body}</p>
    </section>
  );
};

interface SectionListProps {
  children: ReactNode;
}

export const SectionList = ({ children }: SectionListProps) => (
  <div className={s.list}>{children}</div>
);
