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
    }
  }

  /* dark theme */
  @media (prefers-color-scheme: dark) {
    body {
      --bg: #232323;
      --text: #fff;
      --link: #438ff2;
    }
  }

  input, button, textarea {
    font: 400 18px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 55px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 14px;
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
`
