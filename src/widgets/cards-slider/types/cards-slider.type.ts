export type CardsSliderType = {
  id: number;
  title: string;
  text: string;
  list?: string[];
  button?: {
    text: string;
    href: string;
    external?: boolean;
  };
  image: {
    src: string;
    alt: string;
  };
};
