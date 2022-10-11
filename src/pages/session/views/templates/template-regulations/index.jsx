import StyledTemplateRegulations from "./styles";
import image from "../../../../../assets/images/licencas.png";

function TemplateRegulations() {
  const links = [
    {
      id: 1,
      link: "http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/L14017.htm",
      title: "Lei Federal",
    },
    {
      id: 2,
      link: "http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/decreto/D10464.htm",
      title: "Decreto federal",
    },
    {
      id: 3,
      link: "https://dome.recife.pe.gov.br/upload_dome/CAPA_MIOLO_E_CAMARA_15_10_2020_EDICAO_115-assinado.pdf",
      title: "Decreto Municipal (Páginas 4 e 5)",
    },
    {
      id: 4,
      link: "http://www2.recife.pe.gov.br/sites/default/files/chamada_publica_n_001.2020_lab_20.10.pdf",
      title: "Chamada Pública Nº 001/2020",
    },
    {
      id: 5,
      link: "http://www2.recife.pe.gov.br/sites/default/files/edital_de_premiacao_lei_aldir_blanc.pdf",
      title: "Edital de Premiação",
    },
    {
      id: 6,
      link: "http://www2.recife.pe.gov.br/sites/default/files/manual_de_prestacao_de_contas_aldir_blanc.pdf",
      title: "Manual de Prestação de Contas",
    },
  ];

  return (
    <StyledTemplateRegulations>
      <h2>Regulamentação</h2>
      <div className="regulations-link">
        <ul>
          {links.map((item) => (
            <li key={item.id}>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://licenciamentounificado.recife.pe.gov.br/"
          target="_blank"
          rel="noreferrer"
        >
          <figure>
            <img src={image} alt="imagem" />
          </figure>
        </a>
      </div>
    </StyledTemplateRegulations>
  );
}

export default TemplateRegulations;
