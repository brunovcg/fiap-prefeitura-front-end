import TemplateNews from "../templates/template-news";
import TemplateRegulations from "../templates/template-regulations";
import TemplateTaxes from "../templates/template-taxes";
import StyledTaxes from "./styles";

function Taxes() {
  return (
    <StyledTaxes>
      <TemplateTaxes />
      <TemplateNews />
      <TemplateRegulations />
    </StyledTaxes>
  );
}

export default Taxes;
