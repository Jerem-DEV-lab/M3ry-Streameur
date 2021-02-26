- [ ] Créer la base de données pour stocker les ids des vidéos et des détails de la vidéo
- [ ] Schemas de la base de donnée
- [ ] Avant une requête à l'api chercher l'id de la vidéo si l'id si le tokenDateRequest est vieux de 1 journée alors on
  refait un appel pour récupérer des datas fraîche

# Remarque :

- Sur la page "Youtube" Faire attention car le chargement du lecteur est super long donc mettre un loader le temps du
  chargement des composants Voir pour mettre une image au préchargement du lecteur et rediriger vers une autre page pour
  la lecture en pleine écran de la page ? A proposer à m3ry ?
    - [SlayerOfPussicat]
        - J'aurai plutôt écris comme ça perso "Tu n'as plus qu'as prendre ton café et te poser devant le Stream de
          The_M3RY Où te poser devant ses vidéo via sa chaine Youtube (Liens en bas de page)" Sinon cela fait répétition

# Feature =>

- [X] Revoir le backend pour l'api de youtube
- [X] Si m3ry n'est pas en direct ne charger que les 2 dernières vidéos ! sur la page destiner au stream
- [ ] Faire le switch pour changer de theme
- [!] Stocker les infos des videos dans le localStorage pour une optimisation optimale
- [ ] Et afficher la miniature plus que le lecteur !
- [ ] oh clique afficher le lecteur sur une autre page
- FIX : BACK => utiliser getVideosAndCommentsYoutube sur le front pour avoir toutes les datas d'un coup supprimer les
  anciens models s'ils sont trop vieux ... / sinon checker leurs dates de stockage et ne renvoyer que le résultat le plus
  pertinent
  
- Feature : Essayer de fixer les appels à l'api de twitch pour obtenir les infos du stream le moins souvent possible 
###### ##############Table data