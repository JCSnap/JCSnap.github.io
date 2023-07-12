const Home = () => {
  return (
    <div style={{ height: "1800px" }} className="overflow-y-scroll hero-unit">
      <div style={{ height: "400px" }} className="bg-black flex-row">
        <img src="https://picsum.photos/200/300" alt="hero" />
        <div>
          <h1>Hero</h1>
          <p>This is the hero section</p>
        </div>
      </div>
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  );
};

export default Home;
