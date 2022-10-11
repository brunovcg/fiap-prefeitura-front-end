import StyledTemplateNews from "./styles";
import image_one from "../../../../../assets/images/one.jpeg";
import image_two from "../../../../../assets/images/two.jpeg";
import image_three from "../../../../../assets/images/three.jpeg";
import image_four from "../../../../../assets/images/four.jpeg";

function TemplateNews() {
  return (
    <StyledTemplateNews>
      <h2>Notícias da Prefeitura</h2>
      <div className="news-container">
        <div className="news-section">
          <img src={image_one} alt="imagem_um" />
          <div className="news-title">TRABALHO</div>
          <div className="news-article">
            Prefeitura do Recife oferece 1.170 vagas em cursos de qualificação
            profissional em parceria com o Estado
          </div>
        </div>
        <div className="news-section">
          <img src={image_two} alt="imagem_um" />
          <div className="news-title">SAÚDE</div>
          <div className="news-article">
            Projeto Além do Olhar, da Prefeitura do Recife, realiza atualização
            dos profissionais de saúde para identificar alterações na visão dos
            estudantes da rede municipal
          </div>
        </div>
        <div className="news-section">
          <img src={image_three} alt="imagem_um" />
          <div className="news-title">SAÚDE</div>
          <div className="news-article">
            Hospital Eduardo Campos da Pessoa Idosa promove testagem de
            infecções sexualmente transmissíveis nesta sexta-feira (7)
          </div>
        </div>
        <div className="news-section">
          <img src={image_four} alt="imagem_um" />
          <div className="news-title">SAÚDE</div>
          <div className="news-article">
            Hospital da Mulher do Recife retoma programa Programa de Doulas
            Voluntárias
          </div>
        </div>
      </div>
    </StyledTemplateNews>
  );
}

export default TemplateNews;
