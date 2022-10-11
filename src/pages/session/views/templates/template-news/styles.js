import styled from "styled-components";

const StyledTemplateNews = styled.section`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  padding: 0 20px 30px 20px;
  border-bottom: 1px solid var(--border);
  height: fit-content;
  

  h2 {
    margin-bottom: 30px;
    color: var(--primary);
    font-size: 30px;
  }

  .news-container {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    height: 390px;

    .news-section {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;

      img {
        width: 180px;
        height: 120px;
      }

      .news-title {
        color: var(--dark-font);
        font-weight: bold;
        margin: 20px 0;
        text-align: center;
        height: 20px;
      }

      .news-article {
        text-align: justify;
        height: 100px;
      }
    }
  }
`;

export default StyledTemplateNews;
