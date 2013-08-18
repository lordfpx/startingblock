Starting-Block
=============

Il s'agit d'un (énième) framework très basique pour que vous puissiez ne penser qu'à le personnaliser et non pas à bidouiller. Il est inspiré par d'autres projets comme :
- http://www.knacss.com/ de Raphaël Goetter
- http://rocssti.nicolas-hoffmann.net/ de Nicolas Hoffmann
- et de pleins d'autres dont j'ai perdu les références :-/

Je l'ai avant tout développé pour mes propres besoins, mais je pense qu'il peut être utile pour d'autres intégrateurs.

Le "htaccess" fourni est celui de Twitter Bootstrap qui est vraiment très travaillé.
Ce fichier est facultatif, il est juste là pour optimiser le serveur et si vous rencontrez des difficultés ne l'utilisez tout simplement pas. Si vous avez déjà un tel fichier sur votre serveur, ne le remplacez surtout pas si vous ne savez pas ce que vous faites !

Vous pouvez utiliser librement tout les éléments de ce framework, les modifier, redistribuer... merci de me référencer tout de même.


POURQUOI ?
----------
j'ai testé les frameworks CSS Twitter Bootstrap et Foundation, mais s'ils sont parfaits pour styler des administrations ou faire du prototypage, je n'ai jamais pu m'en servir pour intégrer un site web en situation réelle, car aucun ne suivait les règles de ces frameworks trop millimétrées. De plus, ils se révèlent relativement lourds à charger et surchargés de règles CSS.

Il me fallait un outil avec des règles CSS simples, éprouvées et surtout permettant l'intégration de sites exotiques, car l'intégrateur n'est pas (toujours) le designer du site.


CONSIGNES
---------
Les images de design vont dans "css/img" (background, logo, icônes, déco,…).

Les photos, documents entrant dans le contenu des pages vont dans "data" (y créer les sous-dossiers selon ses propres besoins).

Le meta "author" ne sert à rien, sauf à vous faire connaître d'autres développeurs/intégrateurs qui iront regarder les sources de la page ;-). 

La page index sert de point de départ. Effacez son contenu (<body>) et adaptez-la à vos besoins.



FAVICONS
--------
Les favicons de ce frameworks sont adaptées pour la majorité des supports (navigateurs, iOS, Androïd...). Pour les designer, vous pouvez vous baser sur les exemple fournis ou utiliser un site comme : http://iconifier.net/


CSS
---
Le nom des classes est normalement parlant. Les CSS sont regroupés selon leur rôle :

reset.css : reset très puissant inspiré par celui d'Eric Meyer
global.css : classes réutilisables
typo.css : pour régler les typos et leurs couleurs
layout.css : Mise en page de votre site (grille, positionnements, backgrounds)
forms.css : formulaires
custom.css : vos styles particuliers
mediaqueries.css : les media queries

demo.css : styles uniquement pour la démo (à effacer bien sur)

La page HTML comprend des exemples sur l'utilisation des classes (regardez le code source).



jQuery
------
http://jquery.com/

Prefixfree
----------
http://leaverou.github.com/prefixfree/

modernizr
---------
http://modernizr.com/

selectivizr
-----------
http://selectivizr.com/

jQuery Easing
-------------
https://github.com/gdsmith/jquery.easing
