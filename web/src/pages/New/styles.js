import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 100%;
    padding: 96px;
    background: var(--alt);
    box-shadow: var(--shadow);
    display: flex;
    justify-content: space-between;
    align-items: center;

    section {
      width: 100%;
      max-width: 380px;

      h1 {
        margin: 64px 0 32px;
        font-size: 32px;
      }
    }

    form {
      width: 100%;
      max-width: 450px;

      input,
      textarea {
        margin-top: 15px;
      }

      .input-group {
        display: flex;

        input + input {
          margin-left: 15px;
        }
      }
    }
  }
`
