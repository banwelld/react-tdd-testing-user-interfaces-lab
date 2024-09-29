function App() {

  return (
    <div style={{margin: '0 15%'}}>
      <div>
        <h1 style={{fontSize: '48px', fontFamily: 'Helvetica'}}>Hi, I'm Dave</h1>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <span style={{width: '40%', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', textAlign: 'center'}}>
          <img
            src="/propic.jpg" 
            alt="Dave Banwell in alleyway with red, white, black, and grey grafiti" 
            style={{width: '300px', height: '300px', borderRadius: '50%', objectFit: 'cover', alignSelf: 'left'}}
          />
        </span>
        <span style={{width: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left'}}>
          <h2
            style={{fontFamily: 'Helvetica'}}
          >
            About Me
          </h2>
          <p>
            Dave Banwell is a queer, autistic, world traveller, and lover of life. He works as a speech analyst and 
            data visualization specialist, while also spending time singing opera, learning software engineering and
            coaching others in overcoming the obstacles in their lives. Dave is a passionate advocate of equity-deserving
            people from all backgrounds, and of humanity, generally, with the goal of expediting human progress and 
            exploring all realms of what's possible when we're united as a people.
          </p>
          <div style={{display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center'}}>
            <a href="https://github.com/banwelld">
              <button>Visit my Github page</button>
            </a>
            <a href="https://www.linkedin.com/in/dave-banwell-2b7a6511">
              <button>Visit my LinkedIn page</button>
            </a>
          </div>
        </span>
      </div>
    </div>
  );

}

export default App;
