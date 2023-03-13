React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const newPosts = res.data.data.children
          .map(obj => obj.data);
  
        setPosts(newPosts);
      });
  }, []);