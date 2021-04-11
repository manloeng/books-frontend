# Book Store

A simple web app to show a list of books

# The Mission

The main user features that are currently included in this app are the ability to:

- Search for books on the dashboard

# How to run this app locally

## Step 1 - Setting up your own repository

Clone the repo:

```
git clone https://github.com/manloeng/books-frontend
```

Once you have cloned the repo, you should have the repo on your system.

You will need to install the required modules to run the app successfully.

## Step 2 - Installation

On your terminal you will want to run:

```
npm install
```

or

```
yarn
```

This will install all the modules that are listed in the package.json

# Step 3 - Running on an Environment

Once you have the modules installed, you can run the app via npm/yarn depending on how you installed the dependencies:

```
npm run dev
```

or

```
yarn dev
```

# Todo List

- Add tests using jest and enzyme/cypress
- Add burger menu for navigation menu
- Could split dashboard component further so that it has a book component
- improve on styling in mobile view
- Potential to add state management to cache data - Redux/localSession/context
