import { HookForm } from "../../../../components";
import StyledBuildingSavePopup from "./styles";
import { useStore } from "../../../../providers/store";
import * as yup from "yup";

function BuildingSavePopup({ data, onSubmit, setShow }) {
  const { neighborhood } = useStore();

  const schema = yup.object().shape({
    endereco: yup.string().required("Endereço Necessário"),
    tamanho: yup.number().required("Área Necessária"),
    bairro: yup.string().required("Bairro Necessário"),
  });

  const fields = [
    {
      name: "tamanho",
      label: "Área",
      placeholder: "Digite o tamanho do imóvel",
      value: data?.tamanho ?? "",
    },
    {
      name: "endereco",
      label: "Endereço",
      placeholder: "Digite o endereço",
      value: data?.endereco ?? "",
    },
    {
      name: "bairro",
      label: "Bairro",
      fieldType: "select",
      options: neighborhood,
      value: data?.bairro ?? "",
    },
  ];

  const action = ({ bairro, tamanho, endereco }) => {
    const payload = { bairro, tamanho, endereco };
    if (data) {
      onSubmit(data.matricula, payload);
    } else {
      onSubmit(payload);
    }
    setShow(false);
  };
  return (
    <StyledBuildingSavePopup>
      {data && (
        <div className="matricula">
          <b>Matricula: </b>
          {data.matricula}
        </div>
      )}
      <HookForm action={action} fields={fields} schema={schema} />
    </StyledBuildingSavePopup>
  );
}

export default BuildingSavePopup;
