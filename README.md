# Test Technique HelloSezame
## Création d’un widget de calcul dynamique du budget

Référence : https://www.landis.com/pricing 

Points d’attention : 

- Ergonomie, et fonctionnement sur mobile
- Simplicité d’utilisation

Paramètres en entrée : 

- Nom de la ville
- Prix de la maison
- Epargne disponible

Résultat : 

- Loyer : Prix de la maison * 5% / 12
- Epargne additionnelle : (10% * Prix de la maison - Epargne disponible) / 36
- Budget mensuel = Loyer + Epargne additionnelle

## Langages informatiques : React.js
### Pré-requis : Node.js, NPM
### Installation
***
```
$ clonez le dépôt :
$ git clone https://github.com/Lattana-sck/HelloSezame.git hellosezame
$ cd hellosezame
$ npm install
$ npm start
```
***
## Formulaire à remplir pour accèder aux résultats
![Capture d’écran 2022-11-23 234343](https://user-images.githubusercontent.com/74185631/203658513-d7f2ca1d-d8d3-4b71-aaae-3b1df8edff9e.png)

## Le résultat s'affiche au clique du bouton après avoir remplis tous les champs
![Capture d’écran 2022-11-23 234415](https://user-images.githubusercontent.com/74185631/203658675-04e1688b-94ec-4867-be8a-6777130fbac0.png)
