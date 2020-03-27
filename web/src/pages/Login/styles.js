import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .form {
    width: 100%;
    max-width: 350px;
    margin-right: 60px;
  }

  form {
    margin-top: 100px;

    h1 {
      font-size: 32px;
      margin-bottom: 32px;
    }

    a {
      display: flex;
      align-items: center;
      margin-top: 40px;
      color: var(--link);
      font-size: 18px;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.2;
    }

    a:hover {
      opacity: 0.8;
    }

    a svg {
      margin-right: 10px;
    }
  }

  .illustrate {
    width: 100%;
    max-width: 550px;
  }
`
