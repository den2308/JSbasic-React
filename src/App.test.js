import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import 'antd/dist/antd.css';
import './index.css';
import store from './store'
import App from './App';



describe("App", () => {
  it("renders App component", () => {
    render(<Provider store={store}>
      <App />
    </Provider>);
    expect(screen.getByText(/Login screen/i)).toBeInTheDocument();
  });
});