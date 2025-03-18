# About Me Project

- Clone this repo
    <details>
        <summary>Hint</summary>
        ```
        git clone git@github.com:dasfisch/webdev-tuesday-practice.git
        ```
    </details>
- Create a branch and switch to branch
    - `git checkout -b <username>-1`
        - You can check your current branch with `git branch -v`
- Create a new folder in `people/` with your name
    - example `people/nswinford/`
- Create an `index.html` file in that folder.
- It should have a `<header>` and `<main` tag.
    - `<header>` should a `<h1>` tag with your name.
    - `<main>` should have a `<p>` tag with a short description of yourself.
- Add a `<style>` tag with CSS.
    - Style your page however you like with fonts, colors and anything else!
- Add all your changes to staging
    - `git add ...`
- Commit the changes with a message
    - `git commit -m "<an example message>"`
- Push your branch to the repo
    - `git push origin <username-1>`

## "My Favorite Things" Cards

- Needs a `<details>` tag
  - The `<summary>` should say "My Favorite Things"
  - Inside the `<details>` tag, needs a `<ul>` tag with a list of your favorite things
  - Each `<li>` in the `<ul>` should be a presented as a "card"[0]
    - Each card should have a `<img>` tag with a picture of the thing
    - Each card should have a `<h2>` tag with the name of the thing
    - Each card should have a `<p>` tag with a description of the thing, or why you like it
  - When on a small screen, the cards should be stacked
  - When on a large screen, the cards should be in a row (but should wrap if needed)
