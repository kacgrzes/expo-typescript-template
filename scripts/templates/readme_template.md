# @_OWNER_/_NAME_

This is a template to be used with expo. It includes all the necessary stuff to start working with expo framework. It has the most popular packages included so it's easier to start coding the app itself without all the necessary boilerplate setup. It has:

Version in the `package.json` is one to one the latest expo on which the template was tested.

## Scripts

#### 1. Bootstrap - At start you should trigger script

```
node ./scripts/bootstrap.js
```

The script gives you opportunity to setup the essentialest variables for your project like app name, bundle ID or android package name

#### 2. Generate new screen

```
node ./scripts/create_new_screen.js
```

You can use this script for generate new common screen, tabs screen or new bottom tab, from screen template. You have possiblity to change screen template for your own.

#### 3. Generate new component

```
node ./scripts/create_new_component.js
```

You can use this script for generate new common component (atom, molecule, organism, common) from component template. You have possiblity to change component template for your own.

## Run Locally

1. Clone the project

```bash
  git clone git@github.com:binarapps/_NAME_.git
```

2. Go to the project directory

```bash
  cd _NAME_
```

3. Install dependencies

```bash
  yarn
```

4. Setup environment variables (right now not needed because we are using only mocked values)

- We are using doppler in our project, and almost everything is happening automatically
- While doing the setup for the first time you need to follow this [instructions](./scripts/README.md) - "1. `generate_dotenv.sh`"

5. Start the expo server

```bash
  yarn start
```

## Icons

This template uses [Remix icon set](https://remixicon.com/)

It is added to the app as a font generated by [icomoon app](https://icomoon.io/app/#/select).

## Adding new icons

1. Find `assets/icomoon/selection.json` file in your machine
2. Import this file to this [page (icomoon app)](https://icomoon.io/app/#/select):

- Make sure there are no other icons imported there

3. Download icon which need to be added to the app as svg file.
4. Make sure new icon name is unique (already not used).
5. Add svg file to icomoon app.
6. Go to generate font tab - icomoon app.

- Make sure that all icons that you have added have correct names

7. Download font - icomoon app
8. Replace old files with downloaded ones

- ./selection.json => assets/icomoon/selection.json
- ./fonts/icomoon.ttf => assets/icomoon/icomoon.ttf

9. Generate new types for icons

- run script generating icon types `yarn generate:icon:types`

## Sync up with template:

1. Add template remote

```bash
git remote add template git@github.com:binarapps/expo-ts-template.git
```

2. Go to new branch (for safety reason)

```bash
git checkout -b "sync_with_template/1"
```

3. Fetch template remote

```bash
git fetch template
```

4. Merge with template

```bash
git merge -X theirs template/main --allow-unrelated-histories --no-commit
```

5. Review changes

- There can be some issues with files that you were also working, make sure merge doesnt remove your logic

6. Adjust and commit changes

```bash
git commit -m "chore: sync up with template code"
```

## Working with designer in your project

Expo template, you are going to use - bundles native-base ui lib out of the box.
To have the best starting experience in your project - write a dm to your designer that they should use [NativeBase Figma Design Kit](https://www.figma.com/community/file/1050753649783931446)