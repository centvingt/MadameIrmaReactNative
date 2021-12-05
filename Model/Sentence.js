let subjects = [
  'Un oiseau',
  'Votre chat',
  'Une voiture',
  'Un ami',
  'Une femme mystérieuse',
  'Un chien de race',
  'Un homme de loi',
  'Un de vos voisins',
]
let verbsAndObjects = [
  'vous rendra visite',
  'vous veut du mal',
  'viendra à votre rencontre',
  'gagnera une forte somme d’argent',
  'aura besoin de vous',
  'vous rendra un grand service',
  'achètera votre silence',
  'mangera vos chocolats',
]
const getRandomSentence = () =>
  `${subjects[Math.floor(Math.random() * subjects.length)]} ${
    verbsAndObjects[Math.floor(Math.random() * verbsAndObjects.length)]
  }`
