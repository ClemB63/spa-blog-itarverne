# Procédure à suivre pour utiliser l'Application Exercice spa-blog


## Consignes
Veuillez réaliser une application React qui gère le routage de 3 pages (les catégories, les articles et la page d'accueil) avec le choix de la langue qui sera enregistré sur le poste client. Le titre des liens changera en conséquence.
Le contenu des 3 pages n'est pas important, du lorem ipsum est suffisant. Veuillez-vous attardez sur le fonctionnement des routes.
Veuillez me pousser votre code sur votre repo dans un tag 0.0.1
Vous me communiquerez ce repo et je consulterais uniquement ce tag. Pensez également à mettre un README expliquant la procédure à suivre pour utiliser votre outil
Vous utiliserez la version 17 de React en programmant avec la notion de POO avec ES6.

## L'application
pour accéder à l'application, merci de suivre la page Github Pages ci dessous :

https://clemb63.github.io/spa-blog-itarverne/

Vous trouverez deux boutons pour changer la langue de l'application, et une barre de navigation pour aller d'une page à l'autre. 

## Ce que permet l'application

La navigation entre trois pages : Accueil, Articles et Catégorie
Le changement de langue FR/EN appliqué aux liens et aux titres, avec une détection du dernier langage choisi pour permettre à l'utilisateur de voir directement la page dans ce langage à la visite suivante. 


## démarche et outils

En toute transparence, étant grande débutante, j'ai fais beaucoup de recherches et suivi des tutoriaux pour atteindre ce résultat, que je vous partage ici. Merci à leurs auteurs. 

ressources suivies:

* https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
* https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
* https://react.i18next.com/latest/using-with-hooks
* https://github.com/facebook/create-react-app
* https://git-scm.com/book/en/v2/Git-Basics-Tagging

outils et plugin utlisés:
* React 17.01
* create-react-app
* webpak
* react-router-dom
* i18next
* react-i18next
* i18next-browser-languagedetector 

## remarques sur le projet
**ce que je pense avoir réussi, les décisions prises**

j'ai choisi de faire de ce projet une SPA pour la rapidité et ai orienté mes recherches en fonction. Il me semble que react est un langage ideal pour la creation de SPA.

je ne sais pas si l'utilisation de l'outil de facebook create-react-app et le recours aux tutoriaux est considéré comme de la "triche", si c'est le cas je m'en excuse. On nous apprend chez Simplon à aller à l'essentiel et à ne pas ré-inventer la roue, il me paraissait logique dans le cadre de ce projet axé sur les routes (et pour quelqu'un qui n'avait jamais touché à React) de partir d'une base solide et surtout comprise. 

Je n'ai pas choisi d'implémenter Redux pour cette même raison, j'ai eu quelques soucis pour définir exactement à quoi le réducteur servait et comment on l'utilisait, et ai préféré remettre cette recherche en profondeur à plus tard pour rendre un exercice fonctionnel au niveau des routes. 

Vu le peu de texte, j'ai choisi de ne pas séparer mes traductions. 

Le CSS est resté basique pour bien montrer les fonctionnalités. L'application est responsive et testée sur Mozilla, Chrome et Chromium sur desktop, et sur Chrome sur mobile Android.

J'ai utilisé la POO pour chacune des pages, en utilisant les classes et l'héritage.

J'aurais aimé pouvoir implémenter la gestion de "state" des boutons de langue pour leur appliquer un style particulier quand actifs, mais ai déterminé que j'avais besoin de plus de tests (et donc de temps) pour bien comprendre cette démarche sans casser le code.

Maintenant que j'ai compris le principe des tags et releases de Git (c'était la première fois!), je pense continuer à travailler sur ce projet pour m'en faire un blog personnel une fois que vous l'aurez visé. Je suis preneuse de tous conseils à ce sujet de votre part!


## Merci d'avance pour le temps que vous prendrez à étudier ma candidature!

