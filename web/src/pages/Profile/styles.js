import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 30px;
  margin: 32px auto;

  header {
    display: flex;
    align-items: center;

    span {
      font-size: 20px;
      margin-left: 24px;
    }

    a {
      width: 280px;
      margin-left: auto;
      margin-top: 0;
    }

    button {
      height: 55px;
      width: 55px;
      border-radius: 4px;
      border: 1px solid var(--link);
      background: transparent;
      margin-left: 16px;
      line-height: 55px;
      transition: all 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        filter: brightness(90%);
      }
    }
  }

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    grid-gap: 24px;

    li {
      background: var(--alt);
      padding: 24px;
      box-shadow: var(--shadow);
      border-radius: 8px;
      position: relative;

      button {
        position: absolute;
        top: 24px;
        right: 24px;
        background: transparent;
        border: 0;
        transition: all 0.5s;

        &:hover {
          opacity: 0.8;
        }
      }

      strong {
        display: block;
        margin-bottom: 10px;
        color: var(--text);
      }

      p + strong {
        margin-top: 32px;
      }

      p {
        line-height: 21px;
        font-size: 16px;
      }

      svg {
        color: var(--text);
      }
    }
  }
`
