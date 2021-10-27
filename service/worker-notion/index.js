const BASE_URL = process.env.NOTION_WORKER_ENDPOINT;

export const getPageById = async (pageId) => {
  return await fetch(`${BASE_URL}/page/${pageId}`).then((res) => res.json());
};
