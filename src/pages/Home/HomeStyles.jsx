import styled from 'styled-components'

const HomeStyles = styled.section`

  * {
    --card-description: gray;
    --card-hover: #f5f5ff;
  }

  .homepage__wrapper {
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
    width: 100%;
    align-items: center;
  }
  
  .homepage__title {
    font-size: calc(50px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    width: 100%;
    padding: 0 3rem 3rem 3rem;
    text-align: center;

    @media (max-width: 669px) {
      padding: 0;
    }
  }

  .homepage__content {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5em;
    margin-top: auto;
    
    @media(min-width: 100px) and (max-width: 1200px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }

  .videocard__wrapper {
    padding-bottom: 1.5em;
    width: 100%;
    border-radius: 1em;
    box-shadow: 0 0 6px rgba(0, 0, 0, .5);
    display: flex;
    flex-direction: column;
    cursor: pointer;
    img {
      height: 165px;
      border-radius: 14px 14px 0 0;
      max-height: 165px;
      object-fit: cover;
    }
    .videocard__title {
      font-size: 1.5rem;
      padding: 1.3rem  1.3rem 0 1.3rem;
    }
    .videocard__desc {
      color: var(--card-description);
      padding: 0 1.3rem;
      overflow-wrap: break-word;
    }
    :hover{
      background-color: var(--card-hover);
      box-shadow: 0 0 10px rgba(83, 51, 237, 1);
    }
  }

`;

export default HomeStyles;