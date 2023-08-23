export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
}

interface BlogQuery {
  filterOutDrafts?: boolean;
  filterOutFuturePosts?: boolean;
  sortByDate?: boolean;
  limit?: number | null;
  tagsToFilterBy?: string[];
}

export function formatBlogPosts(
  posts: MarkdownPropsLayout[] | MarkdownPropsGlob[],
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = null,
    tagsToFilterBy,
  }: BlogQuery
) {
  let filteredPosts = posts.reduce((acc, post) => {
    // if post is draft and we want to filter out draft, don't add post
    if (filterOutDrafts && post.frontmatter.draft) return acc;

    // if post is in the future and we want to filter out future posts, don't add post
    if (filterOutFuturePosts && new Date(post.frontmatter.date) > new Date())
      return acc;

    // if post does not have the according tags, don't add post
    if (
      tagsToFilterBy &&
      !tagsToFilterBy.some((tag) => post.frontmatter.tags.includes(tag))
    )
      return acc;

    // accumulator is list, so we add post if it passes our filters
    acc.push(post);
    return acc;
  }, [] as MarkdownPropsGlob[] | MarkdownPropsLayout[]);

  // if sorting by date, sort by date, otherwise sort randomly
  if (sortByDate) {
    filteredPosts = filteredPosts.sort((a, b) => {
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      );
    });
  } else {
    filteredPosts = filteredPosts.sort((a, b) => Math.random() - 0.5);
  }

  // if limit is set, limit the number of posts
  if (limit && limit > 0 && limit < filteredPosts.length) {
    filteredPosts = filteredPosts.slice(0, limit);
  }

  return filteredPosts;
}

export function getAllTags(posts: MarkdownPropsLayout[] | MarkdownPropsGlob[]) {
  let allTags = new Set<string>();

  posts.forEach((post) => {
    const tagList = post.frontmatter.tags;

    tagList.forEach((tag) => {
      allTags.add(tag);
    });
  });

  return Array.from(allTags);
}
