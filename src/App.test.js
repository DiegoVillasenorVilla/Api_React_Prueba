//import { render, screen, waitFor } from '@testing-library/react';
const {render, screen, waitFor} = require("@testing-library/react");
import App from './App';


describe("testing App.js component" , () =>{
  it('test in Input component', () => {
    render(<App/>);
    await waitFor(()=>{
      screen.getByText("Hulk")
    })
    //const
  });
})

/*it('test in t', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
