import Question from './question';

export const questionList: Question[] = [{
    id: 1,
    title: 'Makaron z dziurką w środku, to',
    answers: [
        'Tagiattelle', 'Spagetti', 'Bucatini', 'Stilfretto'],
        'goodAnswer': 'Bucatini'
  },
  {
    id: 2,
    title: 'Zupa z Francji z owocami morza, to:',
    answers: [
        'Zupa Cebulowa', 'Ucha', 'Barszcz', 'Bouillabaisse'],
    goodAnswer: 'Bouillabaisse'
  },
  {
    id: 3,
    title: 'Najwyższa góra na świecie',
    answers: [
        'Mont Black', 'K2', 'Kilimandżaro', 'Mont Everest'],
    goodAnswer: 'Mont Everest'
  },
  {
    id: 4,
    title: 'Ciemne, mocne piwo, to inaczej: ',
    answers: [
        'Podpiwek', 'Lager', 'IPA', 'Porter'],
    goodAnswer: 'Porter'
  },
];
