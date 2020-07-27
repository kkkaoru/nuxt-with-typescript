export type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

export type AccordionItemWithoutId = Omit<AccordionItem, 'id'>;
