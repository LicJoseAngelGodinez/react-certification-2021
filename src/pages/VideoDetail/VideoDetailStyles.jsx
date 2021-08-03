import styled from 'styled-components'

const VideoDetailStyles = styled.div`

  *{
    --card-description: gray;
  }

  .vd__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5rem auto;
  }

  .vd__video {
    width: 100%;
    max-width:1920px;
  }

  .vd__video iframe {
      width: 100%;
      border-radius: 8px;
  }

  .vd__content {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  .vd__title {
    font-size: xx-large;
  }

  .vd__description {
    color: var(--card-description);
  }

  .vd__list {
    overflow: auto;
    white-space:nowrap;
    width: 95vw;
    padding-top: 2rem;
    .videocard__wrapper {
      padding: 10px;
      display: inline-flex;
      flex-direction: column;
      max-width: 15rem;
      vertical-align:top;
      white-space:normal;
      cursor: pointer;
      img {
        height: 165px;
        border-radius: 14px 14px 0 0;
        max-height: 165px;
        object-fit: cover;
      }
      .videocard__title {
        font-size: 1.25rem;
        padding: .3rem  .3rem 0 .3rem;
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
  }


`;

export default VideoDetailStyles;