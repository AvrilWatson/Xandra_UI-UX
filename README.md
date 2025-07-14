# Expo app with React.Native 👋

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Install nvm, from which Node.js can be installed and differnt versions can be easily switched. Ask AI for installation.
   
3. Install the latest Node.js from nvm. *Sometimes version mismatch between expo and Node.js can be annoying. Mine are both the latset versions.*
   
   For ios:
   ```bash
   nvm install --lts
   nvm use --lts
   ```
   For windows:
   ```bash
   nvm install lts
   nvm use lts
   ```

   
4. Start the app

   ```bash
   npx expo start
   ```
5. Install other necessities encountered when running the code
   
   ```bash
   npx expo install
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.


## File Structure

```text
my-new-app
|-- app                  # [Highest Level] Responsible for all screens 
|   |-- (tabs)           # The pages that will appear in buttom tab bar are in this (tab) repository
|   |   |-- _layout.tsx  # Every app repository needs a "_layout"
|   |   |-- explore.tsx  # (NOT DONE) Intended for unfinished drafts and saved painting functions
|   |   `-- index.tsx    # The first (landing) screen
|   |-- +not-found.tsx   # If deteced errors
|   |-- _layout.tsx      # Every app repository needs a "_layout"
|   |-- loading.tsx      # Loading screen
|   |-- select.tsx       # Painting Selection screen
|   `-- view.tsx         # Painting detail viewing screen
|-- assets               # This repository will be used to store the fonts and logo.
|   |-- fonts
|   |   `-- SpaceMono-Regular.ttf
|   |-- images
|   |   |-- adaptive-icon.png
|   |   |-- favicon.png
|   |   |-- icon.png  
|   |   |-- partial-react-logo.png
|   |   |-- react-logo.png
|   |   |-- react-logo@2x.png
|   |   |-- react-logo@3x.png
|   |   `-- splash-icon.png
|   `-- artData.ts    
|-- components                          # The components that makes up each screen
|   |-- ui
|   |   |-- IconSymbol.ios.tsx
|   |   |-- IconSymbol.tsx
|   |   |-- TabBarBackground.ios.tsx        
|   |   `-- TabBarBackground.tsx
|   |-- Collapsible.tsx
|   |-- EmotionInput.tsx
|   |-- ExternalLink.tsx
|   |-- HapticTab.tsx 
|   |-- HelloWave.tsx 
|   |-- Land_ArtworkGallery.tsx
|   |-- Land_Header.tsx
|   |-- ParallaxScrollView.tsx
|   |-- Select_ArtGallerySelection.tsx      
|   |-- Select_ArtWorkGallery.tsx
|   |-- Select_Header.tsx
|   |-- ThemedText.tsx
|   |-- ThemedView.tsx
|   |-- View_ArtDetails.tsx
|   |-- useColorScheme.ts
|   |-- useColorScheme.web.ts
|   `-- useThemeColor.ts
|-- hooks                        # Encapsulate the theme designs for cleaner code use
|   |-- useArtState.ts
|   |-- useColorScheme.ts
|   |-- useColorScheme.web.ts
|   `-- useThemeColor.ts                             
|-- node_modules                 # Not for coding but system auto-generated, do not change
|-- scripts
|   `-- reset-project.js
|-- README.md
|-- app.json                     # The files below including this one are for configuration uses.
|-- eslint.config.js
|-- expo-env.d.ts
|-- package-lock.json
|-- package.json
`-- tsconfig.json

```

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.


## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
