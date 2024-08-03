import { RouterProvider } from 'react-router-dom';
import { AuthContextProvider, Dark, Light } from '.';
import { router } from './router/router';
import styled, { ThemeProvider } from 'styled-components';
import { createContext, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const ThemeContext = createContext<any>(null);
function App() {
  const [theme, setTheme] = useState('dark');
  const themeStyle = theme === 'dark' ? Dark : Light;
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            {/* <Container> */}
            <RouterProvider router={router} />
            {/* </Container> */}
            <ReactQueryDevtools initialIsOpen={false} />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
// const Container = styled.main`
//   display: grid;
//   grid-template-rows: 1fr;
//   background-color: ${({ theme }) => theme.bgTotal};
// `;
export default App;
