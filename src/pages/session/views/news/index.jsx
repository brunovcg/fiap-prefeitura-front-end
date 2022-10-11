import TemplateNews from "../templates/template-news";
import TemplateRegulations from "../templates/template-regulations";
import TemplateTaxes from "../templates/template-taxes";
import StyledNews from "./styles";

function News() {
  return (
    <StyledNews>
      <TemplateNews />
      <TemplateRegulations />
      <TemplateTaxes />
    </StyledNews>
  );
}

export default News;
