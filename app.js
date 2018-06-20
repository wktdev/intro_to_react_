class App extends React.Component{

     render(){         //_____Render method

         return(       //_____Return statement
          <div>
              <p>Hello world from a component name App</p>
          </div>
         )

     }
}

ReactDOM.render(
    <div>
      <App/>
    </div>,
    document.getElementById('root')
)