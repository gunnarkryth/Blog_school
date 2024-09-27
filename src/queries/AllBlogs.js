export const AllBlogs = `
query MyQuery {
  blogPosts(first: 10) {
    body
    createdAt
    updatedAt
    thumbnail {
      url
    }
    title
    class
    createdBy {
      name
      picture
    }
  }
}
  `;
