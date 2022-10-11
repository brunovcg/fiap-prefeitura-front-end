import TemplateNews from "../templates/template-news";
import TemplateRegulations from "../templates/template-regulations";
import TemplateTaxes from "../templates/template-taxes";
import StyledRegulamentation from "../news/styles";

function Regulamentation() {
  return (
    <StyledRegulamentation>
      <TemplateRegulations />
      <TemplateTaxes />
      <TemplateNews />
    </StyledRegulamentation>
  );
}

export default Regulamentation;
