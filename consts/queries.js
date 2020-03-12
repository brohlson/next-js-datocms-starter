export const ALL_RECIPES = `
  query recipes {
    recipes: allRecipes {
      id
      title
      slug
    }
  }
`;
