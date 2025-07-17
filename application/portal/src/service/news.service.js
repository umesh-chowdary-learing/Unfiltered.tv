export const fetchFilteredNews = async ({queryKey}) => {
    try {
      const [,keyword]=queryKey;
      const response = await axios.get(`http://localhost:5000/api/news/${keyword}`);
      return response.data;
    } catch (err) {
      console.error("Failed to fetch news");
      throw new "Failed to fetch news"
    }
  };