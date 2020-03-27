import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    --bg: #f0f0f5;
    --text: #333;
    --link: #438ff2;
    --alt: #f0f0f5;
    --shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    font: 400 14px 'Roboto', sans-serif;
    color: var(--text);
    background: var(--bg);
    -webkit-font-smoothing: antialiased;
  }

  /* light theme */
  @media (prefers-color-scheme: light) {
    body {
      --bg: #f0f0f5;
      --text: #333;
      --link: #438ff2;
      --alt: #f0f0f5;
      --shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    }
  }

  /* dark theme */
  @media (prefers-color-scheme: dark) {
    body {
      --bg: #232323;
      --text: #fff;
      --link: #438ff2;
      --alt: #333;
      --shadow: none;
    }
  }

  input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  form input, form textarea {
    width: 100%;
    height: 55px;
    line-height: 55px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 2px 14px 0;
  }

  form textarea {
    min-height: 170px;
    resize: vertical;
  }

  .btn {
    width: 100%;
    height: 55px;
    background: var(--link);
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 55px;
    transition: all .5s;
  }

  .btn:hover {
    filter: brightness(90%);
    transition: all .5s;
  }

  a.rollback {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: var(--link);
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2;

    &:hover {
      opacity: 0.8;
    }

    svg {
      margin-right: 10px;
    }
  }
`
