"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type AllowedTag =
  | "div"
  | "section"
  | "header"
  | "footer"
  | "article"
  | "li"
  | "span"
  | "p";

type Props = {
  children: ReactNode;
  delay?: number;
  as?: AllowedTag;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
  style,
  once = true,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const inViewNow = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewNow) {
      setVisible(true);
      if (once) return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const mergedStyle: CSSProperties = {
    ...style,
    ["--reveal-delay" as string]: `${delay}ms`,
  };

  return createElement(
    as,
    {
      ref,
      className: `reveal ${visible ? "is-visible" : ""} ${className}`,
      style: mergedStyle,
    },
    children,
  );
}
