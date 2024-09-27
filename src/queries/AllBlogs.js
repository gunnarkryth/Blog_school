export const AllBlogs = `
query MyQuery {
  blogPosts {
    body
    createdAt
    updatedAt
    thumbnail {
      url
    }
    title
  }
}
  `;
