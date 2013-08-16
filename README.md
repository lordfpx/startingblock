Starting-Block
=============

j'ai testé les frameworks CSS Twitter Bootstrap et Foundation, mais s'ils sont parfait pour styler des administrations, je n'ai jamais pu m'en servir pour intégrer un site web au design un peu trop libre. De plus, ils se révèlent surchargés de styles.

Je vous propose donc un framework très basique pour que vous puissiez ne penser qu'à le personnaliser et non pas à bidouiller.

Le "htaccess" fourni est celui de Twitter Bootstrap qui est vraiment très travaillé.

Ce fichier est facultatif, il est juste là pour optimiser le serveur et si vous rencontrez des difficultés ne l'utilisez tout simplement pas. Si vous avez déjà un tel fichier sur votre serveur, ne le remplacez surtout pas si vous ne savez pas ce que vous faites !

Prefixfree permet de ne pas avoir à ajouter les préfixes en CSS3 (-webkit-, -moz-…).

Modernizr permet de détecter si le navigateur ne supporte pas certaines choses en CSS ou HTML5 (se référer à la documentation sur le site).


CONSIGNES
---------
Les images de design vont dans "css/img" (background, logo, icônes, déco,…).

Les photos, documents entrant dans le contenu des pages vont dans "data" (y créer les sous-dossiers selon ses propres besoins).

Le meta "author" ne sert à rien, sauf à vous faire connaître d'autres développeurs/intégrateurs qui iront regarder les sources de la page ;-). 


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
http://www.hongkiat.com/blog/modernizr/

