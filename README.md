# Plateau Rugby ROC — projet Capacitor Android

Projet prêt pour une compilation Android dans le cloud. Il embarque une application de gestion de plateaux de rugby fonctionnant hors ligne, avec images ROC/France Rugby intégrées et personnalisation depuis la galerie.

## Dépôt GitHub sans commande

1. Créez un dépôt GitHub vide nommé `plateau-rugby-roc-android`.
2. Décompressez le ZIP reçu.
3. Dans GitHub, cliquez sur **uploading an existing file**.
4. Glissez tout le contenu de ce dossier (`www`, `package.json`, `capacitor.config.ts`, `codemagic.yaml`, etc.).
5. Cliquez sur **Commit changes**.

## Codemagic — build cloud Android

1. Ouvrez https://codemagic.io et connectez-vous via GitHub.
2. Cliquez sur **Add application**, puis sélectionnez ce dépôt.
3. Codemagic détecte `codemagic.yaml`.
4. Lancez le workflow Android.
5. À la fin, téléchargez l'artefact `app-debug.apk`.

## Test local facultatif

Le projet nécessite Node.js et le SDK Android uniquement si vous voulez compiler localement. Ce n'est pas nécessaire avec Codemagic.

## Note sur les images

L'application contient des images initiales dans `www/assets`. Les boutons de personnalisation appellent le sélecteur Android (plugin Camera/Photos Picker) quand l'application est installée ; dans un navigateur, un sélecteur de fichier standard est utilisé.
