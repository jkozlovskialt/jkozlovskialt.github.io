// Każdy plik .md w tresc/zadania/ to jedna seria zadań.
const pliki = import.meta.glob('/tresc/zadania/*.md', { eager: true }) as Record<string, any>;

export interface Seria {
  slug: string;
  numer: number;
  tytul: string;
  opis: string;
  data: Date;
  poziom: string;
  liczbaZadan: number;
  Content: any;
}

export const serie: Seria[] = Object.entries(pliki)
  .map(([sciezka, m]) => {
    const fm = m.frontmatter ?? {};
    return {
      slug: sciezka.split('/').pop()!.replace(/\.md$/, ''),
      numer: Number(fm.numer),
      tytul: fm.tytul,
      opis: fm.opis ?? '',
      data: new Date(fm.data),
      poziom: fm.poziom ?? '',
      // Zadanie = nagłówek drugiego stopnia („## Zadanie 1”).
      liczbaZadan: m.getHeadings().filter((h: any) => h.depth === 2).length,
      Content: m.Content,
    };
  })
  .filter((s) => !pliki[`/tresc/zadania/${s.slug}.md`].frontmatter?.szkic)
  .sort((a, b) => b.numer - a.numer);

export function ileZadan(n: number): string {
  const d = n % 10, s = n % 100;
  if (n === 1) return '1 zadanie';
  if (d >= 2 && d <= 4 && !(s >= 12 && s <= 14)) return `${n} zadania`;
  return `${n} zadań`;
}

export function dataPL(d: Date): string {
  return d.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function dataISO(d: Date): string {
  return d.toISOString().slice(0, 10);
}
